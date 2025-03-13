"use client";

import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { supabase } from '@/lib/supabaseClient';

interface AuctionData {
  purse_amount: number;
  total_spent: number;
  remaining_amount: number;
  remaining_rtm: number;
  team_composition: {
    batters: number;
    bowlers: number;
    allRounders: number;
    wicketKeepers: number;
    avgTeamAge: number;
  };
  players_rtm: {
    name: string;
    basePrice: number;
    retainedPrice: number;
  }[];
  players_bought: {
    name: string;
    basePrice: number;
    auctionPrice: number;
  }[];
}

export default function AuctionsPage() {
  const [teamType, setTeamType] = useState<'male' | 'female'>('male');
  const [data, setData] = useState<AuctionData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: auctionData, error } = await supabase
        .from('auctions')
        .select('*')
        .eq('team_type', teamType)
        .maybeSingle(); 

      console.log('Query Result:', auctionData); 
      console.log('Error:', error); 

      if (error) {
        console.error('Error fetching data:', error);
      } else if (!auctionData) {
        console.log('No data found for the selected team type.');
        setData(null); 
      } else {
        setData(auctionData as AuctionData);
      }
    };

    fetchData();
  }, [teamType]);

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">No data found for the selected team type.</h2>
            <p className="text-gray-600 mt-2">Please check back later or contact support.</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
      
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Auction Details</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Stay updated with the latest auction details and player acquisitions for Mumbai Indians.
            </p>
            <div className="mt-6">
              <button
                onClick={() => setTeamType('male')}
                className={`px-6 py-2 rounded-l-full ${
                  teamType === 'male' ? 'bg-amber-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setTeamType('female')}
                className={`px-6 py-2 rounded-r-full ${
                  teamType === 'female' ? 'bg-amber-500 text-white' : 'bg-gray-300 text-gray-700'
                }`}
              >
                Female
              </button>
            </div>
          </div>
        </section>
     
        <div className="container mx-auto py-12 px-4">
        
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">PURSE AMOUNT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">{data.purse_amount}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">TOTAL SPENT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">{data.total_spent}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">REMAINING AMOUNT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">{data.remaining_amount}</p>
              </div>
              <div className="text-center">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">REMAINING RTM</h3>
                <p className="text-2xl font-bold text-amber-500">{data.remaining_rtm}</p>
              </div>
            </div>
          </div>

        
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">BATTERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.team_composition.batters}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">BOWLERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.team_composition.bowlers}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">ALL ROUNDERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.team_composition.allRounders}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">WICKET KEEPERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.team_composition.wicketKeepers}</p>
              </div>
              <div className="text-center">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">AVG TEAM AGE</h3>
                <p className="text-2xl font-bold text-amber-500">{data.team_composition.avgTeamAge}</p>
              </div>
            </div>
          </div>

       
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-navy-900 text-black p-4">
                <h2 className="text-xl font-bold uppercase">PLAYERS RTM</h2>
              </div>
              <div className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Players</th>
                      <th className="text-right py-3 px-4">Base Price (₹)</th>
                      <th className="text-right py-3 px-4">Retained Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.players_rtm.map((player, index) => (
                      <tr key={index}>
                        <td className="py-4 px-4 flex items-center">
                          <span className="inline-block mr-2">🖋️</span>
                          <span className="font-medium uppercase">{player.name}</span>
                        </td>
                        <td className="text-right py-4 px-4 font-bold">{player.basePrice}</td>
                        <td className="text-right py-4 px-4 font-bold">{player.retainedPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="bg-navy-900 text-black p-4">
                <h2 className="text-xl font-bold uppercase">PLAYERS BOUGHT</h2>
              </div>
              <div className="p-4">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4">Players</th>
                      <th className="text-right py-3 px-4">Base Price (₹)</th>
                      <th className="text-right py-3 px-4">Auction Price (₹)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.players_bought.map((player, index) => (
                      <tr key={index} className="border-b border-gray-100">
                        <td className="py-4 px-4 flex items-center">
                          <span className="inline-block mr-2">⚾</span>
                          <span className="font-medium uppercase">{player.name}</span>
                          <span className="inline-block ml-2">✈️</span>
                        </td>
                        <td className="text-right py-4 px-4 font-bold">{player.basePrice}</td>
                        <td className="text-right py-4 px-4 font-bold">{player.auctionPrice}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
"use client";
import { useState } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function AuctionsPage() {
  const [teamType, setTeamType] = useState<'male' | 'female'>('male');

  const maleData = {
    purseAmount: '120 cr',
    totalSpent: '119.8 cr',
    remainingAmount: '20 L',
    remainingRTM: 0,
    teamComposition: {
      batters: 4,
      bowlers: 10,
      allRounders: 6,
      wicketKeepers: 3,
      avgTeamAge: 27,
    },
    playersRTM: [
      { name: 'NAMAN DHIR', basePrice: '30 L', retainedPrice: '5.25 cr' },
    ],
    playersBought: [
      { name: 'TRENT BOULT', basePrice: '2 cr', auctionPrice: '12.5 cr' },
      { name: 'ROBIN MINZ', basePrice: '30 L', auctionPrice: '65 L' },
    ],
  };

  const femaleData = {
    purseAmount: '80 cr',
    totalSpent: '79.5 cr',
    remainingAmount: '50 L',
    remainingRTM: 1,
    teamComposition: {
      batters: 5,
      bowlers: 8,
      allRounders: 5,
      wicketKeepers: 2,
      avgTeamAge: 26,
    },
    playersRTM: [
      { name: 'PLAYER A', basePrice: '20 L', retainedPrice: '3 cr' },
    ],
    playersBought: [
      { name: 'PLAYER B', basePrice: '1 cr', auctionPrice: '8 cr' },
      { name: 'PLAYER C', basePrice: '40 L', auctionPrice: '1.2 cr' },
    ],
  };

  const data = teamType === 'male' ? maleData : femaleData;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Gradient Header Section */}
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
        {/* Main Content Container */}
        <div className="container mx-auto py-12 px-4">
          {/* Purse Statistics */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">PURSE AMOUNT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">{data.purseAmount}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">TOTAL SPENT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">{data.totalSpent}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">REMAINING AMOUNT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">{data.remainingAmount}</p>
              </div>
              <div className="text-center">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">REMAINING RTM</h3>
                <p className="text-2xl font-bold text-amber-500">{data.remainingRTM}</p>
              </div>
            </div>
          </div>

          {/* Team Composition */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">BATTERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.teamComposition.batters}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">BOWLERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.teamComposition.bowlers}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">ALL ROUNDERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.teamComposition.allRounders}</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">WICKET KEEPERS</h3>
                <p className="text-2xl font-bold text-amber-500">{data.teamComposition.wicketKeepers}</p>
              </div>
              <div className="text-center">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">AVG TEAM AGE</h3>
                <p className="text-2xl font-bold text-amber-500">{data.teamComposition.avgTeamAge}</p>
              </div>
            </div>
          </div>

          {/* Players RTM */}
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
                    {data.playersRTM.map((player, index) => (
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

          {/* Players Bought */}
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
                    {data.playersBought.map((player, index) => (
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
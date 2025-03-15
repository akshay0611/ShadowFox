"use client";
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function StatsPage() {
  const topRunScorers = [
    { name: "Rohit Sharma", matches: 15, runs: 480, avg: 32.0, sr: 145.45, fifties: 3, hundreds: 0 },
    { name: "Ishan Kishan", matches: 15, runs: 418, avg: 29.85, sr: 152.73, fifties: 2, hundreds: 0 },
    { name: "Suryakumar Yadav", matches: 14, runs: 542, avg: 45.16, sr: 173.4, fifties: 4, hundreds: 1 },
    { name: "Tilak Varma", matches: 15, runs: 376, avg: 37.6, sr: 138.97, fifties: 3, hundreds: 0 },
    { name: "Tim David", matches: 12, runs: 245, avg: 27.22, sr: 164.43, fifties: 1, hundreds: 0 },
  ]

  const topWicketTakers = [
    { name: "Buyman Chawla", wickets: 18, avg: 20.5, economy: 7.8, best: "4/20" },
    { name: "Green Arshad", wickets: 15, avg: 22.3, economy: 8.1, best: "3/25" },
  ]


  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  

  const totalTeamRuns = topRunScorers.reduce((sum, player) => sum + player.runs, 0);
  

  const runDistributionData = topRunScorers.map(player => ({
    name: player.name,
    value: player.runs,
    percentage: ((player.runs / totalTeamRuns) * 100).toFixed(1)
  }));
  

  const strikeRateData = topRunScorers.map(player => ({
    name: player.name,
    "Strike Rate": player.sr
  }));
  

  const battingMilestonesData = [
    { name: "50s", count: topRunScorers.reduce((sum, player) => sum + player.fifties, 0) },
    { name: "100s", count: topRunScorers.reduce((sum, player) => sum + player.hundreds, 0) }
  ];
  

  const economyRateData = topWicketTakers.map(player => ({
    name: player.name,
    "Economy Rate": player.economy,
    "Bowling Average": player.avg
  }));

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Team Statistics</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Explore Mumbai Indians players&apos; performance statistics for IPL 2025.
            </p>
          </div>
        </section>

      
        <section className="w-full py-8 bg-gray-50">
          <div className="container px-4 md:px-6 mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Batting Overview</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Run Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={runDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percentage }) => `${name}: ${percentage}%`}
                      >
                        {runDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value} runs`} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

           
              <div className="bg-white p-4 rounded-lg shadow">
                <h3 className="text-lg font-semibold mb-4">Strike Rate Comparison</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={strikeRateData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis domain={[0, 200]} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Strike Rate" fill="#0088FE" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
         
              <div>
                <h2 className="text-2xl font-bold mb-6">Top Run Scorers</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="p-3 text-left">Player</th>
                        <th className="p-3 text-center">Matches</th>
                        <th className="p-3 text-center">Runs</th>
                        <th className="p-3 text-center">Average</th>
                        <th className="p-3 text-center">Strike Rate</th>
                        <th className="p-3 text-center">50s</th>
                        <th className="p-3 text-center">100s</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topRunScorers.map((player, index) => (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="p-3">{player.name}</td>
                          <td className="p-3 text-center">{player.matches}</td>
                          <td className="p-3 text-center">{player.runs}</td>
                          <td className="p-3 text-center">{player.avg}</td>
                          <td className="p-3 text-center">{player.sr}</td>
                          <td className="p-3 text-center">{player.fifties}</td>
                          <td className="p-3 text-center">{player.hundreds}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

         
              <div className="bg-gray-50 p-6 rounded-lg">
                <h2 className="text-2xl font-bold mb-6">Bowling Performance</h2>
                <div className="h-64 mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={economyRateData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Economy Rate" fill="#00C49F" />
                      <Bar dataKey="Bowling Average" fill="#FF8042" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              
              
                <div>
                  <h3 className="text-xl font-bold mb-4">Top Wicket Takers</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="p-3 text-left">Player</th>
                          <th className="p-3 text-center">Wickets</th>
                          <th className="p-3 text-center">Average</th>
                          <th className="p-3 text-center">Economy</th>
                          <th className="p-3 text-center">Best</th>
                        </tr>
                      </thead>
                      <tbody>
                        {topWicketTakers.map((player, index) => (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="p-3">{player.name}</td>
                            <td className="p-3 text-center">{player.wickets}</td>
                            <td className="p-3 text-center">{player.avg}</td>
                            <td className="p-3 text-center">{player.economy}</td>
                            <td className="p-3 text-center">{player.best}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

        
              <div>
                <h2 className="text-2xl font-bold mb-6">Rating Milestones</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-lg">Highest Individual Score</h3>
                    <p className="text-2xl font-bold mt-2">112* (51)</p>
                    <p className="mt-1">Suryakumar Yadav vs RCB</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-lg">Highest Team Total</h3>
                    <p className="text-2xl font-bold mt-2">234/5</p>
                    <p className="mt-1">vs Sunrisers Hyderabad</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-6 rounded-lg shadow">
                    <h3 className="font-semibold text-lg">Most Sixes in an Innings</h3>
                    <p className="text-2xl font-bold mt-2">8 sixes</p>
                    <p className="mt-1">Suryakumar Yadav vs RCB</p>
                  </div>
                </div>
              </div>

             
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-bold mb-6">Batting Milestones</h2>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={battingMilestonesData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="count" fill="#8884d8" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
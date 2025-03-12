import Header from "@/components/Header";
import Footer from "@/components/Footer";


export default function AuctionsPage() {
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
          </div>
        </section>
        {/* Main Content Container */}
        <div className="container mx-auto py-12 px-4">
         {/* Purse Statistics */}
         <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">PURSE AMOUNT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">120 cr</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">TOTAL SPENT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">119.8 cr</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">REMAINING AMOUNT (₹)</h3>
                <p className="text-2xl font-bold text-amber-500">20 L</p>
              </div>
              <div className="text-center">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">REMAINING RTM</h3>
                <p className="text-2xl font-bold text-amber-500">0</p>
              </div>
            </div>
          </div>

          {/* Team Composition */}
          <div className="mb-12">
            <div className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">BATTERS</h3>
                <p className="text-2xl font-bold text-amber-500">4</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">BOWLERS</h3>
                <p className="text-2xl font-bold text-amber-500">10</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">ALL ROUNDERS</h3>
                <p className="text-2xl font-bold text-amber-500">6</p>
              </div>
              <div className="text-center border-r border-gray-200">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">WICKET KEEPERS</h3>
                <p className="text-2xl font-bold text-amber-500">3</p>
              </div>
              <div className="text-center">
                <h3 className="uppercase text-sm font-semibold text-gray-600 mb-2">AVG TEAM AGE</h3>
                <p className="text-2xl font-bold text-amber-500">27</p>
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
                    <tr>
                      <td className="py-4 px-4 flex items-center">
                        <span className="inline-block mr-2">🖋️</span>
                        <span className="font-medium uppercase">NAMAN DHIR</span>
                      </td>
                      <td className="text-right py-4 px-4 font-bold">30 L</td>
                      <td className="text-right py-4 px-4 font-bold">5.25 cr</td>
                    </tr>
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
                    <tr className="border-b border-gray-100">
                      <td className="py-4 px-4 flex items-center">
                        <span className="inline-block mr-2">⚾</span>
                        <span className="font-medium uppercase">TRENT BOULT</span>
                        <span className="inline-block ml-2">✈️</span>
                      </td>
                      <td className="text-right py-4 px-4 font-bold">2 cr</td>
                      <td className="text-right py-4 px-4 font-bold">12.5 cr</td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 flex items-center">
                        <span className="inline-block mr-2">|||</span>
                        <span className="font-medium uppercase">ROBIN MINZ</span>
                      </td>
                      <td className="text-right py-4 px-4 font-bold">30 L</td>
                      <td className="text-right py-4 px-4 font-bold">65 L</td>
                    </tr>
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
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ForgotPasswordPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 text-white flex justify-center items-center">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Forgot Password</h1>
            <p className="mx-auto max-w-[700px] mt-4 text-gray-200 md:text-xl">
              Enter your email address to reset your password.
            </p>
          </div>
        </section>

        <section className="w-full py-12 flex justify-center items-center">
          <div className="container px-4 md:px-6">
            <div className="max-w-[400px] mx-auto bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6">Reset Your Password</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </form>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Remember your password?{" "}
                  <Link href="/sign-in" className="text-blue-600 hover:underline">
                    Sign In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function AboutPark() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-800 to-blue-600 text-white py-16">
          <div className="absolute inset-0 z-0 opacity-20">
            <div className="absolute inset-0 bg-blue-900"></div>
            <svg
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute h-full w-full"
            >
              <defs>
                <pattern
                  id="smallGrid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="white"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#smallGrid)" />
            </svg>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Ballclub Field
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                The Home of Colorado Ballclub Baseball
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/schedule"
                  className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl"
                >
                  View Schedule
                </Link>
                <a
                  href="#seating-chart"
                  className="border-2 border-white hover:border-yellow-300 text-white px-6 py-2 rounded-full font-bold hover:text-yellow-300 transition-all duration-300"
                >
                  Seating Chart
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Stadium Overview */}
          <section className="mb-16">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
                  About Ballclub Field
                  <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
                </h2>
                <div className="prose prose-lg max-w-none text-gray-700">
                  <p>
                    Ballclub Field, located in the heart of Colorado, Colorado,
                    has been the proud home of the Colorado Ballclub since 2001.
                    This state-of-the-art stadium combines classic baseball
                    charm with modern amenities to provide fans with an
                    unforgettable game day experience.
                  </p>
                  <p>
                    The ballpark features seating for over 6,000 fans, carefully
                    designed to ensure every seat offers a perfect view of the
                    diamond. From the comfortable box seats behind home plate to
                    the family-friendly berm seating in the outfield, Ballclub
                    Field caters to every type of baseball fan.
                  </p>
                  <p>
                    Beyond the exceptional baseball action, Ballclub Field
                    offers a wide variety of food and beverage options,
                    interactive fan experiences, and special themed areas that
                    make every visit memorable for fans of all ages.
                  </p>
                </div>
              </div>
              <div className="md:w-1/3 flex justify-center items-center">
                <div className="bg-white rounded-xl shadow-xl p-6 transform hover:-translate-y-2 transition-all duration-300">
                  <div className="bg-blue-50 rounded-lg p-8 flex items-center justify-center mb-4">
                    <div className="text-9xl">⚾</div>
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-blue-800">
                      Home of Champions
                    </h3>
                    <p className="text-gray-600 mt-2">
                      Experience the excitement at Ballclub Field!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Seating Chart */}
          <section id="seating-chart" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Seating Chart
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="bg-blue-50 rounded-lg p-6 flex items-center justify-center mb-6">
                <div className="text-center">
                  <div className="text-5xl mb-4">🏟️</div>
                  <p className="text-gray-500 italic">
                    Seating chart image placeholder
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Box Seats</h3>
                  <p className="text-gray-700">
                    Our premium seating option located directly behind home
                    plate with the best views of the game.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Field Box</h3>
                  <p className="text-gray-700">
                    Great seats along the first and third base lines with
                    excellent views of all the action.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">
                    Reserved Seating
                  </h3>
                  <p className="text-gray-700">
                    Comfortable stadium seating throughout the main concourse
                    level.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">
                    Outfield Berm
                  </h3>
                  <p className="text-gray-700">
                    Family-friendly grass seating area perfect for kids and
                    casual fans.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">
                    Luxury Suites
                  </h3>
                  <p className="text-gray-700">
                    Climate-controlled private suites with premium amenities for
                    groups and special events.
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-bold text-blue-800 mb-2">Party Deck</h3>
                  <p className="text-gray-700">
                    Group area with all-inclusive food and beverage packages for
                    special celebrations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Park Features */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Stadium Features
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Concessions
                </h3>
                <p className="text-gray-600">
                  Enjoy a variety of food and beverage options from classic
                  ballpark fare to local Colorado specialties.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Ticket Office
                </h3>
                <p className="text-gray-600">
                  Located at the main entrance, our ticket office is open on
                  game days and weekdays for all your ticket needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-blue-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-800">
                  Fan Experience
                </h3>
                <p className="text-gray-600">
                  Interactive areas, games, and activities for fans of all ages
                  throughout the concourse.
                </p>
              </div>
            </div>
          </section>

          {/* Parking Information */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Parking Information
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Parking Options
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">Main Lot</h4>
                        <p className="text-gray-600">
                          Located directly in front of the stadium entrance. $10
                          per vehicle.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          VIP Parking
                        </h4>
                        <p className="text-gray-600">
                          Premium spots closest to the entrance. $15 per
                          vehicle.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-2 mr-4 mt-1">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-800">
                          Overflow Lot
                        </h4>
                        <p className="text-gray-600">
                          Additional parking for high-attendance games. $8 per
                          vehicle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-blue-700 mb-4">
                    Parking Tips
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                      </svg>
                      <span>
                        Arrive early for the best parking options, especially
                        for weekend and promotional games.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                      </svg>
                      <span>
                        Cash and credit cards accepted at all parking locations.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                      </svg>
                      <span>
                        Season ticket holders receive parking passes for
                        dedicated spots.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-500 mr-2 mt-1"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z"></path>
                      </svg>
                      <span>ADA accessible parking available in all lots.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 text-center text-white relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Visit Ballclub Field?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Join us for the next home game and experience the excitement of
                Colorado Ballclub baseball!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/schedule"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  View Schedule
                </Link>
                <Link
                  href="/ballpark/faq"
                  className="bg-blue-800/50 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Ballpark FAQ
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

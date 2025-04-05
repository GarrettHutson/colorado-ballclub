import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function FAQ() {
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
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Everything you need to know about visiting Ballclub Field
              </p>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* FAQ Search */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Search FAQs
              </h2>
              <div className="relative">
                <input
                  type="text"
                  placeholder="What can we help you with?"
                  className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-500 hover:text-blue-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-wrap gap-3 mt-4">
                <span className="text-sm text-gray-600">Popular:</span>
                <a
                  href="#tickets"
                  className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                >
                  Tickets
                </a>
                <a
                  href="#parking"
                  className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                >
                  Parking
                </a>
                <a
                  href="#food"
                  className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                >
                  Food & Drinks
                </a>
                <a
                  href="#policies"
                  className="text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200 transition-colors"
                >
                  Stadium Policies
                </a>
              </div>
            </div>
          </section>

          {/* FAQ Categories */}
          <section className="mb-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a
                href="#tickets"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Tickets
                  </h3>
                </div>
              </a>
              <a
                href="#parking"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Parking
                  </h3>
                </div>
              </a>
              <a
                href="#food"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
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
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Food & Drinks
                  </h3>
                </div>
              </a>
              <a
                href="#policies"
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow group"
              >
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                    Stadium Policies
                  </h3>
                </div>
              </a>
            </div>
          </section>

          {/* Ticket FAQs */}
          <section id="tickets" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Tickets
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  How can I purchase tickets?
                </h3>
                <p className="text-gray-700">
                  Tickets can be purchased online through our official website,
                  by phone at (859) 555-0123, or in person at the Ballclub Field
                  Ticket Office. The ticket office is open Monday through Friday
                  from 10am to 5pm and on game days until the 7th inning.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What are the different seating options?
                </h3>
                <p className="text-gray-700">
                  We offer several seating options including Box Seats, Field
                  Box, Reserved Seating, Outfield Berm, Luxury Suites, and the
                  Party Deck. Visit our{" "}
                  <Link
                    href="/ballpark/about#seating-chart"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    seating chart
                  </Link>{" "}
                  for more information on each option.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Are there discounts available for tickets?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer discounts for military personnel, seniors, and
                  children under 12. We also have special group rates for
                  parties of 15 or more. Additionally, we offer various
                  promotional nights throughout the season with special ticket
                  pricing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Can I exchange my tickets for a different game?
                </h3>
                <p className="text-gray-700">
                  Ticket exchanges can be made at the Ticket Office for games
                  within the same season, subject to availability. Exchanges
                  must be made at least 24 hours before the original game date.
                  A small exchange fee may apply.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What happens if a game is postponed or canceled?
                </h3>
                <p className="text-gray-700">
                  In the event of a postponement, your ticket will be valid for
                  the rescheduled game. If a game is canceled and not
                  rescheduled, or if you cannot attend the rescheduled date, you
                  may exchange your ticket for a future regular season game of
                  equal or lesser value, subject to availability.
                </p>
              </div>
            </div>
          </section>

          {/* Parking FAQs */}
          <section id="parking" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Parking
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Where can I park at Ballclub Field?
                </h3>
                <p className="text-gray-700">
                  Ballclub Field offers several parking options including the
                  Main Lot, VIP Parking, and Overflow Lot. The Main Lot is
                  located directly in front of the stadium entrance. Visit our{" "}
                  <Link
                    href="/ballpark/about#parking"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    parking information
                  </Link>{" "}
                  page for more details.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  How much does parking cost?
                </h3>
                <p className="text-gray-700">
                  Parking rates are as follows: Main Lot ($10), VIP Parking
                  ($15), and Overflow Lot ($8). Season ticket holders receive
                  parking passes for dedicated spots as part of their package.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Is there accessible parking available?
                </h3>
                <p className="text-gray-700">
                  Yes, ADA accessible parking spaces are available in all
                  parking lots. These spaces are available on a first-come,
                  first-served basis for vehicles displaying a valid accessible
                  parking permit.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  When do the parking lots open?
                </h3>
                <p className="text-gray-700">
                  Parking lots open 2 hours before the scheduled game time. We
                  recommend arriving early, especially for weekend and
                  promotional games when attendance is higher.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Is tailgating allowed in the parking lots?
                </h3>
                <p className="text-gray-700">
                  Limited tailgating is permitted in designated areas of the
                  Overflow Lot only. Grills and alcohol consumption must follow
                  our tailgating policy guidelines, which are available at the
                  ticket office or on our website.
                </p>
              </div>
            </div>
          </section>

          {/* Food & Drinks FAQs */}
          <section id="food" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Food & Drinks
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What food options are available at Ballclub Field?
                </h3>
                <p className="text-gray-700">
                  Ballclub Field offers a variety of food options from
                  traditional ballpark fare like hot dogs, burgers, and nachos
                  to local Colorado specialties. We have multiple concession
                  stands throughout the concourse as well as specialty food
                  carts.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Are alcoholic beverages available?
                </h3>
                <p className="text-gray-700">
                  Yes, beer, wine, and select cocktails are available for
                  purchase at designated concession stands and bars throughout
                  the stadium. Alcohol sales end at the conclusion of the 7th
                  inning. Valid ID is required for all alcohol purchases.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Can I bring my own food or drinks into the stadium?
                </h3>
                <p className="text-gray-700">
                  Outside food is permitted in small quantities in clear plastic
                  bags. One factory-sealed water bottle (20oz or smaller) per
                  person is allowed. No outside alcoholic beverages, glass
                  containers, or cans are permitted.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Are there vegetarian, vegan, or gluten-free options available?
                </h3>
                <p className="text-gray-700">
                  Yes, we offer a selection of vegetarian, vegan, and
                  gluten-free options at designated concession areas. Look for
                  the "Special Dietary Options" signs or ask any concession
                  staff for assistance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Can I order food delivery to my seat?
                </h3>
                <p className="text-gray-700">
                  Mobile ordering is available through our official Colorado
                  Ballclub app. Select concession items can be ordered and
                  delivered directly to your seat in certain seating sections.
                  Look for the "In-Seat Delivery" option in the app.
                </p>
              </div>
            </div>
          </section>

          {/* Stadium Policies FAQs */}
          <section id="policies" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Stadium Policies
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What items are prohibited at Ballclub Field?
                </h3>
                <p className="text-gray-700">
                  Prohibited items include weapons, illegal substances, glass
                  containers, cans, large coolers, noisemakers, laser pointers,
                  drones, professional cameras with detachable lenses, selfie
                  sticks, and any item deemed dangerous or disruptive by stadium
                  management.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Is smoking allowed in the stadium?
                </h3>
                <p className="text-gray-700">
                  Ballclub Field is a smoke-free facility. Smoking, including
                  e-cigarettes and vaping devices, is not permitted anywhere
                  inside the stadium. A designated smoking area is located
                  outside the main entrance, and re-entry is permitted with a
                  valid ticket stub and hand stamp.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What is the re-entry policy?
                </h3>
                <p className="text-gray-700">
                  Re-entry is permitted with a valid ticket stub and hand stamp.
                  To receive a hand stamp, please visit the designated re-entry
                  gate before exiting the stadium.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Is there a bag policy?
                </h3>
                <p className="text-gray-700">
                  Small bags and purses (smaller than 16" x 16" x 8") are
                  permitted but will be inspected upon entry. Clear bags are
                  strongly encouraged for expedited entry. Diaper bags and
                  medically necessary bags are permitted regardless of size but
                  will be inspected.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Are there accommodations for guests with disabilities?
                </h3>
                <p className="text-gray-700">
                  Yes, Ballclub Field provides accessible seating areas,
                  restrooms, concessions, and parking for guests with
                  disabilities. Service animals are welcome. Please contact our
                  Ticket Office in advance for specific accommodation requests
                  or assistance.
                </p>
              </div>
            </div>
          </section>

          {/* Additional FAQs */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 relative">
              Additional FAQs
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  How can I sing the National Anthem at a game?
                </h3>
                <p className="text-gray-700">
                  To apply to sing the National Anthem, please submit an
                  application through our online form or contact our special
                  events coordinator at events@ColoradoBallclub.com. Auditions
                  may be required, and spots fill up quickly for the season.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  How can I request a donation for my charity or non-profit?
                </h3>
                <p className="text-gray-700">
                  The Colorado Ballclub are proud to support local community
                  initiatives. Donation requests should be submitted through our
                  online Community Request Form at least 4 weeks before your
                  event. Please note that we receive many requests and cannot
                  fulfill all of them.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  How can I advertise with the Colorado Ballclub?
                </h3>
                <p className="text-gray-700">
                  For advertising and sponsorship opportunities, please contact
                  our corporate partnerships department at
                  sponsors@ColoradoBallclub.com or call (859) 555-0128. We offer
                  a variety of options including signage, program ads, digital
                  displays, and promotional nights.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Are there job opportunities with the Colorado Ballclub?
                </h3>
                <p className="text-gray-700">
                  Yes, we hire for both full-time and seasonal positions.
                  Full-time positions are posted on our website as they become
                  available. Seasonal positions for game day staff are typically
                  hired before the start of each season. Visit our Careers page
                  for current opportunities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  How can I arrange a birthday celebration at the ballpark?
                </h3>
                <p className="text-gray-700">
                  We offer several birthday packages that include game tickets,
                  food, scoreboard messages, and special birthday surprises.
                  Visit our{" "}
                  <Link href="#" className="text-blue-600 hover:text-blue-800">
                    Packages & Parties
                  </Link>{" "}
                  page for details and booking information.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Still Have Questions?
              </h2>
              <p className="text-gray-700 mb-6">
                If you couldn't find the answer to your question, please contact
                us directly and we'll be happy to help!
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">(859) 555-0123</p>
                    <p className="text-gray-500 text-sm">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@ColoradoBallclub.com</p>
                    <p className="text-gray-500 text-sm">
                      We respond within 24 hours
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Live Chat</h3>
                    <p className="text-gray-600">Available on our website</p>
                    <p className="text-gray-500 text-sm">Game days: 9am-9pm</p>
                  </div>
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
                  href="/ballpark/about"
                  className="bg-blue-800/50 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  About the Park
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

import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function SeasonTickets() {
  // Mock season ticket plans data
  const seasonPlans = [
    {
      id: 1,
      name: "Full Season",
      games: 70,
      perGame: "$10-15",
      features: [
        "Same great seat for all 70 home games",
        "20% discount on team merchandise",
        "Exclusive season ticket holder events",
        "Priority playoff ticket access",
        "Free parking pass",
        "Ballclub Rewards program",
        "Unused ticket exchange program",
        "Early stadium access",
      ],
      popular: true,
      price: "From $700",
    },
    {
      id: 2,
      name: "Half Season",
      games: 35,
      perGame: "$11-16",
      features: [
        "Choose between weekend or weekday plan",
        "15% discount on team merchandise",
        "Exclusive season ticket holder events",
        "Priority playoff ticket access",
        "Ballclub Rewards program",
        "Unused ticket exchange program",
      ],
      popular: false,
      price: "From $385",
    },
    {
      id: 3,
      name: "Weekend Plan",
      games: 28,
      perGame: "$12-17",
      features: [
        "All Friday, Saturday and Sunday home games",
        "10% discount on team merchandise",
        "Priority playoff ticket access",
        "Ballclub Rewards program",
        "Unused ticket exchange program",
      ],
      popular: false,
      price: "From $336",
    },
  ];

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
                Season Tickets
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Join the Colorado Ballclub family with the best ticket packages
                available
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#season-plans"
                  className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl"
                >
                  View Plans
                </a>
                <a
                  href="#contact"
                  className="border-2 border-white hover:border-yellow-300 text-white px-6 py-2 rounded-full font-bold hover:text-yellow-300 transition-all duration-300"
                >
                  Contact a Rep
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Season Ticket Benefits */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Why Choose Season Tickets?
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
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
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Best Value
                </h3>
                <p className="text-gray-600">
                  Save up to 35% compared to individual game tickets. The more
                  games in your package, the more you save per ticket.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
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
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Premium Benefits
                </h3>
                <p className="text-gray-600">
                  Enjoy exclusive perks like merchandise discounts, special
                  events, early stadium access, and the Ballclub Rewards
                  program.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl">
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
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Flexibility
                </h3>
                <p className="text-gray-600">
                  Can't make it to a game? Exchange unused tickets for available
                  games later in the season (subject to availability).
                </p>
              </div>
            </div>
          </section>

          {/* Season Ticket Plans */}
          <section id="season-plans" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Season Ticket Plans
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {seasonPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-xl shadow-xl overflow-hidden ${plan.popular ? "ring-4 ring-yellow-400" : ""}`}
                >
                  {plan.popular && (
                    <div className="bg-yellow-400 text-blue-900 py-1 px-4 text-center font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-blue-800 mb-2">
                      {plan.name}
                    </h3>
                    <div className="text-gray-600 mb-4">
                      {plan.games} home games
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">
                      {plan.price}
                    </div>
                    <div className="text-sm text-gray-500 mb-6">
                      {plan.perGame} per game (based on seating)
                    </div>

                    <h4 className="font-bold text-gray-800 mb-3">
                      Plan Includes:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg
                            className="w-5 h-5 text-green-500 mr-2 mt-0.5"
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
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href="#contact"
                      className={`block w-full py-3 px-4 rounded-lg text-center font-bold ${
                        plan.popular
                          ? "bg-yellow-500 hover:bg-yellow-400 text-blue-900"
                          : "bg-blue-600 hover:bg-blue-500 text-white"
                      } transition-colors shadow-md hover:shadow-lg`}
                    >
                      Select This Plan
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 rounded-xl p-6 flex items-start">
              <svg
                className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <div>
                <span className="block font-bold text-blue-800 mb-1">
                  Looking for mini plans?
                </span>
                <p className="text-gray-700">
                  We also offer 10-game and 15-game mini plans. Perfect for fans
                  with busy schedules who still want to enjoy the benefits of
                  being a plan holder.
                  <Link
                    href="/tickets/packages"
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    View Mini Plans →
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Seating Options */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Seating Options & Pricing
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
              <div className="mb-8">
                <p className="text-gray-700 mb-4">
                  Season tickets are available in every seating section. Prices
                  vary based on location. View our seating chart and pricing
                  options below:
                </p>
                <div className="bg-blue-50 rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl mb-4">🏟️</div>
                    <p className="text-gray-500 italic">
                      Seating chart image placeholder
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead>
                    <tr className="bg-blue-800 text-white">
                      <th className="py-3 px-4 text-left rounded-tl-lg">
                        Seating Area
                      </th>
                      <th className="py-3 px-4 text-center">Full Season</th>
                      <th className="py-3 px-4 text-center">Half Season</th>
                      <th className="py-3 px-4 text-center rounded-tr-lg">
                        Weekend Plan
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">
                        Premium Box (Rows 1-5)
                      </td>
                      <td className="py-3 px-4 text-center">$1,050</td>
                      <td className="py-3 px-4 text-center">$560</td>
                      <td className="py-3 px-4 text-center">$476</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">
                        Box Seats (Rows 6-15)
                      </td>
                      <td className="py-3 px-4 text-center">$910</td>
                      <td className="py-3 px-4 text-center">$490</td>
                      <td className="py-3 px-4 text-center">$420</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">Field Reserved</td>
                      <td className="py-3 px-4 text-center">$840</td>
                      <td className="py-3 px-4 text-center">$455</td>
                      <td className="py-3 px-4 text-center">$392</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium">
                        Reserved Seating
                      </td>
                      <td className="py-3 px-4 text-center">$770</td>
                      <td className="py-3 px-4 text-center">$420</td>
                      <td className="py-3 px-4 text-center">$364</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium rounded-bl-lg">
                        General Admission
                      </td>
                      <td className="py-3 px-4 text-center">$700</td>
                      <td className="py-3 px-4 text-center">$385</td>
                      <td className="py-3 px-4 text-center rounded-br-lg">
                        $336
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 text-sm text-gray-600">
                * All prices are per seat for the entire season plan and include
                all applicable taxes and fees.
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Frequently Asked Questions
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  When is payment due for season tickets?
                </h3>
                <p className="text-gray-700">
                  We offer several payment options including full payment,
                  half-season split payment, and monthly installments. Payment
                  plans are available with no additional fees or interest.
                  Contact our ticket office for details.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Can I share season tickets with friends or family?
                </h3>
                <p className="text-gray-700">
                  Yes! Many of our season ticket holders create groups to share
                  their tickets. You can manage this privately or we can help
                  you formalize a group and manage ticket distribution.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What is the Ballclub Rewards program?
                </h3>
                <p className="text-gray-700">
                  Ballclub Rewards is our exclusive program for season ticket
                  holders. Earn points for game attendance, concession
                  purchases, and merchandise buys. Redeem points for
                  experiences, memorabilia, seat upgrades, and more.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What if I can't attend a game in my package?
                </h3>
                <p className="text-gray-700">
                  Our Unused Ticket Exchange Program allows you to exchange
                  tickets for games you can't attend for available tickets to
                  other regular season games. Exchanges must be made at least 24
                  hours before the original game time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Can I choose my own seats?
                </h3>
                <p className="text-gray-700">
                  Absolutely! Our ticket representatives will work with you to
                  select the best available seats based on your preferences and
                  budget. Full season ticket holders get priority seating
                  selection.
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <Link
                href="/ballpark/faq"
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
              >
                View all FAQs
                <svg
                  className="ml-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Contact a Ticket Representative
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Get in Touch
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Our dedicated ticket representatives are ready to help you
                    select the perfect season ticket package for your needs and
                    budget.
                  </p>

                  <form className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700 mb-1"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="plan"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        I'm Interested In
                      </label>
                      <select
                        id="plan"
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select a plan...</option>
                        <option value="full">Full Season Plan</option>
                        <option value="half">Half Season Plan</option>
                        <option value="weekend">Weekend Plan</option>
                        <option value="mini">Mini Plans</option>
                        <option value="undecided">Not sure yet</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-1"
                      >
                        Additional Information
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Let us know if you have specific questions or preferences..."
                      ></textarea>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                      >
                        Submit Request
                      </button>
                    </div>
                  </form>
                </div>

                <div className="bg-blue-700 text-white p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      Contact Information
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-yellow-400 mr-3 mt-1"
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
                        <div>
                          <h4 className="font-bold">Phone</h4>
                          <p className="text-blue-200">(859) 555-0123</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-yellow-400 mr-3 mt-1"
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
                        <div>
                          <h4 className="font-bold">Email</h4>
                          <p className="text-blue-200">
                            tickets@ColoradoBallclub.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-yellow-400 mr-3 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>
                        <div>
                          <h4 className="font-bold">Ticket Office</h4>
                          <p className="text-blue-200">
                            207 Ballclub Lane
                            <br />
                            Colorado, KY 40505
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <svg
                          className="w-6 h-6 text-yellow-400 mr-3 mt-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>
                        <div>
                          <h4 className="font-bold">Hours</h4>
                          <p className="text-blue-200">
                            Monday - Friday: 9am - 5pm
                            <br />
                            Game Days: 9am - End of 7th Inning
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h4 className="font-bold mb-2">Meet Our Team</h4>
                    <p className="text-blue-200 mb-4">
                      Our friendly ticket representatives are dedicated to
                      finding the perfect plan for you:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <div className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                        Jennifer
                      </div>
                      <div className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                        Michael
                      </div>
                      <div className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                        David
                      </div>
                      <div className="bg-blue-600 px-3 py-1 rounded-full text-sm">
                        Sarah
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              What Our Season Ticket Holders Say
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "Being a season ticket holder for the past 5 years has been
                  incredible. The staff knows my family by name, and the
                  exclusive events make us feel like part of the team. Best
                  investment for our family entertainment!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">JM</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">James Miller</div>
                    <div className="text-sm text-gray-500">
                      Full Season Ticket Holder since 2019
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "The weekend plan is perfect for our busy schedule. We get all
                  the perks of being season ticket holders without committing to
                  every game. The ticket exchange program gives us amazing
                  flexibility too!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">ST</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      Samantha Taylor
                    </div>
                    <div className="text-sm text-gray-500">
                      Weekend Plan Holder since 2021
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  </div>
                </div>
                <blockquote className="text-gray-700 mb-4">
                  "My business partners and I share a full season package. It's
                  the perfect client entertainment option, and the Ballclub
                  staff helps us manage our ticket distribution flawlessly.
                  Great value and service!"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold">RJ</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">
                      Robert Johnson
                    </div>
                    <div className="text-sm text-gray-500">
                      Full Season Ticket Holder since 2018
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 text-center text-white relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Join the Ballclub Family?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Secure your season tickets today and be part of every exciting
                moment of Colorado Ballclub baseball!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Contact a Rep
                </a>
                <Link
                  href="/tickets/packages"
                  className="bg-blue-800/50 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  View More Plans
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

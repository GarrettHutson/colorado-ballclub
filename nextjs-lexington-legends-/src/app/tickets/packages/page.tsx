import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import Link from "next/link";

export default function Packages() {
  // Mock package data
  const groupPackages = [
    {
      id: 1,
      name: "Group Outing",
      minSize: 15,
      priceRange: "$12-25 per person",
      description:
        "Perfect for team outings, company events, or large family gatherings. Includes reserved seating in a dedicated section.",
      features: [
        "Reserved group seating",
        "Group welcome on videoboard",
        "Optional food & beverage packages",
        "Dedicated group host",
      ],
      icon: "👥",
    },
    {
      id: 2,
      name: "Birthday Package",
      minSize: 10,
      priceRange: "$18-30 per person",
      description:
        "Make your child's birthday unforgettable with a celebration at Ballclub Field! Our birthday packages include everything you need for a memorable day.",
      features: [
        "Reserved party area",
        "Birthday announced on videoboard",
        "Birthday cake",
        "Special visit from mascot",
        "Ballclub gift for birthday child",
      ],
      icon: "🎂",
    },
    {
      id: 3,
      name: "Luxury Suite",
      minSize: 20,
      priceRange: "$800-1,200 per game",
      description:
        "Experience Ballclub baseball in style with our climate-controlled luxury suites. Perfect for corporate entertainment or special celebrations.",
      features: [
        "Private climate-controlled suite",
        "In-suite catering available",
        "Premium parking passes",
        "VIP entrance",
        "Suite attendant",
      ],
      icon: "🏆",
    },
  ];

  // Mock mini plans
  const miniPlans = [
    {
      id: 1,
      name: "Flex Pack",
      games: 10,
      priceRange: "$120-220",
      description:
        "Choose any 10 games throughout the season. Complete flexibility to fit your schedule.",
      features: [
        "Choose any games",
        "10% discount on merchandise",
        "Ticket exchange program",
      ],
      popular: true,
    },
    {
      id: 2,
      name: "Fireworks Pack",
      games: 8,
      priceRange: "$96-176",
      description:
        "Includes all Friday night games featuring our spectacular post-game fireworks shows.",
      features: [
        "All Friday night games",
        "Premium fireworks displays",
        "10% discount on merchandise",
      ],
    },
    {
      id: 3,
      name: "Weekend Pack",
      games: 15,
      priceRange: "$180-330",
      description:
        "Includes a selection of Friday, Saturday, and Sunday games throughout the season.",
      features: [
        "15 weekend games",
        "12% discount on merchandise",
        "Ticket exchange program",
      ],
    },
    {
      id: 4,
      name: "Family Fun Pack",
      games: 6,
      priceRange: "$72-132",
      description:
        "Includes games with family-friendly promotions and giveaways.",
      features: [
        "Family entertainment focus",
        "Kid-friendly giveaway games",
        "Special family concession pricing",
      ],
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
                Ticket Packages & Party Options
              </h1>
              <p className="text-xl text-blue-100 mb-6">
                Find the perfect ticket package for your group or choose a
                flexible mini plan
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#group-packages"
                  className="bg-yellow-500 text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg hover:shadow-xl"
                >
                  Group Packages
                </a>
                <a
                  href="#mini-plans"
                  className="border-2 border-white hover:border-yellow-300 text-white px-6 py-2 rounded-full font-bold hover:text-yellow-300 transition-all duration-300"
                >
                  Mini Plans
                </a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-gray-50"></div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Group Packages Section */}
          <section id="group-packages" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Group Packages & Parties
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>

            <div className="space-y-8">
              {groupPackages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl"
                >
                  <div className="grid md:grid-cols-4">
                    <div className="md:col-span-1 bg-blue-700 text-white p-8 flex flex-col justify-center items-center text-center">
                      <div className="text-6xl mb-4">{pkg.icon}</div>
                      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-blue-200 mb-2">
                        Min. {pkg.minSize} people
                      </div>
                      <div className="font-bold text-yellow-300">
                        {pkg.priceRange}
                      </div>
                    </div>
                    <div className="md:col-span-3 p-8">
                      <p className="text-gray-700 mb-6">{pkg.description}</p>

                      <h4 className="font-bold text-gray-800 mb-3">
                        Package Includes:
                      </h4>
                      <ul className="grid md:grid-cols-2 gap-x-4 gap-y-2 mb-6">
                        {pkg.features.map((feature, index) => (
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

                      <div className="flex flex-wrap gap-4">
                        <a
                          href="#inquiry-form"
                          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                        >
                          Request Info
                        </a>
                        <a
                          href="#"
                          className="px-6 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold rounded-lg transition-colors"
                        >
                          View Sample Menu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Mini Plans Section */}
          <section id="mini-plans" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Mini Ticket Plans
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {miniPlans.map((plan) => (
                <div
                  key={plan.id}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl ${plan.popular ? "ring-4 ring-yellow-400" : ""}`}
                >
                  {plan.popular && (
                    <div className="bg-yellow-400 text-blue-900 py-1 px-4 text-center font-bold">
                      Most Popular
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-blue-800 mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex justify-between items-baseline mb-4">
                      <div className="text-gray-600">{plan.games} games</div>
                      <div className="text-lg font-bold text-gray-900">
                        {plan.priceRange}
                      </div>
                    </div>
                    <p className="text-gray-700 mb-6 text-sm">
                      {plan.description}
                    </p>

                    <h4 className="font-bold text-gray-800 mb-3 text-sm">
                      Plan Includes:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <svg
                            className="w-4 h-4 text-green-500 mr-2 mt-0.5"
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
                      href="#inquiry-form"
                      className={`block w-full py-2 px-4 rounded-lg text-center font-bold text-sm ${
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
                  Looking for full season options?
                </span>
                <p className="text-gray-700">
                  We offer full and half-season ticket plans with additional
                  benefits and savings.
                  <Link
                    href="/tickets/season-tickets"
                    className="text-blue-600 hover:text-blue-800 ml-1"
                  >
                    View Season Ticket Plans →
                  </Link>
                </p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Why Choose a Package?
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
                  Save Money
                </h3>
                <p className="text-gray-600">
                  Our packages and mini plans offer discounted rates compared to
                  individual game tickets. The more games you select, the more
                  you save!
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">
                  Priority Selection
                </h3>
                <p className="text-gray-600">
                  Package holders get priority access to preferred seating
                  locations and playoff tickets before they go on sale to the
                  general public.
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
                  Many of our plans include ticket exchange options, allowing
                  you to swap games you can't attend for other available games
                  during the season.
                </p>
              </div>
            </div>
          </section>

          {/* Custom Packages */}
          <section className="mb-16">
            <div className="bg-blue-700 rounded-xl overflow-hidden shadow-xl">
              <div className="grid md:grid-cols-2">
                <div className="p-8 text-white">
                  <h3 className="text-2xl font-bold mb-4">Custom Packages</h3>
                  <p className="text-blue-100 mb-6">
                    Don't see exactly what you're looking for? We can create
                    custom packages tailored to your specific needs and
                    preferences.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-400 mr-2 mt-1"
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
                      <span>Custom group sizes and seating arrangements</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-400 mr-2 mt-1"
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
                      <span>Specialized food and beverage packages</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-400 mr-2 mt-1"
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
                      <span>Themed events and special experiences</span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-yellow-400 mr-2 mt-1"
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
                      <span>Flexible payment options for large groups</span>
                    </li>
                  </ul>
                  <a
                    href="#inquiry-form"
                    className="inline-block px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    Contact Us for Custom Options
                  </a>
                </div>
                <div className="bg-blue-800 p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl mb-4">🎟️</div>
                    <div className="text-white font-bold text-xl">
                      Create Your Perfect Package
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Inquiry Form */}
          <section id="inquiry-form" className="mb-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-blue-800 mb-8 relative">
              Request More Information
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-yellow-400"></span>
            </h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
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
                </div>

                <div className="grid md:grid-cols-2 gap-6">
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
                      htmlFor="organization"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Company/Organization (if applicable)
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="packageType"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Package Type
                    </label>
                    <select
                      id="packageType"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a package type...</option>
                      <option value="group">Group Outing</option>
                      <option value="birthday">Birthday Package</option>
                      <option value="suite">Luxury Suite</option>
                      <option value="flex">Flex Pack</option>
                      <option value="fireworks">Fireworks Pack</option>
                      <option value="weekend">Weekend Pack</option>
                      <option value="family">Family Fun Pack</option>
                      <option value="custom">Custom Package</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="groupSize"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Estimated Group Size
                    </label>
                    <select
                      id="groupSize"
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select group size...</option>
                      <option value="1-10">1-10 people</option>
                      <option value="11-20">11-20 people</option>
                      <option value="21-30">21-30 people</option>
                      <option value="31-50">31-50 people</option>
                      <option value="50+">50+ people</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Information/Questions
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your event, specific requirements, or any questions you have..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="communications"
                    className="mt-1 mr-2"
                  />
                  <label
                    htmlFor="communications"
                    className="text-sm text-gray-600"
                  >
                    I'd like to receive promotions, news, and updates from the
                    Colorado Ballclub via email.
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors shadow-md hover:shadow-lg"
                  >
                    Submit Inquiry
                  </button>
                </div>
              </form>
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
                  How far in advance should I book a group package?
                </h3>
                <p className="text-gray-700">
                  We recommend booking group packages at least 3-4 weeks in
                  advance, especially for weekend games and premium dates. For
                  large groups (50+) or luxury suites, booking 1-2 months ahead
                  is advisable to ensure availability.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Can I customize the food options for my group?
                </h3>
                <p className="text-gray-700">
                  Yes! We offer a variety of food and beverage packages that can
                  be customized to fit your group's preferences and budget. Our
                  catering team can work with you to create a menu that meets
                  your specific needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What is the payment schedule for mini plans?
                </h3>
                <p className="text-gray-700">
                  Mini plans can be paid in full at the time of purchase, or we
                  can set up a payment plan for plans over a certain value.
                  Typically, 50% deposit is required to reserve your seats, with
                  the balance due 30 days before the first game in your plan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  Can I exchange tickets in my mini plan for different games?
                </h3>
                <p className="text-gray-700">
                  Yes, our Flex Pack and Weekend Pack offer ticket exchange
                  options. You can exchange tickets for games you cannot attend
                  for available tickets to other regular season games. Exchanges
                  must be made at least 24 hours before the original game time.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  What happens if it rains on the day of our group outing?
                </h3>
                <p className="text-gray-700">
                  If a game is postponed due to weather, your tickets will be
                  valid for the rescheduled game date. If your group cannot
                  attend the rescheduled date, we'll work with you to find an
                  alternative game date that works for your group.
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

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-blue-700 to-blue-600 rounded-2xl overflow-hidden shadow-xl">
            <div className="px-8 py-12 text-center text-white relative z-10">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Plan Your Group Outing?
              </h2>
              <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
                Contact our ticket specialists today to start planning the
                perfect Ballclub experience for your group!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#inquiry-form"
                  className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg"
                >
                  Submit Inquiry
                </a>
                <a
                  href="tel:8595550123"
                  className="bg-blue-800/50 hover:bg-blue-800 text-white font-bold px-8 py-3 rounded-lg transition-colors shadow-md hover:shadow-lg flex items-center"
                >
                  <svg
                    className="w-5 h-5 mr-2"
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
                  Call (859) 555-0123
                </a>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

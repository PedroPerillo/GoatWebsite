import PageLayout from "../components/PageLayout";

export default function Home() {
  return (
    <div className="App">
      <PageLayout>
        <div className="isolate overflow-hidden bg-slate-300">
          <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-xl font-bold leading-7 text-indigo-400">
                Pricing
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                The right price for you,{" "}
                <br className="hidden sm:inline lg:hidden" />
                whoever you are
              </p>
            </div>
            <div className="relative mt-6">
              <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
                "Unlock limitless possibilities with our tailored pricing plans.
                Elevate your experience, invest in success today!"
              </p>
              <svg
                viewBox="0 0 1208 1024"
                className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
              >
                <ellipse
                  cx="604"
                  cy="512"
                  fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
                  rx="604"
                  ry="512"
                />
                <defs>
                  <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                    <stop stop-color="#7775D6" />
                    <stop offset="1" stop-color="#E935C1" />
                  </radialGradient>
                </defs>
              </svg>
            </div>
          </div>
          <div className="flow-root bg-white pb-24 sm:pb-32">
            <div className="-mt-80">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                  <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                    <div>
                      <h3
                        id="tier-hobby"
                        className="text-base font-semibold leading-7 text-indigo-600"
                      >
                        Basic
                      </h3>
                      <div className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $14.99
                        </span>
                        <span className="text-base font-semibold leading-7 text-gray-600">
                          /month
                        </span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        Enjoy access to state-of-the-art equipment, expert
                        guidance from certified trainers, and a supportive
                        community to help you reach your fitness goals.
                      </p>
                      <ul
                        role="list"
                        className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                      >
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Gym Membership
                          </span>
                        </li>

                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Training sessions
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Basic fitness classes
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Nutrition Supplements
                          </span>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://buy.stripe.com/test_aEUg1r9pv7xU3mw8wx"
                      aria-describedby="tier-hobby"
                      className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Let's Get in Shape
                    </a>
                  </div>
                  <div className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                    <div>
                      <h3
                        id="tier-team"
                        className="text-base font-semibold leading-7 text-indigo-600"
                      >
                        Premium
                      </h3>
                      <div className="mt-4 flex items-baseline gap-x-2">
                        <span className="text-5xl font-bold tracking-tight text-gray-900">
                          $29.99
                        </span>
                        <span className="text-base font-semibold leading-7 text-gray-600">
                          /month
                        </span>
                      </div>
                      <p className="mt-6 text-base leading-7 text-gray-600">
                        Unlock exclusive perks and advanced features for
                        ultimate fitness success.
                      </p>
                      <ul
                        role="list"
                        className="mt-10 space-y-4 text-sm leading-6 text-gray-600"
                      >
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <a
                            to="#"
                            className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110"
                          >
                            Premium Membership
                          </a>
                        </li>
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Elite Fitness Plan
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Enhanced Nutrition Supplements
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Exclusive Branded Apparel
                          </span>
                        </li>
                        <li className="flex gap-x-3">
                          <svg
                            className="h-6 w-5 flex-none text-indigo-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                              clip-rule="evenodd"
                            />
                          </svg>
                          <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">
                            Annual Membership Club
                          </span>
                        </li>
                      </ul>
                    </div>
                    <a
                      href="https://buy.stripe.com/test_4gwcPfdFL8BYf5e4gg"
                      aria-describedby="tier-team"
                      className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Let's get Ripped
                    </a>
                  </div>

                  <div className="flex flex-col rounded-3xl p-12 bg-gray-900 lg:col-span-2 lg:items-center shadow-2xl relative h-56 ">
                    <div className="lg:min-w-0 lg:flex-1">
                      <h3 className="text-lg font-semibold leading-8 tracking-tight text-white">
                        Discounted
                      </h3>
                      <p className="mt-1 text-base leading-7 text-white">
                        "Exciting update - Unlock exclusive savings on gym app
                        memberships: 
                        <div className="mt-1 text-base leading-7 text-white pb-3">
                        Get fit for less with our limited-time
                        discounts!"
                        </div>
                      </p>
                    </div>
                    <a
                      href="#"
                      className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 bg-white text-gray-900 ring-1 ring-inset ring-indigo-200 hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Buy discounted license{" "}
                      <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">

          <h1 className="mb-8 text-bold text-6xl text-slate-900 font-bold tracking-tight sm:text-5xl">
            Train smarter with our G.O.A.T. Gyro!
          </h1>
          <div className="flex flex-row items-center gap-4 p-6 ">
            <div className="basis-2/3  border-4 p-6 bg-slate-900 border-white rounded-3xl">
              <ul role="list" className="items-center space-y-6 ">
                <li className="flex items-center justify-center overflow-hidden rounded-md text-2xl font-bold shadow-lg bg-neutral-50 hover:bg-neutral-50/70 h-24 px-6 py-4 shadow">
                  Gyroscope metrix
                </li>
                <li className="flex items-center justify-center overflow-hidden rounded-md text-2xl font-bold shadow-lg bg-neutral-50 hover:bg-neutral-50/70 h-24 px-6 py-4 shadow">
                  Insane results
                </li>
                <li className="flex items-center justify-center overflow-hidden rounded-md text-2xl font-bold shadow-lg bg-neutral-50 hover:bg-neutral-50/70 h-24 px-6 py-4 shadow">
                  Amazing pumps
                </li>
                <li className="flex items-center justify-center overflow-hidden rounded-md text-2xl font-bold shadow-lg bg-neutral-50 hover:bg-neutral-50/70 h-24 px-6 py-4 shadow">
                  Enhanced workout
                </li>
                <li className="flex items-center justify-center overflow-hidden rounded-md text-2xl font-bold shadow-lg bg-neutral-50 hover:bg-neutral-50/70 h-24 px-6 py-4 shadow">
                  More looks
                </li>


              </ul>

            </div>
            <div className="basis-1/3 border-4 border-white">
              <div>
                <div
                    className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                  <div
                      className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                  <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                  <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                  <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img src="/GoatMockup.png"
                         className="dark:hidden w-[272px] h-[572px]" alt=""/>
                    <img src="/GoatMockup.png"
                         className="hidden dark:block w-[272px] h-[572px]" alt=""/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <button type="button" className="rounded-md bg-indigo-600 px-10 py-5 mt-4 text-md font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
             Learn More
            </button>

          </div>

        </div>

        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 py-24 shadow-2xl sm:rounded-3xl">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              G.O.A.T.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Sculpt your future: Transform with GOAT!
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Get started
              </a>
              <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white hover:text-gray-300"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle
                cx="512"
                cy="512"
                r="512"
                fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                fill-opacity="0.7"
              />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>


      </PageLayout>
    </div>
  );
}

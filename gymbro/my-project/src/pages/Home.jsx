

import PageLayout from "../components/PageLayout";



export default function Home() {
    return(

            <div className="App">

                <PageLayout>

                    <div className="isolate overflow-hidden bg-slate-300">
                        <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                            <div className="mx-auto max-w-4xl">
                                <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2>
                                <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">The right price
                                    for you, <br
                                        className="hidden sm:inline lg:hidden"/>whoever you are</p>
                            </div>
                            <div className="relative mt-6">
                                <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">Lorem ipsum dolor sit, amet
                                    consectetur
                                    adipisicing elit. Velit numquam eligendi quos odit doloribus molestiae voluptatum.</p>
                                <svg viewBox="0 0 1208 1024"
                                     className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0">
                                    <ellipse cx="604" cy="512" fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)" rx="604"
                                             ry="512"/>
                                    <defs>
                                        <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                                            <stop stop-color="#7775D6"/>
                                            <stop offset="1" stop-color="#E935C1"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="flow-root bg-white pb-24 sm:pb-32">
                            <div className="-mt-80">
                                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                                    <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
                                        <div
                                            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                            <div>
                                                <h3 id="tier-hobby"
                                                    className="text-base font-semibold leading-7 text-indigo-600">Hobby</h3>
                                                <div className="mt-4 flex items-baseline gap-x-2">
                                                    <span
                                                        className="text-5xl font-bold tracking-tight text-gray-900">$49</span>
                                                    <span
                                                        className="text-base font-semibold leading-7 text-gray-600">/month</span>
                                                </div>
                                                <p className="mt-6 text-base leading-7 text-gray-600">Modi dolorem expedita
                                                    deleniti. Corporis
                                                    iste qui inventore pariatur adipisci vitae.</p>
                                                <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        5 products
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        Up to 1,000 subscribers
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        Basic analytics
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        48-hour support response time
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="#" aria-describedby="tier-hobby"
                                               className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                                                started today</a>
                                        </div>
                                        <div
                                            className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                            <div>
                                                <h3 id="tier-team"
                                                    className="text-base font-semibold leading-7 text-indigo-600">Team</h3>
                                                <div className="mt-4 flex items-baseline gap-x-2">
                                                    <span
                                                        className="text-5xl font-bold tracking-tight text-gray-900">$79</span>
                                                    <span
                                                        className="text-base font-semibold leading-7 text-gray-600">/month</span>
                                                </div>
                                                <p className="mt-6 text-base leading-7 text-gray-600">Explicabo quo fugit
                                                    vel facere ullam
                                                    corrupti non dolores. Expedita eius sit sequi.</p>
                                                <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        Unlimited products
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        Unlimited subscribers
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        Advanced analytics
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        1-hour, dedicated support response time
                                                    </li>
                                                    <li className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-indigo-600"
                                                             viewBox="0 0 20 20" fill="currentColor"
                                                             aria-hidden="true">
                                                            <path fill-rule="evenodd"
                                                                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                                  clip-rule="evenodd"/>
                                                        </svg>
                                                        Marketing automations
                                                    </li>
                                                </ul>
                                            </div>
                                            <a href="#" aria-describedby="tier-team"
                                               className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                                                started today</a>
                                        </div>

                                        <div
                                            className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                            <div className="lg:min-w-0 lg:flex-1">
                                                <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Discounted</h3>
                                                <p className="mt-1 text-base leading-7 text-gray-600">Dolor dolores
                                                    repudiandae doloribus. Rerum
                                                    sunt aut eum. Odit omnis non voluptatem sunt eos nostrum.</p>
                                            </div>
                                            <a href="#"
                                               className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Buy
                                                discounted license <span aria-hidden="true">&rarr;</span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="bg-white">
                        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
                            <div
                                className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost
                                    your
                                    productivity today.</h2>
                                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Incididunt sint fugiat
                                    pariatur
                                    cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do
                                    ea.</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="#"
                                       className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
                                        started</a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span
                                        aria-hidden="true">→</span></a>
                                </div>
                                <svg viewBox="0 0 1024 1024"
                                     className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                                     aria-hidden="true">
                                    <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                                            fill-opacity="0.7"/>
                                    <defs>
                                        <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                                            <stop stop-color="#7775D6"/>
                                            <stop offset="1" stop-color="#E935C1"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    </div>


                    <div className="relative isolate overflow-hidden bg-gray-900">
                        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                            <div className="mx-auto max-w-2xl text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Boost your
                                    productivity.<br/>Start
                                    using our app today.</h2>
                                <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">Incididunt sint fugiat
                                    pariatur
                                    cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do
                                    ea.</p>
                                <div className="mt-10 flex items-center justify-center gap-x-6">
                                    <a href="#"
                                       className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-white/20 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get
                                        started</a>
                                    <a href="#" className="text-sm font-semibold leading-6 text-white">Learn more <span
                                        aria-hidden="true">→</span></a>
                                </div>
                            </div>
                        </div>
                        <svg viewBox="0 0 1024 1024"
                             className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
                             aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
                                    fill-opacity="0.7"/>
                            <defs>
                                <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
                                    <stop stop-color="#7775D6"/>
                                    <stop offset="1" stop-color="#E935C1"/>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>


                    <div className="bg-white py-24 sm:py-32">
                        <div className="mx-auto max-w-7xl px-6 lg:px-8">
                            <div className="mx-auto max-w-2xl sm:text-center">
                                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Simple no-tricks
                                    pricing</h2>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Distinctio et nulla eum soluta et neque
                                    labore
                                    quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut
                                    laborum.</p>
                            </div>
                            <div
                                className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                                <div className="p-8 sm:p-10 lg:flex-auto">
                                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">Lifetime membership</h3>
                                    <p className="mt-6 text-base leading-7 text-gray-600">Lorem ipsum dolor sit amet consect
                                        etur
                                        adipisicing elit. Itaque amet indis perferendis blanditiis repellendus etur quidem
                                        assumenda.</p>
                                    <div className="mt-10 flex items-center gap-x-4">
                                        <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">What’s
                                            included</h4>
                                        <div className="h-px flex-auto bg-gray-100"></div>
                                    </div>
                                    <ul role="list"
                                        className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                                        <li className="flex gap-x-3">
                                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            Private forum access
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            Member resources
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            Entry to annual conference
                                        </li>
                                        <li className="flex gap-x-3">
                                            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20"
                                                 fill="currentColor"
                                                 aria-hidden="true">
                                                <path fill-rule="evenodd"
                                                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                      clip-rule="evenodd"/>
                                            </svg>
                                            Official member t-shirt
                                        </li>
                                    </ul>
                                </div>
                                <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                                    <div
                                        className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                        <div className="mx-auto max-w-xs px-8">
                                            <p className="text-base font-semibold text-gray-600">Pay once, own it
                                                forever</p>
                                            <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                                <span
                                                    className="text-5xl font-bold tracking-tight text-gray-900">$349</span>
                                                <span
                                                    className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                                            </p>
                                            <a href="#"
                                               className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Get
                                                access</a>
                                            <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts
                                                available for easy company
                                                reimbursement</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </PageLayout>

            </div>

    )

}



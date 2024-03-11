
import header from "./Header";
import './App.css';
import  './index.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {Link} from 'react-router-dom'

export default function Home() {
    return(
        <>
            <div className="App">


                <header className="bg-white/40 backdrop-blur-sm  absolute z-40 shadow-lg top-0">
                    <nav className="  mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
                         aria-label="Global">
                        <div className="flex lg:flex-1">
                            <a href="#" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img className="h-8 w-auto"
                                     src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                     alt=""/>
                            </a>
                        </div>
                        <div className="flex lg:hidden">
                            <button type="button"
                                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Open main menu</span>
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                     stroke="currentColor"
                                     aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                                </svg>
                            </button>
                        </div>
                        <div className="hidden lg:flex lg:gap-x-12">
                            <Link to="/About" className="text-sm font-semibold leading-6 text-gray-900">Product</Link>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Features</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Marketplace</a>
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Company</a>
                        </div>
                        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                            <a href="#" className="text-sm font-semibold leading-6 text-gray-900">Log in <span
                                aria-hidden="true">&rarr;</span></a>
                        </div>
                    </nav>
                    {/*  Mobile menu, show/hide based on menu open state.  */}
                    <div className="lg:hidden" role="dialog" aria-modal="true">
                        {/*} Background backdrop, show/hide based on slide-over state.*/}
                        <div className="fixed inset-0 z-10"></div>
                        <div
                            className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                            <div className="flex items-center justify-between">
                                <a href="#" className="-m-1.5 p-1.5">
                                    <span className="sr-only">Your Company</span>
                                    <img className="h-8 w-auto"
                                         src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                         alt=""/>
                                </a>
                                <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                    <span className="sr-only">Close menu</span>
                                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                         stroke="currentColor"
                                         aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="mt-6 flow-root">
                                <div className="-my-6 divide-y divide-gray-500/10">
                                    <div className="space-y-2 py-6">
                                        <a href="#"
                                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Product</a>
                                        <a href="#"
                                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                                        <a href="#"
                                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                                        <a href="#"
                                           className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                                    </div>
                                    <div className="py-6">
                                        <a href="#"
                                           className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                            in</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>


                <div className="isolate overflow-hidden bg-slate-300">
                    <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
                        <div className="mx-auto max-w-4xl">
                            <h2 className="text-xl font-bold leading-7 text-indigo-400">Pricing</h2>
                            <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">The right price
                                for you, <br
                                    className="hidden sm:inline lg:hidden"/>whoever you are</p>
                        </div>
                        <div className="relative mt-6">
                            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">"Unlock limitless possibilities with our tailored pricing plans. Elevate your experience, invest in success today!"</p>                            <svg viewBox="0 0 1208 1024"
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
                                                className="text-base font-semibold leading-7 text-indigo-600">Basic</h3>
                                            <div className="mt-4 flex items-baseline gap-x-2">
                                                <span
                                                    className="text-5xl font-bold tracking-tight text-gray-900">$14.99</span>
                                                <span
                                                    className="text-base font-semibold leading-7 text-gray-600">/month</span>
                                            </div>
                                            <p className="mt-6 text-base leading-7 text-gray-600">Enjoy access to state-of-the-art equipment, expert guidance from certified trainers, and a supportive community to help you reach your fitness goals.</p>
                                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600"> 
                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600" 
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                              
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Gym Membership</span>
</li>

                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600"
                                                    
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Training sessions</span>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600"
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Basic fitness classes</span>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600"
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Nutrition Supplements</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" aria-describedby="tier-hobby"
                                           className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's Get in Shape</a>
                                    </div>
                                    <div
                                        className="flex flex-col justify-between rounded-3xl bg-white p-8 shadow-xl ring-1 ring-gray-900/10 sm:p-10">
                                        <div>
                                            <h3 id="tier-team"
                                                className="text-base font-semibold leading-7 text-indigo-600">Premium</h3>
                                            <div className="mt-4 flex items-baseline gap-x-2">
                                                <span
                                                    className="text-5xl font-bold tracking-tight text-gray-900">$29.99</span>
                                                <span
                                                    className="text-base font-semibold leading-7 text-gray-600">/month</span>
                                            </div>
                                            <p className="mt-6 text-base leading-7 text-gray-600">Unlock exclusive perks and advanced features for ultimate fitness success.</p>
                                            <ul role="list" className="mt-10 space-y-4 text-sm leading-6 text-gray-600">
                                            
        <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-indigo-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            <Link to="/premium-membership" className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Premium Membership</Link>
        </li>
                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600"
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Elite Fitness Plan</span>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600"
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Enhanced Nutrition Supplements</span>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600"
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Exclusive Branded Apparel</span>
                                                </li>
                                                <li className="flex gap-x-3">
                                                    <svg className="h-6 w-5 flex-none text-indigo-600"
                                                         viewBox="0 0 20 20" fill="currentColor"
                                                         aria-hidden="true">
                                                        <path fill-rule="evenodd"
                                                              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                                              clip-rule="evenodd"/>
                                                    </svg>
                                                    <span className="cursor-pointer transform transition-transform duration-900 hover:text-red-700 hover:scale-110">Annual Membership Club</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href="#" aria-describedby="tier-team"
                                           className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Let's get Ripped</a>
                                    </div>

                                    <div
                                        className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                                        <div className="lg:min-w-0 lg:flex-1">
                                            <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Discounted</h3>
                                            <p className="mt-1 text-base leading-7 text-gray-600">"Exciting update - Unlock exclusive savings on gym app memberships: Get fit for less with our 
                                            limited-time discounts!"</p>
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


                <div className="flex flex-row border-8 border-blue-700 h-svh ">

                    <div className="bg-stoneAdd-100 shadow-2xl border-1 basis-1/2  h-6/7 m-12 mr-4 rounded-3xl">FIT
                        CHECK
                    </div>
                    <div className="bg-stone-100 shadow-2xl basis-1/2  h-6/7 m-12 ml-4 rounded-3xl">GOAT</div>

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


                <footer className="relative isolate overflow-hidden bg-gray-900">
                    <h2 id="footer-heading" className="sr-only">Footer</h2>
                    <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                            <div className="space-y-28">
                                <img className="size-28 ml-12"
                                     src="/goat_logo.png"
                                     alt="GymBro"/>
                                <div className="space-y-40">
                                    <p className="text-blue-500 text-sm mr-44">FOLLOW US</p>
                                </div>
                                <div className="flex space-x-6">
                                    <a href="#" className="text-gray-500 hover:text-gray-400">
                                        <span className="sr-only">Facebook</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-400">
                                        <span className="sr-only">Instagram</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-400">
                                        <span className="sr-only">X</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path
                                                d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-400">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-400">
                                        <span className="sr-only">YouTube</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path fill-rule="evenodd"
                                                  d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                                                  clip-rule="evenodd"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                                <div className="md:grid md:grid-cols-2 md:gap-56">
                                    <div>
                                        <h3 className="text-sm font-semibold leading-6 text-white">COMPANY</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">Careers</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">Press Room</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">Facility</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white font-bold whitespace-nowrap ">Media Hotline:(801) 524-8100</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mt-10 md:mt-0">
                                        <h3 className="text-sm font-semibold leading-6 text-white">RESOURCES</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">Contact Us</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white whitespace-nowrap">Team Members</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white whitespace-nowrap">Member Services</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">FAQ</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 ml-40">
                                    <div>
                                        <h3 className="text-sm font-semibold leading-6 text-white">OUR POLICY</h3>
                                        <ul role="list" className="mt-6 space-y-4">
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">Terms of Use</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">Membership Policies</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">SMS Text Policy</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white whitespace-nowrap">Do Not Sell My Personal Information</a>
                                            </li>
                                            <li>
                                                <a href="#"
                                                   className="text-sm leading-6 text-gray-300 hover:text-white">Partners</a>
                                            </li>
                                        </ul>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                            <p className="text-xs leading-5 text-gray-400">&copy; 2024 G.O.A.T, Inc. All rights
                                reserved.</p>
                        </div>
                    </div>
                </footer>


            </div>

        </>

    )

}

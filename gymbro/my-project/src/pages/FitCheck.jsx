import PageLayout from "../components/PageLayout";
import {Link} from "react-router-dom";


export default function FitCheck () {
    return(
        <PageLayout>
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-48 shadow-2xl">
                <div className="text-4xl font-bold text-white font-serif">
                    <h1>FitCheck</h1>
                </div>
            </div>
            <div className="text-center">
                <div className="flex flex-row">
                    <h1 className="text-2xl font-bold p-16 font-serif basis-1/3 text-nowrap">
                        Let's Start a Conversation!
                    </h1>
                    <h1 className="text-2xl font-bold p-16 font-serif basis-2/3 text-nowrap">
                        Message
                    </h1>

                    <input
                        className="mt-20 mx-20  bg-gray-200 appearance-none border-3 border-purple-900 rounded w-full px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                        placeholder="Your message here..."
                    />
                </div>
            </div>
            <form class="w-full max-w-sm">
                <div class="flex flex-row mb-6">
                    <div class="basis-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Full Name
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="basis-1/3">
                        <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                            Email
                        </label>
                    </div>
                    <div class="md:w-2/3">
                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
                    </div>
                </div>
                <div class="md:flex md:items-center mb-6">
                    <div class="md:w-1/3"></div>
                    <label class="md:w-2/3 block text-gray-500 font-bold">
                        <input class="mr-2 leading-tight" type="checkbox" />
                        <span class="text-sm">Send me your newsletter!</span>
                    </label>
                </div>
                <div class="md:flex md:items-center">
                    <div class="md:w-1/3"></div>
                    <div class="md:w-2/3">
                        <button
                            class="mb-8 shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                            type="button"
                        >
                            Send
                        </button>
                    </div>
                </div>
            </form>
        </PageLayout>
    )
}



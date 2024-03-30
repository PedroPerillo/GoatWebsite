import PageLayout from "../components/PageLayout";
import {Link} from "react-router-dom";


export default function FitCheck () {
    return(
        <PageLayout>
            <div className=''>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-32 shadow-2xl">
                    <div className="text-4xl font-bold text-white font-serif">
                        <h1>FitCheck</h1>
                    </div>
                </div>

            </div>
            <div class="flex flex-row">

                <div class="basis-1/4 py-5 bg-violet-200 border-2 rounded-md m-5">Instruction</div>
                <div class="basis-3/4 py-5 bg-violet-200 border-2 rounded-md m-5">
                    <img className="size-100 ml-12"
                         src="/1.jpg"
                         alt="GymBro"/>
                </div>


                <div class="basis-3/4 py-5 bg-violet-200 border-2 rounded-md m-5">03</div>
            </div>
            <Link to="/Contact" className="text-sm font-semibold leading-6 text-gray-900">Contact</Link>
            <div
                className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                <div
                    className="w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                <div className="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                <div className="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
                    <img src="/FitCheckMockup.png"
                         className="dark:hidden w-[272px] h-[572px]" alt=""/>
                    <img src="/FitCheckMockup.png"
                         className="hidden dark:block w-[272px] h-[572px]" alt=""/>
                </div>
            </div>
        </PageLayout>
    )
}



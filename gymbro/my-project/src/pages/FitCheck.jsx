import PageLayout from "../components/PageLayout";
import {Link} from "react-router-dom";


export default function FitCheck () {
    return(
        <PageLayout>
            <div className='bg-fuchsia-500 sticky top-0 p-20 space-y-10'>
                <div className='sticky top-0 text-center text-white font-serif font-bold text-4xl'>
                    <h1>FitCheck</h1>

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
        </PageLayout>
    )
}



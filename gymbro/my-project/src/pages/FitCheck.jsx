import PageLayout from "../components/PageLayout";
import {Link} from "react-router-dom";


export default function FitCheck () {
    return(
        <PageLayout>
            <div className='bg-fuchsia-200 sticky top-0 p-10 space-y-10'>
                <div className='bg-violet-600/40 p-5 rounded-md shadow-2xl sticky top-0 text-left'>
                    <h1>FitCheck</h1>

                </div>
                <div className='bg-violet-600/70 p-5 rounded-md shadow-2xl sticky top-0'>
                </div>
                <div className='bg-fuchsia-200/40 p-5 rounded-md shadow-2xl sticky top-0'>
                    <h1>FitCheck</h1>
                </div>
            </div>
            <div class="flex flex-row">
            
                <div class="basis-1/4 py-5 bg-violet-200 border-2 rounded-md m-5">01</div>
                <div class="basis-3/4 py-5 bg-violet-200 border-2 rounded-md m-5">03</div>
            </div>
            <Link to="/Contact" className="text-sm font-semibold leading-6 text-gray-900">Contact</Link>
        </PageLayout>
    )
}



import PageLayout from "../components/PageLayout";

export default function Contact () {
    return(
        <PageLayout>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-48 shadow-2xl'>
                <div className = 'text-4xl font-bold text-white font-serif'>
                <h1>Contact Us</h1>
            </div>
            </div>
            <div className='text-center'>
                <h1 className= 'text-2xl font-bold p-16 font-serif'>
                Let's Start a Conversation
                </h1>
                <div className='flex flex-row'>
                    <h1 className='basis-1/3 text-center font-bold font-serif'>Ask how we can help you:</h1>
                    <h1 className='basis-2/3 text-left'>hello</h1>
                </div>
                <div className='flex flex-row'>
                    <h1 className='basis-1/3 text-center font-bold font-serif'>Ask how we can help you:</h1>
                    <h1 className='basis-2/3'>hello</h1>
                </div>

            </div>         
        </PageLayout>
    )
}
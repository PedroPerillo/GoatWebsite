import PageLayout from "../components/PageLayout";

export default function Contact () {
    return(
        <PageLayout>
            <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 space-y-10 p-48 shadow-2xl'>
                <div className = 'text-4xl font-bold text-white font-serif'>
                <h1>Contact Us</h1>
            </div>
            </div>
            <div className='text-2xl font-bold p-80 font-serif pt-28'>
                <div className= 'pb-12'>
                <h1>Let's Start a Conversation</h1>
                </div>
            </div>
            <div className='text-left font-bold font-serif'>
            <h1>Ask how we can help you:</h1>
            </div>
        </PageLayout>
    )
}
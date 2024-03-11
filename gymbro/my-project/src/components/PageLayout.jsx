import Header from "./Header";
import Footer from "./Footer";

export default function PageLayout(props){
    return (
        <div className='page'>
            <Header />
            <main>{props.children}</main>
            <Footer/>
        </div>
    );
}
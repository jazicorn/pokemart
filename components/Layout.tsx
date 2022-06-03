import Footer from "./site/Footer";
import Navbar from "./site/Navbar";
import Header from "./user/Header"

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="">
            <div className="navbar">
                <Header />
                <Navbar /> 
            </div>
            <>
                { children }
            </>       
           <Footer />
        </div>
    );
}

export default Layout

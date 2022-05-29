import Footer from "./site/Footer";
import Navbar from "./site/Navbar";
import Portal from "./user/Portal"

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="">
            <div className="navbar">
                <Portal />
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

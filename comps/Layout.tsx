import Footer from "./site/Footer";
import Navbar from "./site/Navbar";

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="">
            <Navbar />
                { children }
            <Footer />
        </div>
    );
}

export default Layout

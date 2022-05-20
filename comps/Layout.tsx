import Footer from "./Footer";
import Navbar from "./Navbar";

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
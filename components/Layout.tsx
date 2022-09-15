import React from 'react'
import Header from "./site/Header";

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="">
            <div className="header">
                <Header />
            </div>
            <div className='children'>
                { children }
            </div>       
        </div>
    );
}

export default Layout

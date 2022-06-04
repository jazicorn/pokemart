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
            <>
                { children }
            </>       
        </div>
    );
}

export default Layout

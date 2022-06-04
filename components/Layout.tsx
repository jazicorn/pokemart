import React from 'react'
import Header from "./site/Header";
import ThemeChanger from './user/ThemeChanger';

type Props = {
    children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <div className="">
            <div className="header">
                <Header />
            </div>
            <ThemeChanger/>
            <div className='children'>
                { children }
            </div>       
        </div>
    );
}

export default Layout

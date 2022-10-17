/* eslint-disable prettier/prettier */
import React from 'react';
import Header from './site/Header';

type Props = {
    children?: React.ReactNode;
};

function Layout({ children }: Props) {
    return (
        <div className="grid grid-rows-[5%_95%] h-screen bg-gray-100">
            <div className="flex flex-row bg-gray-300">
                <Header />
            </div>
            <div className="flex flex-col bg-gray-500">{children}</div>
        </div>
    );
}

export default Layout;

import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function BasicLayout({ children }) {
    return (
        <div className="container mx-auto">
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

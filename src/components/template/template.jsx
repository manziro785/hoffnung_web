import React from 'react';
import Header from '../general/header/header';
import Footer from '../general/footer/footer';

const TemplatePage = ({children}) => {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
};

export default TemplatePage;
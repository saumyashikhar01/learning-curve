import React from 'react';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import styles from './Layout.module.css';

function Layout ({ children }) {
    return (
        <div className={styles.layout}>
            <Header/>
            <div className={styles.content}>
                <Sidebar/>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
            <Footer/>
        </div>
    );
}

export default Layout;
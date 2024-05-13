"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideNav from '../components/SideNav';
import MainPage from '../components/MainPages';
import ContactUs from '../components/ContactUs';


const DashboardPage = () => {
    // State variable to store the username
    const [username, setUsername] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(true);


    // useEffect(() => {

    //     const storedUsername = localStorage.getItem('username');
    //     if (storedUsername !== null) {
    //         setUsername(storedUsername);
    //         setLoading(false); // Set loading to false once username is set

    //     } else {
    //         router.push("/login");
    //     }
    // }, []);

    // const handleLogout = (e) => {
    //     e.preventDefault();
    //     localStorage.clear();
    //     router.push("/login");
    // }

    return (
        <>
            <>
                {<ContactUs />}
                {/* {<Footer />} */}
            </>


        </>
    );
};

export default DashboardPage;

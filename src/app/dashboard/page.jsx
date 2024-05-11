"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';



const DashboardPage = () => {
    // State variable to store the username
    const [username, setUsername] = useState('');
    const router = useRouter();
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const storedUsername = localStorage.getItem('username');
        if (storedUsername !== null) {
            setUsername(storedUsername);
            setLoading(false); // Set loading to false once username is set

        } else {
            router.push("/login");
        }
    }, []);
    return (
        <>
   
      </> 
    );
};

export default DashboardPage;

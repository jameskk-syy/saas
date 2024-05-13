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
                {/* Google Font: Source Sans Pro */}
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
                {/* Font Awesome */}
                <link rel="stylesheet" href="../plugins/fontawesome-free/css/all.min.css" />
                {/* Ionicons */}
                <link rel="stylesheet" href="../plugins/datatables-bs4/css/dataTables.bootstrap4.min.css" />
                <link rel="stylesheet" href="../plugins/datatables-responsive/css/responsive.bootstrap4.min.css" />
                <link rel="stylesheet" href="../plugins/datatables-buttons/css/buttons.bootstrap4.min.css" />

                <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
                {/* Tempusdominus Bootstrap 4 */}
                <link rel="stylesheet" href="../plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css" />
                {/* iCheck */}
                <link rel="stylesheet" href="../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
                {/* JQVMap */}
                <link rel="stylesheet" href="../plugins/jqvmap/jqvmap.min.css" />
                {/* Theme style */}
                <link rel="stylesheet" href="../dist/css/adminlte.min.css" />
                {/* overlayScrollbars */}
                <link rel="stylesheet" href="../plugins/overlayScrollbars/css/OverlayScrollbars.min.css" />
                {/* Daterange picker */}
                <link rel="stylesheet" href="../plugins/daterangepicker/daterangepicker.css" />
                {/* summernote */}
                <link rel="stylesheet" href="../plugins/summernote/summernote-bs4.min.css" />
{/* 
                <div className="preloader flex-column justify-content-center align-items-center">
                    <img className="animation__shake" src="/dist/img/AdminLTELogo.png" alt="AdminLTELogo" height="60" width="60" />
                </div> */}
                {<Header />}
                {<SideNav />}
                {<ContactUs />}
                {/* {<Footer />} */}




                <script src="../plugins/jquery/jquery.min.js"></script>

                <script src="../plugins/jquery-ui/jquery-ui.min.js"></script>

                {/* <script>
                    $.widget.bridge('uibutton', $.ui.button)
                </script> */}

                <script src="../plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
                {/* <!-- ChartJS --> */}
                <script src="../plugins/chart.js/Chart.min.js"></script>
                {/* <!-- Sparkline --> */}
                <script src="../plugins/sparklines/sparkline.js"></script>

                <script src="../plugins/jqvmap/jquery.vmap.min.js"></script>
                <script src="../plugins/jqvmap/maps/jquery.vmap.usa.js"></script>
                {/* <!-- jQuery Knob Chart --> */}
                <script src="../plugins/jquery-knob/jquery.knob.min.js"></script>
                {/* <!-- daterangepicker --> */}
                <script src="../plugins/moment/moment.min.js"></script>
                <script src="../plugins/daterangepicker/daterangepicker.js"></script>
                {/* <!-- Tempusdominus Bootstrap 4 --> */}
                <script src="../plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>
                {/* <!-- Summernote --> */}
                <script src="../plugins/summernote/summernote-bs4.min.js"></script>
                {/* <!-- overlayScrollbars --> */}
                <script src="../plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
                {/* <!-- AdminLTE App --> */}
                <script src="../dist/js/adminlte.js"></script>
                {/* <!-- AdminLTE for demo purposes --> */}
                {/* <script src="/dist/js/demo.js"></script> */}
                {/* <!-- AdminLTE dashboard demo (This is only for demo purposes) --> */}
                <script src="../dist/js/pages/dashboard.js"></script>
                <script src="../plugins/datatables/jquery.dataTables.min.js"></script>
                <script src="../plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
                <script src="../plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
                <script src="../plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
                <script src="../plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
                <script src="../plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
                <script src="../plugins/jszip/jszip.min.js"></script>
                <script src="../plugins/pdfmake/pdfmake.min.js"></script>
                <script src="../plugins/pdfmake/vfs_fonts.js"></script>
                <script src="../plugins/datatables-buttons/js/buttons.html5.min.js"></script>
                <script src="../plugins/datatables-buttons/js/buttons.print.min.js"></script>
                <script src="../plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
            </>


        </>
    );
};

export default DashboardPage;

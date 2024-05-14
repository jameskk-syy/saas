import React from 'react';
import Link from "next/link";

const SideNav = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link href="/admindashboard" className="brand-link">
                <img src="../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Admin Dashboard</span>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}

                {/* SidebarSearch Form */}
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" role="menu" data-accordion="false">
                        {/* Add icons to the links using the .nav-icon class
    with font-awesome or any other icon font library */}
                        <li className="nav-item">
                            <Link href="/admindashboard" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                    <i className="right fas fa-angle-right" />
                                </p>
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link href="/admindashboard/profile" className="nav-link">
                                <i className="nav-icon fas fa-user" />
                                <p>
                                    
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/admindashboard/contact" className="nav-link">
                                <i className="nav-icon fas fa-question" />
                                <p>
                                    
                                </p>
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link href="" className="nav-link">
                                <i className="nav-icon fas fa-angle-left" />
                                <p>
                                    Logout
                                </p>
                            </Link>
                        </li>

                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    );
};

export default SideNav;

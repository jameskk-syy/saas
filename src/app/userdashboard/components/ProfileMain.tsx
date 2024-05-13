import React from 'react'
import Link from 'next/link';

const ProfileMain = () => {
    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Profile Settings</h1>
                        </div>{/* /.col */}
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><Link href="/userdashboard">Home</Link></li>
                                <li className="breadcrumb-item active">Dashbaord</li>
                            </ol>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <div className="d-flex mb-6">
                                    <img src="../reg.png" className="img-thumbnail" alt="Cinque Terre" width="304" height="236" />
                                    <div>
                                        <label className="form-label" htmlFor="customFile">Upload profile picture</label>
                                        <input type="file" className="form-control" id="customFile" />
                                    </div>

                                </div>
                                <div className="row mb-5">
                                    <div className="col-lg-6">
                                        <label htmlFor="name">Company Name:</label>
                                        <input type="text" value="Upeo Soft" className='w-10 form-control' id='name' />
                                    </div>
                                    <div className="col-lg-6">
                                        <label htmlFor="email">Company Email:</label>
                                        <input type="email" value="UpeoSoft@ltd.com" className='w-10 form-control' id='email' />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-lg-6">
                                        <label htmlFor="name">Company phone:</label>
                                        <input type="text" value="0796598108" className='w-10 form-control' id='name' />
                                    </div>
                                </div>
                                <div className="align-items-righ">
                                    <button className='btn btn-primary align-items-rigth'>Update Profile</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileMain
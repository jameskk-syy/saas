import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { useRouter } from 'next/navigation';
import DataTables from './ModulesTable';
import "../../../../public/style.css"



const MainPage = () => {
  const DataTables = dynamic(() => import('./ModulesTable'), { ssr: false });
  const router = useRouter();
  const [loading,setLoading] = useState<any>(true)

  useEffect(()=>{
    const adminname = localStorage.getItem("adminname");

    if(!adminname){
      router.push("/login")
      setLoading(false);
    }
    else{
      setLoading(false);
    }
  })
  return (
    <>
  <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">Active Modules</h1>
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
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-2 col-6">
                {/* small box */}
                <div className="small-box bg-info">
                  <div className="inner">
                  <h3>Active</h3>
                    <p>Support</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-bag" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-2 col-6">
                {/* small box */}
                <div className="small-box bg-success">
                  <div className="inner">
                  <h3>Active</h3>
                    <p>Expenses</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-stats-bars" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                 
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-2 col-6">
                {/* small box */}
                <div className="small-box bg-warning">
                  <div className="inner">
                  <h3>Active</h3>
                    <p>HR</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-person-add" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
              <div className="col-lg-2 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                  <h3>Active</h3>
                    <p>Loan Management</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                  <h3>Active</h3>
                    <p>Utilities</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              <div className="col-lg-2 col-6">
                {/* small box */}
                <div className="small-box bg-danger">
                  <div className="inner">
                    <h3>Active</h3>
                    <p>Stock</p>
                  </div>
                  <div className="icon">
                    <i className="ion ion-pie-graph" />
                  </div>
                  <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                </div>
              </div>
              {/* ./col */}
            </div>

          </div>
        </section>
        <section className="content">
          <DataTables />
        </section>


        {/* <aside class="control-sidebar control-sidebar-dark">
    <!-- Control sidebar content goes here -->
  </aside> */}
      </div>

    </>
  )
}

export default MainPage
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Link from "next/link";
import { useRouter } from 'next/navigation';



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
          <h1 className="m-0">Admin Dashboard</h1>
        </div>{/* /.col */}
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><Link href="/admindashboard">Home</Link></li>
            <li className="breadcrumb-item active">Dashboard</li>
          </ol>
        </div>{/* /.col */}
      </div>{/* /.row */}
    </div>{/* /.container-fluid */}
  </div>
  {/* /.content-header */}
  {/* Main content */}
  {/* /.content */}
</div>

    </>
  )
}

export default MainPage
import React from 'react';
import DataTable from "react-data-table-component";
import { useState } from 'react';

const DataTables = () => {
    const column= [
        {
          name: "Module",
          sortable: true,
          selector: (row: any) => row.Module
        },
        {
          name: "Status",
          sortable: true,
          selector: (row: any) => row.Status
        },
        {
          name: "Price",
          sortable: true,
          selector: (row: any) => row.Price
        },
        {
          name:"Unlock",
          cell : (row:any) => (<button className='btn btn-primary'>unlock </button>),
        }
        
      
      ]
      const data = [
        {
          id: 1,
          "Module": "Education",
          "Status": "Locked",
          "Price" : 50
        },
        {
          id: 2,
          "Module": "Accounts",
          "Status": "Locked",
          "Price" : 50
        },
        {
          id: 3,
          "Module": "Manufacturing",
          "Status": "Locked",
          "Price" : 50
        },
        {
          id: 4,
          "Module": "Selling",
          "Status": "Locked",
          "Price" : 50
        },
        {
          id: 5,
          "Module": "Projects",
          "Status": "Locked",
          "Price" : 50
        },
        {
          id: 6,
          "Module": "Payroll",
          "Status": "Locked",
          "Price" : 50
        },
        {
          id: 7,
          "Module": "CRM",
          "Status": "Locked",
          "Price" : 50
        }
        ,
        {
          id: 8,
          "Module": "Quality Management",
          "Status": "Locked",
          "Price" : 50
        },
        {
          id: 9,
          "Module": "Assets",
          "Status": "Locked",
          "Price" : 50
        }
        ,{
          id: 10,
          "Module": "E-commerce",
          "Status": "Locked",
          "Price" : 50
        }

      ]
      const [datas,setData] = useState<any>(data);
    
      const handleFilter = (e:any) =>{
        const result = data.filter(dat => {
           return dat?.Module.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
        })
        setData(result)
      }
  return (
    <>
       <DataTable 
                title = "Purchase This Modules"
                columns={column}
                data={datas}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='500px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                actions={<button className='btn btn-info'>Export</button>}
                subHeader
                subHeaderComponent ={
                  <input type='text' placeholder='search here' className='form-control w-25 w-sm-100'
                   onChange={(e)=> handleFilter(e)}
                  ></input>
                }
               
                
                />
    </>
  )
}

export default DataTables
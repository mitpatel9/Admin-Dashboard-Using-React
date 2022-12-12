import "./ProductList.css"
import React, { useState } from 'react'
import { DataGrid} from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import {ProductRows} from "../../DummyData"

export default function ProductList() {
  const [data,setdata]=useState(ProductRows);

  const handleDelete=(id)=>{
    setdata(data.filter((item)=>item.id !== id))
   }

   const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'productname', headerName: 'Product Name', width: 200, renderCell:(parameter)=>{
      return(
        <div className='productListUser'>
          <img  className='productListImg' src={parameter.row.avtar} alt=''/>
          {parameter.row.productname}
        </div>
      );
    }},
    { field: 'stock', headerName: 'Stock', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 120,
      renderCell:(parameter)=>{
           return(
            <>
            <button className='productListEdit'>Edit</button>
            <DeleteOutlineIcon className='productListDelete' onClick={()=>handleDelete(parameter.row.id)} />
           </>
           );
      }
    }
        
  ];
  return (
    <div className='ProductList'>
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} rowsPerPageOptions={[5]} checkboxSelection/>
    </div>
  )
}

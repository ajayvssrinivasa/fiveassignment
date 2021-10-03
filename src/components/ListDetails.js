import React, { Component } from 'react'

export class ListDetails extends Component { 
    constructor(props){
        super(props);
    this.emp=props.mylist;

    }
    render() {
       
        return (
            <div>
              <h2 style={{color:"red",marginTop:"10px"}}> Emplyoee Details</h2>
              <table border={1} className="table  table-striped" >
       <thead>
         <tr>
           <th>EmpID</th>
           <th>EMPNAME</th>
           <th>PHONE</th>
           <th> CITY</th>
           <th>QUALIFICATION</th>
         </tr>
       </thead>
       <tbody>
         {this.emp.map(pro=>
          <tr key={pro.Empid}>
            <td>{pro.Empid}</td>
            <td>{pro.empname}</td>
            <td>{pro.phone}</td>
            <td>{pro.city}</td>
            <td>{pro.Qualification}</td>
            </tr>)}
       </tbody>
     </table>
            </div>
        )
    }
}

export default ListDetails

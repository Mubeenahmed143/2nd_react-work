import { useState } from "react";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function EmployeeSalary(){

const [salary, setSalary] = useState();
var [tax, setTax] = useState();
var [nsal, setNsal] = useState();

function Calculation()
{
  
      if(salary > 50000)
       {
         tax = salary * 10/100;
       }
       else if(salary > 30000)
       {
         tax = salary * 5/100;
       }
       else
       {
        tax = 0;
       }

       setTax(tax);   
       
       
       nsal = salary - tax;


    setNsal(nsal);  

}


return(

<div class="container">

<h3>Employee Salary Calculation</h3>


<div class="form-group">



<input type="text" class="form-control" placeholder="Employee Name" />
    </div>

    <div class="form-group">
    <label>Salary</label>
    <input type="text" class="form-control" onChange={(event)=>{
        setSalary(event.target.value);
    }}>


    </input>

   
 
 
  <button type="submit" onClick={Calculation}  class="btn btn-primary mt-4">Submit</button>

  <div class="form-group">
    <label>Tax</label>
    <input type="text" class="form-control" placeholder="Tax" value={tax}  />
    </div>


    <div class="form-group">
    <label>Net Salary</label>
    <input type="text" class="form-control" placeholder="Net Salary" value={nsal} />
    </div>
        
      </div>

</div>











);






}

export default EmployeeSalary;
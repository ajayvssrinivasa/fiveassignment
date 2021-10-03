import React, { Component } from 'react'
import './Application.css'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
export class Application extends Component {
    constructor(props){
        super(props);
        this.state={
            firstname:null,
            lastname1:null,
            fathername:null,
            mothername:null,
            email:null,
            age:null,
            city:null,
            country:null,
            address:null,
            pincode:null,
            caste:null,
            Profession:null,
            password:null,
            conpassword:null,
            mobile:null,
            errors:{
                firstname:'',
                lastname1:'',
                fathername:'',
                mothername:'',
                email:'',
                age:'',
                city:'',
                country:'',
                address:'',
                pincode:'',
                caste:'',
                Profession:'',
                password:'',
                conpassword:'',
                mobile:''
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'firstname':
                    errors.firstname=value.length<4?'firstname is not valid':'';
                    break;
                case 'lastname1':
                    errors.lastname1=value.length<2?'lastname is not valid':'';
                    break;
                case 'fathername':
                    errors.fathername=value.length<4?'fathername is not valid':'';
                    break;
                case 'mothername':
                    errors.mothername=value.length<4?'mothername is not valid':'';
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    break;
                case 'age':
                    errors.age=value.length===2?'':'age must me 2 character long';
                    break;    
                case 'city':
                    errors.city=value.length<4?'City is not valid':'';
                    break;
                case 'country':
                    errors.country=value.length<4?'Country is not valid':'';
                    break;
                case 'address':
                    errors.address=value.length<4?'address is not valid':'';
                    break;
                case 'pincode':
                     errors.pincode=value.length===6?'Pincode must me 6 chanrater long':'';
                    break;
                case 'caste':
                    errors.caste=value.length<4?'Caste is not valid':'';
                    break;
                case 'Profession':
                    errors.Profession=value.length<4?'Profession is not valid':'';
                    break;
                case 'password':
                        errors.password=value.length<8?'Password must me 8 chanrater long':'';
                        break;
                case 'conpassword':
                        errors.conpassword=value!==this.state.password?'Password is not matched':'';
                        break;
                case 'mobile':
                        errors.mobile=value.length<10?'Mobile number must me 10 chanrater long':'';
                        break;
                default:        
                    break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
            event.preventDefault();
            if(this.validate(this.state.errors))
            {
                alert("Valid Form");
                this.setState({isSubmit: true});
            }
            else {
                alert("Invalid Form");
            }
         }
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
    render() {
        const {errors, isSubmit}=this.state;
        return (
            
            <div className="co">
            <div className="con container jumbotron h" >
            <h2> Application Form</h2>
                <form onSubmit={this.formSubmit} style={{padding:"10px"}}>
                   <div className="row" style={{padding:"10px"}}>
                <label className=" col-lg-2">    FirstName : </label> 
            <input type="text" name="firstname" className="col-lg-2" onChange={this.handler} required/> 
            {errors.firstname.length>0 && 
            <span style={{color:'red'}}>{errors.firstname}</span>}
             <label className="col-lg-2">    LastName : </label> 
            <input type="text" name="lastname1" className="col-lg-2" onChange={this.handler} required/> 
            {errors.lastname1.length>0 && 
            <span style={{color:'red'}}>{errors.lastname1}</span>}<br/> </div>
            <div className="row " style={{padding:"10px"}}>
             <label className=" col-lg-2">    FatherName : </label> 
            <input type="text" name="fathername" className="col-lg-2  " onChange={this.handler} required/> 
            {errors.fathername.length>0 && 
            <span style={{color:'red'}}>{errors.fathername}</span>}
             <label className=" col-lg-2">    MotherName : </label> 
            <input type="text" name="mothername" className="col-lg-2" onChange={this.handler} required/> 
            {errors.mothername.length>0 && 
            <span style={{color:'red'}}>{errors.mothername}</span>}<br/>   </div>
                       <div className="row " style={{padding:"10px"}}>
            <label  className=" col-lg-2">   Email : </label>
           <input type="text" name="email" className="col-lg-2"  onChange={this.handler} required/> {errors.email.length>0 && 
            <span style={{color:'red'}}>{errors.email}</span>}
            <label  className=" col-lg-2"> Age : </label>
            <input type="text" name="age" className="col-lg-2" onChange={this.handler} required/>
            {errors.age.length>0 && 
            <span style={{color:'red'}}>{errors.age}</span>}<br/></div>
                       <div className="row " style={{padding:"10px"}}>
             <label className=" col-lg-2">    City : </label> 
            <input type="text" name="city" className=" col-lg-2" onChange={this.handler} required/> 
            {errors.city.length>0 && 
            <span style={{color:'red'}}>{errors.city}</span>} 
             <label className=" col-lg-2">    country : </label> 
            <input type="text" name="country" className=" col-lg-2" onChange={this.handler} required/> 
            {errors.country.length>0 && 
            <span style={{color:'red'}}>{errors.country}</span>}<br/> </div>
                       <div className="row"style={{padding:"10px"}}> 
             <label className=" col-lg-2">    Address : </label> 
            <input type="text" name="address" className=" col-lg-2" onChange={this.handler} required/> 
            {errors.address.length>0 && 
            <span style={{color:'red'}}>{errors.address}</span>}  
            <label  className=" col-lg-2"> Pincode : </label>
            <input type="text" name="pincode" className="col-lg-2" onChange={this.handler} required/>
            {errors.pincode.length>0 && 
            <span style={{color:'red'}}>{errors.pincode}</span>}<br/></div>
                       <div className="row "style={{padding:"10px"}}>
             <label className=" col-lg-2">    Caste : </label> 
            <input type="text" name="caste" className=" col-lg-2" onChange={this.handler} required/> 
            {errors.caste.length>0 && 
            <span style={{color:'red'}}>{errors.caste}</span>} 
              <label className=" col-lg-2">    Profession : </label> 
            <input type="text" name="Profession" className=" col-lg-2" onChange={this.handler} required/> 
            {errors.Profession.length>0 && 
            <span style={{color:'red'}}>{errors.Profession}</span>}<br/> </div>
                       <div className="row" style={{padding:"10px"}}>
            <label  className=" col-lg-2">Password : </label>
            <input type="password" name="password"  className="col-lg-2" onChange={this.handler} required/>
            {errors.password.length>0 && 
            <span style={{color:'red'}}>{errors.password}</span>}
            <label  className=" col-lg-2"> ConfirmPassword : </label>
            <input type="password" name="conpassword" className=" col-lg-2" onChange={this.handler} required/>
            {errors.conpassword.length>0 && 
            <span style={{color:'red'}}>{errors.conpassword}</span>}<br/></div>
                       <div className="row" style={{padding:"10px"}}>
            <label  className=" col-lg-2">   Mobile : </label>
          <input type="text" name="mobile" className=" col-lg-2" onChange={this.handler} required/>
            {errors.mobile.length>0 && 
            <span style={{color:'red'}}>{errors.mobile}</span>}<br/></div>
            <input type="submit" value="Register" className=" btn btn-primary in bt" />
            </form>
                
            </div>
            {isSubmit?<table className="table table-stripped table-danger">
                    <thead><tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>FatherName</th>
                        <th>MotherName</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Pincode</th>
                        <th>Caste</th>
                        <th>Profession</th>
                        <th>Mobile</th>
                        <th>Phone number</th>
                        <th>Password</th></tr>
                    </thead>

                    <tbody>
                        <tr>
                        <td>{this.state.firstname}</td>
                            <td>{this.state.lastname1}</td>
                            <td>{this.state.fathername}</td>
                            <td>{this.state.mothername}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.age}</td>
                            <td>{this.state.city}</td>
                            <td>{this.state.country}</td>
                            <td>{this.state.pincode}</td>
                            <td>{this.state.caste}</td>
                            <td>{this.state.Profession}</td>
                            <td>{this.state.mobile}</td>
                            <td>{this.state.password}</td>
                        </tr>
                    </tbody>
                </table>:null}
            </div>
        )
    }
}

export default Application

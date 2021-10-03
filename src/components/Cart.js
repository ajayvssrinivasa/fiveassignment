import React, { Component } from 'react'
import json from '../Product.json';

export class Cart extends Component {
   
        constructor(props){
            super(props);
            this.state = {count: null}
            this.arr = json.Product;
            this.prod = {}
        }

        dataReturn=(id)=>{
            let ind = this.arr.findIndex(x=>x.pid === id);
            let product = this.arr[ind];
            this.prod = product;
        }

        render() {
            if(localStorage.getItem('mycart')!==undefined){
                var arr1 = JSON.parse(localStorage.getItem('mycart'));
            }
            var total = 0;
        return (
           
            <div>
                
                <h1 className="bg-info mt-3">CART PRODUCTS</h1>
                <div className="row">
        {arr1.map((data) => {
            {this.dataReturn(data.id);
            total += this.prod.price * data.quantity;}
          return (
                    <div className="col-lg-4" key={data.id}>
                       
                <div className="card mt-3">
               <img className="card-img-top" src={`images/${this.prod.images}`} width="500px" height="200px" alt="Card cap"/> 
                <div className="card-body">
                    <div className="card-title"><h2>Name: {this.prod.pname}</h2></div>
                    <hr /><div className="card-text"><h4>
                    Quantity: {data.quantity} <br />
                    price: {this.prod.price}</h4>
                    </div>
                </div></div></div>
            
          );
        })}
      </div>
      <p className="btn btn-lg, btn-primary mt-5">Total price: &nbsp;{total}</p>
            </div>
        )
    }
}

export default Cart
import React,{ useEffect, useState } from 'react'
import axios from 'axios'
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { Button, CardActions } from '@mui/material';
//import { Link } from 'react-router-dom';
export default function Myshopping() {
  const [products, setProduct]= useState([]);
  console.log(products);
  
useEffect(() => {
  axios.get(`https://dummyjson.com/products`).then((res)=>{
    //let pro=res.data
    setProduct(res.data.products);
   console.log(res.data.products);

})
  },[])
  return (


    
    <div>
      {/* <h3>Shopping</h3> */}
    {products.map((item)=>{
      return(
        <>
        <MDBCard>
  

  <MDBCardBody>
    <MDBCardTitle> <h6>{item.id}</h6></MDBCardTitle>
    <MDBCardText>
    <h6>{item.title}</h6>
    </MDBCardText>
    <MDBCardText>
    <p>{item.description}</p>
    </MDBCardText>
    <MDBCardText>
    <p>{item.price}</p>
    </MDBCardText>
    <MDBCardText>
    <p>{item.rating}</p>
    </MDBCardText>
    <MDBCardText>
    <p>{item.category}</p>
    </MDBCardText>
  </MDBCardBody>
  <CardActions>
      {/* <Button size="small" style={{textDecoration:"none",color:"blue"}} onClick={()=>cart.addOneToCart(books.id)}>Add To Cart</Button> */}
    <Button size="small" style={{textDecoration:"none",color:"blue"}}>Add To Cart</Button>

      </CardActions>
</MDBCard>  

       </>
       )
    }
  )}
  </div>
  )
}
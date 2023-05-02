import axios from 'axios'
import React, { useEffect, useState } from 'react'
//mport { ProductContext } from '../App';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function Myshopping() {
    
    const [product, setProduct]= useState([]);
    //const [productitem,setProductitem]=useState([]);
    useEffect(() => {
        const productitem=axios.get("https://dummyjson.com/products").then((glyma) => setProduct(glyma.data.results))
        //setProductitem(product);
        console.log(productitem);
      }, [product])  
      
     
  return (
   <div>

    {product.map((item)=>(
      //  console.log(product)
        <Link to={`/detail/${item.id}`}>
            <MDBCard>
  

  <MDBCardBody>
    <MDBCardTitle> <h6>{item.id}</h6></MDBCardTitle>
    <MDBCardText>
    <h2>{item.title}</h2>
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
    <p>{item.stock}</p>
    </MDBCardText>
  </MDBCardBody>
</MDBCard>  
</Link>
    ))}
        </div>
    )
  
}

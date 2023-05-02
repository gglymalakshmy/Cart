import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { ProductContext } from '../App';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
export default function Myshopping() {
    
    const [product, setProduct]= useState([]);
    const [productitem,setProductitem]=useState(ProductContext);
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then((glyma) => setProduct(glyma.data.results))
        setProductitem(product);
      }, [product])  
      console.log(productitem);
  return (
    <div>
    <section>
      <div className='container'>
      {/* <h1>{title}</h1> */}
        <div className='row'>
       
              {/* console.log(product); */}
      return(
        {product.map((item)=>{
            console.log(product);
          <div className='col-md-4'>
          <Link to={`/detail/${item.id}`}><MDBCard>
    {/* <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
      <MDBCardImage src={imageUrl+item.poster_path} fluid alt='...' />
      <a>
        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
      </a>
    </MDBRipple> */}
  
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
            </div>
             }
             )}
            );
         
        </div>
      </div>
    </section>

</div>
  );
}




import axios from 'axios'
import React, { useEffect, useState } from 'react'

  return (
    <div>
    
</div>
  );
}
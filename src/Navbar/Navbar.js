import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBInputGroup
} from 'mdb-react-ui-kit';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [showNavColorThird, setShowNavColorThird] = useState(false);

  return (
    <>
      <MDBNavbar expand='lg' light style={{ backgroundColor: '#e3f2fd' }}>
        <MDBContainer fluid>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColorThird(!showNavColorThird)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColorThird} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem>
              <MDBNavbarLink><Link style={{textDecoration:"none",color:"black"}} to='/myshopping'>Myshopping</Link>
             </MDBNavbarLink>   
                   
              </MDBNavbarItem>
              <MDBNavbarItem>
              <MDBNavbarLink> <Link style={{textDecoration:"none",color:"black"}} to='/signup'> Signup
              </Link>
              </MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
          <MDBInputGroup tag="form" className='d-flex w-auto mb-3'>
          <LocalGroceryStoreIcon />
               </MDBInputGroup>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
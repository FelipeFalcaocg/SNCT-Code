import React from 'react';
import './footer2.css'
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import logo from './assets/CODE.png';

export default function Footer2() {
  return (
    <MDBFooter className="footer" style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
        <img src={logo} alt="a"height="50"loading="lazy"/> 
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
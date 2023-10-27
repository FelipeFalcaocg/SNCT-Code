import React from 'react';
import footer from './footer2.css'
import {
  MDBFooter,
  MDBContainer,
} from 'mdb-react-ui-kit';
import logo from './assets/CODE.png';

export default function App() {
  return (
    <MDBFooter className={footer} style={{ backgroundColor: '#f1f1f1' }}>
      <MDBContainer className='pt-4'>
        <section className={footer}>
        <img src={logo} alt="a"height="40"loading="lazy"/> 
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
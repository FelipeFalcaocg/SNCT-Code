import React, { useState } from 'react';
import {
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';
import rectangle from './assets/Rectangle37.png';
import code2 from './assets/CODE2.png';
import grupo from './assets/Grupo.png';
import voteImage from './assets/Rectangle1.png';

export default function App() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <header>

      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: `url(${rectangle})`, height: '80px' }}
      >
        <div className='mask'>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
            <img src={code2} alt="Heading" className='mb-3' style={{ marginTop: '30px', height: '90px'}} />
              
          
            </div>
          </div>
        </div>
      </div>


      <div
        className='main-background'
        style={{
          backgroundImage: `url(${grupo})`,
          backgroundPosition: 'center 50%',
          backgroundSize: '120% auto',
          position: 'relative',
          height: '500px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          flexDirection: 'column'
        }}
      >
        <h1 style={{ marginTop: '-100px', fontSize: '60px' }}>Festival de Aplicativos da Iniciativa CODE</h1>
        <h3 style={{ marginTop: '0px', textAlign: 'center', fontSize: '30px' }}> O evento tem como objetivo promover a criatividade tecnológica dos </h3>
        <h3 style={{ marginTop: '0px', textAlign: 'center', fontSize: '30px' }}> alunos integrantes do Projeto CODE, através da construção</h3>
        <h3 style={{ marginTop: '0px', textAlign: 'center', fontSize: '30px' }}> de aplicativos para dispositivos Android </h3>
        <h3 style={{ marginTop: '0px', textAlign: 'center', fontSize: '30px' }}> na plataforma MIT App Inventor</h3>
        <button style={{background: 'transparent', border: 'none'}}>
          <img src={voteImage} alt="Votação"/>
          <div style={{color: 'blue',fontWeight: 'bold', position: 'absolute', fontSize: '50px', top: '50%', left: '50%', transform: 'translate(-50%, 50%)'}}>Votação</div>
        </button>
      </div>

    </header>
  );
}
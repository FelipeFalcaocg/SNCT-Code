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
import styles from './Header1.module.css';
import voteImage from './assets/Votação.png';

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

      <section className={styles.header1_container} style={{
        height: '100vh',
        backgroundImage: `url(${grupo})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '120% 120%',
      }}>
        
        <h1>Festival de Aplicativos da Iniciativa CODE</h1>  
        <p>O evento tem como objetivo promover a criatividade tecnológica dos alunos integrantes do Projeto CODE, através da construção de aplicativos para dispositivos Android na plataforma MIT App Inventor</p>

          <button className={styles.botao}>
            <img className={styles.imagemnobotao} src={voteImage} alt="Votação" />
          </button>
      </section>
    </header>
  );
}
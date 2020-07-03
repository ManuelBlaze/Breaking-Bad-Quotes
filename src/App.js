import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import styled from '@emotion/styled';
import Frase from "./components/Frase";

const Contenedor = styled.div`
  display:flex;
  align-items:center;
  padding-top: 2rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 0.8rem 2.5rem;
  font-size: 1.8rem;
  border: 2px solid black;
  border-radius: .5rem;
  transition: all .3s ease-in-out;

  :hover {
    cursor: pointer;
    background: -webkit-linear-gradient(top left, #00732b 0%, #00732b 40%, #0f574e 100%);
  }
`;

function App() {

  //state de frases
  const [frase, setFrase] = useState({});

  const consultarApi = async () => {
    const api = await fetch('http://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();

    setFrase(frase[0]);
  }

  //Cargar una frase al inicio
  useEffect(() => {
    consultarApi();
  }, []);

  return (
    <Contenedor>
      <img src={logo} className="App-logo" alt="logo" />

      <Frase 
        frase={frase}
      />

      <Boton
        onClick={consultarApi}
      >
        Get Quote
      </Boton>
    </Contenedor>
  )
}

export default App;

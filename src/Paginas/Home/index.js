/*REACT HOOK =

1- useEffect => metodo para que assim que a pagina carregar, ele é chamado instantaneamente.
                Ou quando oque esta dentro do [] é alterado.

*/

import React, { useState, useRef } from "react";

//Importar o Link no react-router-dom para poder usar link no styled-components no lugar dos botoes etc.
//import { Link } from 'react-router-dom'
//Porem vamos usar o useHistory pois se adapta melhor a essa aplicação.
import { useHistory } from 'react-router-dom'

import axios from 'axios'//Saber consumir API's ultilizando o AXIOS (IMPORTANTE)

import Figure1 from '../../assets/Figure1.svg'
import Seta from '../../assets/Seta.svg'

import { Container, Image, InputLabel, Input } from './Styles';

import H1 from '../../Components/Title'
import ContainerItens  from "../../Components/ContainerItens";
import Button from "../../Components/Button";

//Isso é JSX(A mistura de html com javascri,pt).
const App = () => {

  const history = useHistory()

  const [users, setUsers] = useState([])
  const inputName = useRef()
  const inputAge = useRef()

  async function addNewUser(){ //async porque para se comuinicar com o back, a função precisa ser assíncrona

    const { data: newUser } = await axios.post('http://localhost:3001/users',{ name: inputName.current.value, age: inputAge.current.value })

    setUsers([ ...users, newUser])

    history.push('/usuarios')

  }  


  return (

    <Container>

      <Image alt="logo-image" src={Figure1} />

      <ContainerItens>
        <H1> Olá! </H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewUser}>
          Cadastrar <img alt="seta" src={Seta} />
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default App
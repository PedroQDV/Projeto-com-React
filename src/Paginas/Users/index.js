/*REACT HOOK =

1- useEffect => metodo para que assim que a pagina carregar, ele é chamado instantaneamente.
                Ou quando oque esta dentro do [] é alterado.

*/

import React, { useState, useEffect } from "react";
 
//Importar o Link no react-router-dom para poder usar link no styled-components no lugar dos botoes etc.
//import { Link } from 'react-router-dom'
//Porem vamos usar o useHistory pois se adapta melhor a essa aplicação.
import { useHistory } from 'react-router-dom'

import axios from 'axios'//Saber consumir API's ultilizando o AXIOS (IMPORTANTE)

import Figure2 from '../../assets/Figure2.svg'
import Seta from '../../assets/Seta.svg'
import Lixeira from '../../assets/Lixeira.svg'

import { Container, Image, User } from './Styles';

import H1 from '../../Components/Title'
import ContainerItens from "../../Components/ContainerItens";
import Button from "../../Components/Button";

//Isso é JSX(A mistura de html com javascript).
const Users = () => {

  const [users, setUsers] = useState([])
  const history = useHistory()

  useEffect(() => {
    async function fetchUsers(){ //essa função foi crianda pq o useEffect nao aceito o async diretamente.
      const { data: newUsers } = await axios.get('http://localhost:3001/users')

    setUsers(newUsers)

    }
    fetchUsers()

  }, [])


  async function deleteUser(userId){
    //deleta no back-end o usuario:
    await axios.delete(`http://localhost:3001/users/${userId}`)
    
    //deleta no front-end o usuario:
    const newUsers = users.filter ( user => user.id !== userId)
     
    setUsers(newUsers)
  }

  function goBackpage() {
    history.push('/')
  }


  return (

    <Container>

      <Image alt="logo-image" src={Figure2} />

      <ContainerItens isBlur = {true}>
        <H1> Usuarios </H1>

        <ul>
          {users.map((user) => (
            <User key={user.id}>        
              <p>{user.name}</p> <p>{user.age} Anos</p>

              <button onClick={() => deleteUser(user.id)}>
                <img src={Lixeira} alt="lata-de-lixo"/>
              </button>
            </User>
          ))
          }
        </ul>

        <Button isBack={true} onClick={goBackpage}>
         <img alt="seta" src={Seta} /> Voltar
        </Button>

      </ContainerItens>
    </Container>
  );
}

export default Users 
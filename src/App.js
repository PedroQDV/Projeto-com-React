import React from "react";

import Figure1 from './assets/Figure1.svg'
import Seta from './assets/Seta.svg'

import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './Styles';


//Isso é JSX(A mistura de html com javascript).
const App = () => {

  const users = [{ id: Math.random(), name: "Pedro", age: 19 },
  { id: Math.random(), name: "Ana", age: 18 }
  ]

  return (

    <Container>

      <Image alt="logo-image" src={Figure1} />

      <ContainerItens>
        <H1> Olá! </H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade" />

        <Button>Cadastrar <img alt="seta" src={Seta} /></Button>

        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.age}
            </li>
          ))
          }
        </ul>

      </ContainerItens>
    </Container>
  );
}

export default App
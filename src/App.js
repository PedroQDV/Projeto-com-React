import React from "react";
import { Container, Image, ContainerItens, H1, InputLabel, Input, Button } from './Styles';


//Isso é JSX(A mistura de html com javascript).
const App = () => {
  
  return (

    <Container> 

      <Image />

      <ContainerItens>
        <H1> Olá! </H1>

        <InputLabel>Nome</InputLabel>
        <Input placeholder="Nome"/>

        <InputLabel>Idade</InputLabel>
        <Input placeholder="Idade"/>

        <Button>Cadastrar</Button>

      </ContainerItens>
      

    </Container>
  );
}

export default App
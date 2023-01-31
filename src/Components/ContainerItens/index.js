import React from "react";

import { ContainerItens as Container } from './styles' // as para dar um apelido(Usei pois duas coias estava com o mesmo nome.)

function ContainerItens(props, isBlur){ //props para pegar oque esta escrito na div.

    return <Container isBlur={isBlur}>{props.children}</Container>
}

export default ContainerItens
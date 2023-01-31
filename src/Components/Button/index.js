import React from "react";

import { Button as ContainerButton } from './styles' // as para dar um apelido(Usei pois duas coias estava com o mesmo nome.)

function Button( {children , onClick, isBack}){ //props para pegar oque esta escrito na div. -  // children = props.children

    return <ContainerButton isBack={isBack} onClick={onClick}> {children} </ContainerButton>
}

export default Button
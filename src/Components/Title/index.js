import React from "react";

import { H1 } from './styles'

function Title(props){ //props para pegar oque esta escrito no H1.

    return <H1>{props.children}</H1>

}

export default Title
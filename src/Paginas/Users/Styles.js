//Importar a biblioteca "styled-componets", para usarmos o ccs com javascript.
import styled from 'styled-components'

//Importar o Link no react-router-dom para poder usar link no styled-components no lugar dos botoes etc.
//import { Link } from 'react-router-dom'
//Porem vamos usar o useHistory pois se adapta melhor a essa aplicação.


import Backgroud2 from '../../assets/Backgroud2.svg'

export const Container = styled.div `
    background: url("${Backgroud2}");
    background-size: cover; // ocupa todo espaço com o backgroud.

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100%; 
    min-height: calc(100vh - 170px);
`
export const Image = styled.img `
    margin-top: 30px;
`

export const User = styled.li `
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;

    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline:none;

    width: 342px;
    height: 58px;

    p {
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 28px;
  
        color: #FFFFFF;
    }

    button {
        background: none;
        border: none;
        cursor: pointer;
    }
   
`
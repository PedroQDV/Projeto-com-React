//Importar a biblioteca "styled-componets", para usarmos o ccs com javascript.
import styled from 'styled-components'

//Importar o Link no react-router-dom para poder usar link no styled-components no lugar dos botoes etc.
//import { Link } from 'react-router-dom'
//Porem vamos usar o useHistory pois se adapta melhor a essa aplicação.


import Backgroud from '../../assets/Backgroud1.svg'

export const Container = styled.div `
    background: url("${Backgroud}");
    background-size: cover; // ocupa todo espaço com o backgroud.

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    height: 100vh;
`
export const Image = styled.img `
    margin-top: 30px;
`

export const InputLabel = styled.p `
    letter-spacing: -0.408px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 22px;

    color: #EEEEEE;

    margin-left: 25px;
`

export const Input = styled.input `
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline:none;

    width: 342px;
    height: 58px;
    padding-left: 25px;
    margin-bottom: 34px;

    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 28px;
  
    color: #FFFFFF;

    &::placeholder{
        color: #ffffffaf;
    }

`

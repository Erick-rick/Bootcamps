import { createGlobalStyle } from 'styled-components'
import CovidImg from '../../assets/image/imagem-covid-19.jpg'

const globalStyle = createGlobalStyle`
    *{
        outline: none;
        box-sizing: border-box;
    }

    body{
        line-height: normal;
    }

    html, body{
        width: 100%;
        min-height: 100%;
        display: flex;
        padding: 0;
        margin: 0;
    }

    #root{
        background: url(${CovidImg});
        height: 100%;
        width: 100%;
        background-size: cover;
        background-postion: center center ; 

    }
`
export default globalStyle
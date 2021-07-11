import { createGlobalStyle } from "styled-components";
import Sf from "../font/SF-Pro.ttf";
const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: "Sf";
        src: local("Sf"),
        url(${Sf}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
     *{
        box-sizing:border-box;
        //font-family: 'Krona One', sans-serif;
        font-family:"Sf" ;
        line-height: 200%;
       
        
    }
    body{
        background-color: #2E2E2E;
        color: white;
        margin: 0;
        padding: 0;
      

    }
    h1,h2{
        font-family: 'Krona One', sans-serif;
        
        
    }
    h1{
        letter-spacing: -3px;
    }
    h3{
        font-weight:10;
        font-size:25px;
        opacity: 0.8;
        color: #FFFFFF;
    }
    a:link {
        color:#94BFF1;
        background-color: transparent;
        text-decoration: none;


    }
    .view{
        font-size: 28px;
    }
`;

export default GlobalStyle;

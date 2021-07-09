import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
     *{
        box-sizing:border-box;
        font-family: 'Montserrat', sans-serif;
       
        
    }
    body{
        background-color: #252934;
        color: white;
        margin: 0;
        padding: 0;
   

    }

    h3{
        font-weight: 100;
        opacity: 0.8;
        color: #FFFFFF;
    }
    a:link {
        color:#94BFF1;
        background-color: transparent;
        text-decoration: none;
  

    }
`;

export default GlobalStyle;

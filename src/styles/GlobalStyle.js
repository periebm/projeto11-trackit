import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;

}
body{
    font-family: 'Lexend Deca', sans-serif;
    background-color: white;  
}

form{
}

h2{
    margin-top: 25px;
    font-size: 14px;
    color: #52B6FF;
    font-weight: 400;
    text-align: center;
    text-decoration: underline;
}

input{
    
    display: block;
    margin: 0 0 6px 0;
    width: 75vw;
    height: 45px;
    background-color: #FFFFFF;
    color: #D4D4D4;
    border: 1px solid #D4D4D4;
    border-radius: 5px;
    line-height: 25px;
    color: #666666;
    font-size: 17px;
    font-weight: 400;
    padding: 0 10px 0 10px;
    ::placeholder{
        color: #DBDBDB;
    }

    :disabled{
        background-color: #F2F2F2;
        color: #D4D4D4;
        border-color: #D4D4D4;
    }
}

button{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 45px;
    width: 100%;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    font-size: 21px;
    line-height: 26px;
    font-family: 'Lexend Deca', sans-serif;
    color: white;
}

a{
    text-decoration: none;
}
`


export default GlobalStyle
import styled from "styled-components";

export const MenuContainer = styled.div`
    height: 70px;
    padding: 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    width: 100%;

    h1{
        font-family: 'Playball', cursive;
        font-size: 40px;
        color: white;
    }

    img{
        height: 51px;
        width: 51px;
        border-radius: 99px;
    }
`
import styled from "styled-components"

export const FooterContainer = styled.div`
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 0;
    padding: 0 35px;

    h3{
        color: #52B6FF;
        font-size: 18px;
    }
`
export const CircularContainer = styled.div`
    z-index: 10;
    height: 91px;
    width: 91px;
    position: fixed;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    font-size: 18px;

`
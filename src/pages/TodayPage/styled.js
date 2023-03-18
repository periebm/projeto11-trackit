import styled from "styled-components";

export const PageContainer = styled.div`
    min-height: 100vh;
    background-color: #E5E5E5;
    padding: 98px 18px 90px 17px;

    h3{
        font-size: 23px;
        color: #126BA5;
        font-weight: 400;
        line-height: 29px;
    }

    h4{
        color: #BABABA;
        font-size: 18px;
        line-height: 23px;
    }
`

export const HabitContainer = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: white;
    padding: 13px 13px 12px 15px;
    margin: 12px 0;
    border-radius: 5px;
    h4{
        font-size: 20px;
        color: #666666;
        margin-bottom: 8px;
    }

    p{
        font-size: 13px;
        color: #666666;
        line-height: 17px;
    }

`

export const IconContainer = styled.div`
    border: 1px solid #E7E7E7;
    border-radius: 5px;
    background-color: #EBEBEB;
    height: 69px;
    width: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
    color: white;
    font-weight: 800;
`
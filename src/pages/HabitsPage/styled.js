import styled from "styled-components";

export const PageContainer = styled.div`
    height: 100vh;
    background-color: #E5E5E5;
    
    padding: 98px 18px 0px 17px;
    p{
        margin-top: 29px;
        font-size: 18px;
        color: #666666;
        line-height: 22px;
    }
`

export const AddContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
    h3{
        font-size: 23px;
        color: #126BA5;
        font-weight: 400;
    }
    button{
        background-color: #52B6FF;
        height: 35px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 27px;
        color: white;
        border-radius: 5px;
        padding-bottom: 4px;
    }
`

export const AddHabitContainer = styled.div`
    background-color: white;
    padding: 18px 16px 15px 19px;
    border-radius: 5px;
    input{
        width: 100%;
    }
`

export const WeekdaysContainer = styled.div`
        button{
        width: 30px;
        height: 30px;
        background-color: white;
        color: #D4D4D4;
        border-radius: 5px;
        border: 1px solid #D4D4D4;
        font-size: 20px;
        margin-right: 4px;
    }
`
export const SaveCancelButtonsContainer = styled.div`
        margin-top: 26px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        button{
            padding: 0 17px;
            margin-left: 23px;
            width: fit-content;
            font-size: 16px;
        }
        span{
            font-size: 16px;
            color: #52B6FF;
        }
`

export const HabitContainer = styled.div`
    position: relative;
    background-color: white;
    padding: 13px 16px 15px 19px;
    margin: 10px 0;
    border-radius: 5px;
 h4{
    font-size: 20px;
    color: #666666;
    margin-bottom: 8px;
 }

 ion-icon{
    top: 10px;
    right: 10px;
    position: absolute;
    font-size: 15px;
    color: #666666;
 }
`
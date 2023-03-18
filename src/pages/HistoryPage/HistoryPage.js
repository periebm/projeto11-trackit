import { useContext } from "react"
import { PageContainer } from "./styled";
import { userContext } from "../../context/userContext"


export default function HistoryPage(){
    const {token, setToken} = useContext(userContext)

    return(
        <PageContainer>
            <h3>Histórico</h3>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </PageContainer>
    )
}
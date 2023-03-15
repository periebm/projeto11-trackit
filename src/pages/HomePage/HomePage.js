import { Link } from "react-router-dom"
import ImageTrackIt from "../../components/ImageTrackIt/ImageTrackIt"
import { PageContainer } from "./styled"

export default function HomePage() {
    return (
        <PageContainer>
            <Link to={"/habitos"}>
                <ImageTrackIt />
            </Link>

            <form>
                <input
                    type="email"
                    placeholder="email">
                </input>

                <input
                    type="password"
                    placeholder="senha">
                </input>

                <button type="submit">Entrar</button>
                <Link to={"/cadastro"}>
                    <h2>Não tem uma conta? Cadastre-se!</h2>
                </Link>

            </form>
        </PageContainer>
    )
}


//font-family: 'Lexend Deca', sans-serif;
//font-family: 'Playball', cursive;
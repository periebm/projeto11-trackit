import { PageContainer } from "./styled";
import ImageTrackIt from "../../components/ImageTrackIt/ImageTrackIt";
import { Link } from "react-router-dom";

export default function RegisterPage() {
    return (
        <PageContainer>
            <ImageTrackIt />

            <form>
                <input
                    type="email"
                    placeholder="email">
                </input>

                <input
                    type="password"
                    placeholder="senha">
                </input>

                <input
                    type="text"
                    placeholder="nome">
                </input>

                <input
                    type="url"
                    placeholder="foto">
                </input>

                <button type="submit">Entrar</button>
                <Link to={"/"}>
                    <h2>Já tem uma conta? Faça login!</h2>
                </Link>

            </form>
        </PageContainer>
    )
}
import axios from "axios"
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ImageTrackIt from "../../components/ImageTrackIt/ImageTrackIt"
import { PageContainer } from "./styled"
import { ThreeDots } from 'react-loader-spinner'
import { userContext } from "../../context/userContext"

export default function HomePage({setImage }) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const {token, setToken, URL} = useContext(userContext)

    function signIn(e) {
        e.preventDefault()

        setLoading(true);

        axios.post(`${URL}/auth/login`, { email: email, password: password })
            .then((result) => {
                //console.log(result.data)
                setToken(result.data.token)
                setImage(result.data.image)
                navigate("/hoje")
            }).catch((err) => {
                alert(err.response.data.message)
                setLoading(false);
            });
    }

    function loadDots() {
        if (loading === true) {
            return (
                <ThreeDots
                    height="50"
                    width="50"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                />
            )
        }

        return "Entrar"
    }

    return (
        <PageContainer>

            <ImageTrackIt />


            <form onSubmit={signIn}>
                <input
                    data-test="email-input"
                    type="email"
                    placeholder="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    disabled={loading}
                >


                </input>

                <input
                    data-test="password-input"
                    type="password"
                    placeholder="senha"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    disabled={loading}
                >
                </input>

                <button data-test="login-btn" disabled={loading} type="submit">{loadDots()}</button>
                <Link data-test="signup-link" to={"/cadastro"}>
                    <h2>Não tem uma conta? Cadastre-se!</h2>
                </Link>

            </form>
        </PageContainer>
    )
}


//font-family: 'Lexend Deca', sans-serif;
//font-family: 'Playball', cursive;
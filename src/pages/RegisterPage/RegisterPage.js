import { PageContainer } from "./styled";
import ImageTrackIt from "../../components/ImageTrackIt/ImageTrackIt";
import { Link, useNavigate } from "react-router-dom";
import { useState,useContext } from "react";
import axios from "axios"
import { ThreeDots } from 'react-loader-spinner'
import { userContext } from "../../context/userContext"

export default function RegisterPage() {
    const [userData, setData] = useState({ email: "", name: "", password: "", image: "" })
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    const {URL} = useContext(userContext)

    function handeChange(e) {
        setData({ ...userData, [e.target.name]: e.target.value })
    }

    function signUp(e) {
        e.preventDefault()

        setLoading(true);
        axios.post(`${URL}/auth/sign-up`, { email: userData.email, name: userData.name, password: userData.password, image: userData.image })
            .then((result) => {
                navigate("/")
            }).catch((err) => {
                console.log(err)
                alert(err.response.data.message)
                setLoading(false)
            });
    }

    function loadDots(){
        if(loading === true){
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

        return "Cadastrar"
    }

    return (
        <PageContainer>
            <ImageTrackIt />

            <form onSubmit={signUp}>
                <input
                data-test="email-input"
                    type="email"
                    placeholder="email"
                    name={"email"}
                    value={userData.email}
                    onChange={handeChange}
                    required
                    disabled={loading}
                >
                </input>

                <input
                data-test="password-input"
                    type="password"
                    placeholder="senha"
                    name={"password"}
                    value={userData.password}
                    onChange={handeChange}
                    required
                    disabled={loading}

                >
                </input>

                <input
                data-test="user-name-input"
                    type="text"
                    placeholder="nome"
                    name={"name"}
                    value={userData.name}
                    onChange={handeChange}
                    required
                    disabled={loading}
                >
                </input>

                <input
                data-test="user-image-input"
                    type="url"
                    placeholder="foto"
                    name={"image"}
                    value={userData.image}
                    onChange={handeChange}
                    disabled={loading}
                    required
                >
                </input>

                <button disabled={loading} data-test="signup-btn" type="submit">
                    {loadDots()}
                </button>

                <Link data-test="login-link" to={"/"}>
                    <h2>Já tem uma conta? Faça login!</h2>
                </Link>

            </form>
        </PageContainer>
    )
}
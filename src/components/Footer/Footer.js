import { Link, useLocation } from "react-router-dom"
import { FooterContainer, CircularContainer } from "./styled"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
    const location = useLocation();
    {
        if (location.pathname !== '/cadastro' && location.pathname !== '/') {
            return (
                <FooterContainer>
                    <Link to={"/habitos"}>
                        <h3>Hábitos</h3>
                    </Link>

                    <Link to={"/historico"}>
                        <h3>Histórico</h3>
                    </Link>
                    <CircularContainer>
                        <Link to={"/hoje"}>
                            <CircularProgressbar
                                value={75}
                                text={`Hoje`}
                                background
                                backgroundPadding={6}
                                styles={buildStyles({
                                    backgroundColor: "#3e98c7",
                                    textColor: "#fff",
                                    pathColor: "#fff",
                                    trailColor: "transparent"
                                })}
                            />
                        </Link>
                    </CircularContainer>
                </FooterContainer>


            )
        }
    }
}

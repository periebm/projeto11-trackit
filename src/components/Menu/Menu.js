import { useLocation } from "react-router-dom"
import { MenuContainer } from "./styled"
import { userContext } from "../../context/userContext";
import { useContext } from "react";


export default function Menu({userImage}) {
    const location = useLocation();
    {
        if (location.pathname !== '/cadastro' && location.pathname !== '/' )
        {
            return (
                <MenuContainer data-test="header">
                    <h1>TrackIt</h1>
                    <img src={userImage} />
                </MenuContainer>
            )
        }
    }
}

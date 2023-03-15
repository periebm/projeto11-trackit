import { useLocation } from "react-router-dom"
import { MenuContainer } from "./styled"

export default function Menu() {
    const location = useLocation();
    {
        if (location.pathname !== '/cadastro' && location.pathname !== '/' )
        {
            return (
                <MenuContainer>
                    <h1>TrackIt</h1>
                    <img src="https://images.igdb.com/igdb/image/upload/t_cover_big_2x/co4ezc.jpg" />
                </MenuContainer>
            )
        }
    }
}

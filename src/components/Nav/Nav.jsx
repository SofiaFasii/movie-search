import { NavLink } from "react-router-dom"
import { Wrapper } from "./nav.styled"

export default function Nav(){
    return(
        <Wrapper>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
        </Wrapper>
    )
}
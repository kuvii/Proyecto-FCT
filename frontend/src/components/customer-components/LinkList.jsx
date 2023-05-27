import React, { useContext } from "react"
import { List, ListItem } from "@mui/material"
import { Link } from "react-router-dom"
import { ColorModeContext } from "../../app/KingsbankApp"

const dashboardOptions = {
    header: 'Inicio'
}

const movementsOptions = {
    header: 'Movimientos'
}

const cardsOptions = {
    header: 'Tarjetas'
}

const loansOptions = {
    header: 'Prestamos'
}

const LinkList = () => {

    const { mode } = useContext(ColorModeContext)

    const handleNavigation = (index) => {
        const optionsList = [dashboardOptions, movementsOptions, cardsOptions, loansOptions]
        localStorage.setItem('navbar_options', JSON.stringify(optionsList[index]))
    }

    return (
        <List>
            {["Inicio", "Movimientos", "Tarjetas", "Prestamos"].map((text, index) => {
                const routes = ["/my", "/my/movements", "/my/cards", "/my/loans"]
                return (
                    <ListItem key={text} disablePadding sx={ { marginY: 5, justifyContent: 'center'} } >
                        <Link to={routes[index]} className={`${mode === 'dark' ? 'dark-mode' : ''} userLinks`} onClick={() => handleNavigation(index)} >{text}</Link>
                    </ListItem>
                )
            })
            }
        </List>
    )
}

export default LinkList
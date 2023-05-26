import React from "react"
import { List, ListItem } from "@mui/material"
import { Link } from "react-router-dom"

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
                        <Link to={routes[index]} className='userLinks' onClick={() => handleNavigation(index)} >{text}</Link>
                    </ListItem>
                )
            })
            }
        </List>
    )
}

export default LinkList
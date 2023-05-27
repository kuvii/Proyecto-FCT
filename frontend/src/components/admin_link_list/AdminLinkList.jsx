import React, { useContext } from "react"
import { List, ListItem } from "@mui/material"
import { Link } from "react-router-dom"
import { ColorModeContext } from "../../app/KingsbankApp"

const dashboardOptions = {
    header: 'Inicio'
}

const loansOptions = {
    header: 'Prestamos'
}

const cardsOptions = {
    header: 'Tarjetas'
}

const clientsOptions = {
    header: 'Clientes'
}

const AdminLinkList = () => {

    const { mode } = useContext(ColorModeContext)

    const handleNavigation = (index) => {
        const optionsList = [dashboardOptions, loansOptions, cardsOptions, clientsOptions]
        localStorage.setItem('navbar_options', JSON.stringify(optionsList[index]))
    }
    
    return (
        <List>
            {["Inicio", "Prestamos", "Tarjetas", "Clientes"].map((text, index) => {
                const routes = ["/admin", "/admin/loans", "/admin/cards", "/admin/clients"]
                
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

export default AdminLinkList
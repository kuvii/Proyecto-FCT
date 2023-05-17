import React from "react"
import { List, ListItem } from "@mui/material"
import { Link } from "react-router-dom"

const LinkList = () => {
    return (
        <List>
            {["Inicio", "Movimientos", "Tarjetas", "Prestamos"].map((text, index) => {
                const routes = ["/my", "/my/movements", "/my/cards", "/my/loans"]
                return (
                    <ListItem key={text} disablePadding sx={ { marginY: 5, justifyContent: 'center'} } >
                        <Link to={routes[index]} className='userLinks' >{text}</Link>
                    </ListItem>
                )
            })
            }
        </List>
    )
}

export default LinkList
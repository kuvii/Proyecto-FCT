import React from 'react'
import Card from '../card/Card'
import { Box } from '@mui/material'

const CardsList = ({cardsFromUser, setCardsFromUser}) => {
    
    return (
        <Box marginX={1}>
            {cardsFromUser && cardsFromUser.map((card) => (
                <Card cardInfo={card} key={card.id} style={ {marginY: 1} } />
            ))}
        </Box>
    )
}

export default CardsList
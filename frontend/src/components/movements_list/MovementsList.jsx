import React from 'react'
import Movement from '../movement/Movement'

const MovementsList = ({movementsFromUser, setMovementsFromUser}) => {
    return (
        <div>
            {movementsFromUser && movementsFromUser.map((move) => (
                <Movement content={move} key={move.id} style={ {marginY: 1} } />
            ))}
        </div>
    )
}

export default MovementsList
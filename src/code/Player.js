import './Player.css'
import Card from './Card'
import React, { useState } from 'react';


export default function Player(props)
{
    const {cardsInHand} = props;


    return (
            <div className='PlayerHandArea'>
                {
                    cardsInHand.map(card => (
                        card
                    ))
                }
            </div>
           )
}
import './Player.css'
import Card from './Card'
import React, { useState } from 'react';


export default function Player(props)
{
    const {cardsInHand, betAmount, moneyAmount} = props;


    return (
        <>
            <div className='PlayerInfoArea'>
                <text>Bet Amount: {betAmount}</text>
                <text>Money: {moneyAmount}</text>
            </div>
            <div className='PlayerHandArea'>
                {
                    cardsInHand.map(card => (
                        card
                    ))
                }
            </div>
         </>
           )
}
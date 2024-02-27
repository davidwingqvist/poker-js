import { useState } from 'react'
import './Board.css'
import Card from './Card'
import Player from './Player';
import House from './House';

export default function Board()
{
    const [playerCards, handlePlayerCards] = useState([]);
    const [houseCards, handleHouseCards] = useState([]);

    function GenerateCard()
    {
        return Math.floor((Math.random() * 11) + 1);
    }

    function GenerateType()
    {
        const gType = Math.floor((Math.random() * 8) + 1);
        console.log(gType)
        switch(gType)
        {
            case 1:
            {
                return '♠';
            }
            case 2:
            {
                return '♥';
            }
            case 3:
            {
                return '♦';
            }
            case 4:
            {
                return '♣';
            }
            case 5:
            {
                return '♤';
            }
            case 6:
            {
                return '♡';
            }
            case 7:
            {
                return '♢';
            }
            case 8:
            {
                return '♧';
            }
        }
    }

    function AddNewCard()
    {
        handlePlayerCards([...playerCards, <Card value={GenerateCard()} type={GenerateType()}/>]);
    }

    return (
            <div className='Background'>
                <Player cardsInHand={playerCards}/>
                <House cardsInHand={houseCards}/>


                <div className='ButtonArea'>
                    <div className='GameButton' onClick={AddNewCard.bind(this)}>
                        Call
                    </div>
                    <div className='GameButton'>
                        Surrender
                    </div>
                    <div className='GameButton'>
                        Hold
                    </div>

                </div>
            </div>
           )
}
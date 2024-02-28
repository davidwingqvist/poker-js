import { useState, useEffect } from 'react'
import './Board.css'
import Card from './Card'
import Player from './Player';
import House from './House';

export default function Board()
{
    // Player variables
    const [playerBetAmount, handleBet] = useState(5);
    const [playerMoneyAmount, handleMoney] = useState(110);
    const [playerCards, handlePlayerCards] = useState([GiveNewCard(), GiveNewCard()]);
    const [isHold, handleHold] = useState(false);
    
    const [houseCards, handleHouseCards] = useState([GiveNewCard(), GiveNewCard()]);
    const [tableCards, handleTableCards] = useState([GiveNewCard(), GiveNewCard(), GiveNewCard()])


    function AddNewCard()
    {
        handlePlayerCards([...playerCards, <Card value={GenerateCard()} type={GenerateType()}/>]);
        handleHouseCards([...houseCards, <Card value={GenerateCard()} type={GenerateType()}/>]);
    }

    useEffect(() => {
        handleMoney(money => (money - 5))
    }, [playerBetAmount])

    return (
            <div className='Background'>
                <Player cardsInHand={playerCards} betAmount={playerBetAmount} moneyAmount={playerMoneyAmount}/>
                <House cardsInHand={houseCards} isHold={isHold}/>

                <div className='BoardCards'>
                    {
                        tableCards.map(card => (
                            card
                        ))
                    }
                </div>


                <div className='ButtonArea'>
                    <div className='GameButton' onClick={AddNewCard.bind(this)}>
                        Call
                    </div>
                    <div className='GameButton'>
                        Surrender
                    </div>
                    <div className='GameButton' onClick={() => {
                        handleHold(hold => {return hold = true})
                    }}>
                        Hold
                    </div>
                    <div className='GameButton' onClick={() => {
                        handleBet(bet => (bet + 5))
                    }}>
                        Bet
                    </div>

                </div>
            </div>
           )
}

function GiveNewCard()
{
    return <Card value={GenerateCard()} type={GenerateType()}/>;
}

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

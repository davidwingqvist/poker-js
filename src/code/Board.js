import { useState, useEffect } from 'react'
import './Board.css'
import Card from './Card'
import Player from './Player';
import House from './House';

export default function Board()
{
    // Player variables
    const [playerValues] = useState([]);
    const [playerBetAmount, handleBet] = useState(5);
    const [playerMoneyAmount, handleMoney] = useState(105);
    const [playerCards, handlePlayerCards] = useState([GiveNewCard(), GiveNewCard()]);
    
    // Button variables
    const [isHold, handleHold] = useState(false);
    
    // House/Table variables
    const [houseValues] = useState([]);
    const [tableValues] = useState([]);

    const [houseCards, handleHouseCards] = useState([GiveNewCard(), GiveNewCard()]);
    const [tableCards, handleTableCards] = useState([GiveNewCard(), GiveNewCard(), GiveNewCard()])

    function AddNewCard()
    {
        handlePlayerCards([...playerCards, GiveNewCard()]);
        handleHouseCards([...houseCards, GiveNewCard()]);
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
                    <div className='GameButton' onClick={() => AddNewCard()}>
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
    const value = GenerateCard();
    const type = GenerateType();
    console.log('Value: ' + value + " Type: " + type);
    return <Card value={value} type={type}/>;
}

function GenerateCard()
{
    return Math.floor((Math.random() * 11) + 1);
}

function GenerateType()
{
    const gType = Math.floor((Math.random() * 8) + 1);
    //console.log(gType)
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

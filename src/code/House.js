import { useEffect } from 'react';
import './House.css'

export default function House(props)
{
    const {cardsInHand, isHold} = props;

    useEffect(() => {
        

    }, [isHold])

    function display()
    {
        if(isHold)
        {
            return <div className='HouseHandCards'> {(cardsInHand.map(card => (
            card
            )))}</div>
        }
        else
        {
            return <div className='HouseHandCards'> {(cardsInHand.map(card => (
                <div className='CardBack'></div>
            )))}</div>
        }
    }

    return (
            <div className='HouseHandArea'>
                {
                    display()
                }
            </div>
           )
}
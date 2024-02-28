import { useEffect } from 'react';
import './House.css'

export default function House(props)
{
    const {cardsInHand, isHold} = props;

    useEffect(() => {
        

    }, [isHold])

    return (
            <div className='HouseHandArea'>
                {
                    cardsInHand.map(card => (
                        card
                    ))
                }
            </div>
           )
}
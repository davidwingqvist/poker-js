import './House.css'

export default function House(props)
{
    const {cardsInHand} = props;


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
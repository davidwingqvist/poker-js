import './Card.css'

export default function Card(props)
{



    return (
            <div className='Card'>
                <div className='CardValue'>
                    {props.type}
                    {props.value}
                </div>
            </div>
           )
}
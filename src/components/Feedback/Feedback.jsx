import s from './Feedback.module.css';
const Feedback = ( { good, neutral, bad } ) => {

    return (
        <ul>
         
                <li className={s.item}>Good: <span>{good}</span></li>
                <li>Neutral: <span>{neutral}</span></li>  
                <li>Bad <span>{bad}</span></li>
            
        </ul>

    )
}

export default Feedback;
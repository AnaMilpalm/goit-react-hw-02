import s from './Description.module.css';
const Description = () => {

    return (
        <div className={s.wrapper}>
            <h1 className={s.mainTitle}>Sip Happens Cafe</h1>
            <p className={s.description}>Please leave your feedback about our service by selecting one of the options below.</p>
        </div>
    )
}


export default Description;
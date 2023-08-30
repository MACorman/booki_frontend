import classes from './BookCard.module.css';

function BookCard(props) {
    return (
        <div className= {classes.card}>
            <h3>{props.title}</h3>
            <div>{props.author}</div>
            <img src={props.cover_art} alt={props.title} />
            {/* <div>{props.blurb}</div> */}
        </div>
    )
}

export default BookCard

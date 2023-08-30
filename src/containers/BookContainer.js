import BookCard from "../components/BookCard"
import classes from './BookContainer.module.css'
import { useEffect, useState } from 'react'

function BookContainer() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        const fetchBooks = async () => {
            const response = await fetch("http://localhost:3000/books")

            if (!response.ok) {
                console.log('Something went wrong!')
            }

            const responseData = await response.json()
            console.log(responseData)
            setBooks(responseData)
        }
 
        fetchBooks()

    }, [])

    return (
        <div className={classes.cardContainer}>
            {books.map(book => {
                return <BookCard title={book.title} author={book.author} cover_art={book.cover_art} blurb={book.blurb}/>
            })}
        </div>
    )
}

export default BookContainer
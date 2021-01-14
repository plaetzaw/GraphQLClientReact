import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'


const getBooksQuery = gql`
{
    books {
        name
        id
    }
}`

function Booklist(){
    const { loading, error, data } = useQuery(getBooksQuery);
    console.log(data);
    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong</p>
    return data.books.map(book => {
        return (
            <li key={book.id}> {book.name}</li>
        )
    })
}
 


export default Booklist

import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import BookList from './components/BookList'
import AddBook from './components/AddBook'
import BookDetails from './components/BookDetails'

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="main">
      <h1>Reading List</h1>
      <BookList/>
      <BookDetails/>
      <AddBook/>
    </div>
    </ApolloProvider>
  );
}

export default App;

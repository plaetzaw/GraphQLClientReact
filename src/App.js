import BookList from './components/BookList'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql"
})

function App() {
  return (
    <ApolloProvider client={client}>
    <div className="main">
      <h1>Reading List</h1>
      <BookList/>
    </div>
    </ApolloProvider>
  );
}

export default App;

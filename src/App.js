import './App.css';
import { useQuery, gql } from '@apollo/client';
import { GET_PRODUCTS, GET_ATTRIBUTES } from './queryes';

const App = (props) => {
  const { loading, data } = useQuery(GET_ATTRIBUTES);
  console.log('data: ', data);

  return <h1>sfadfadf</h1>

  // return loading ? (
  //   <h1>Loading</h1>
  // ) : (
  //   <ul>
  //     {data.products.edges.map((item) => {
  //       return (
  //         <li key={item.node.id}>
  //           <p>{item.node.name}</p>
  //           <img alt={item.node.thumbnail.alt} src={item.node.thumbnail.url} />
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
};

const FETCH_DATA = gql`
  {
    products(first: 5) {
      edges {
        node {
          slug
          id
          name
          description
          thumbnail {
            url
            alt
          }
        }
      }
    }
    attributes(first: 100) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`;

export default App;

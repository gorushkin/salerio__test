import './App.css';
import { useQuery, gql } from '@apollo/client';
import { GET_PRODUCTS, GET_ATTRIBUTES, GET_NAVIGATION } from './queryes';
import React, { useState } from 'react';
import Products from './Products';

const App = (props) => {
  const [currentId, setCurrentId] = useState('');
  const onClickHandler = (id) => {
    setCurrentId(id)
  };

  const { loading, data } = useQuery(GET_NAVIGATION);

  if (loading) return <h1>Loading</h1>;

  const {
    shop: {
      navigation: {
        main: { items },
      },
    },
  } = data;

  return (
    <>
      <ul>
        {items.map((item) => (
          <li onClick={() => onClickHandler(item.category.id)} key={item.category.id}>
            <p>{item.category.name}</p>
            <p>{item.category.id}</p>
          </li>
        ))}
      </ul>
      <Products id={currentId} />
    </>
  );
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

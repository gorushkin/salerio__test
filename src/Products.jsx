import React from 'react';
import { useQuery, gql } from '@apollo/client';

const Products = ({ id }) => {
  console.log('id: ', id);
  const { loading, data } = useQuery(GET_PRODUCTS, {
    variables: { categoriesId: id },
  });

  if (!id) return null;

  if (loading) return <h1>Loading</h1>;

  const {
    products: { edges },
  } = data;
  console.log('edges: ', edges);

  return (
    <ul>
      {edges.map((item) => {
        return (
          <li key={item.node.id}>
            <p>{item.node.name}</p>
            <img src={item.node.thumbnail.url} alt=""></img>
          </li>
        );
      })}
    </ul>
  );
};

export default Products;

const GET_PRODUCTS = gql`
  query products($categoriesId: [ID]) {
    products(first: 100, filter: { categories: $categoriesId }) {
      edges {
        node {
          id
          name
          thumbnail {
            url
          }
          description
          productType {
            name
          }
        }
      }
    }
  }
`;

import { useQuery, gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  {
    products(first: 10, filter: { attributes: { slug: "bucket-size", value: "25l" } }) {
      edges {
        node {
          id
          name
          attributes {
            attribute {
              name
              productTypes {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
          category {
            name
          }
          category {
            name
          }
        }
      }
    }
  }
`;

export const GET_ATTRIBUTES = gql`
  {
    attributes(first: 100, filter: {}) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          name
          slug
          values {
            name
            slug
          }
        }
      }
    }
  }
`;

/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTRANSACTION = /* GraphQL */ `
  query GetTRANSACTION($id: ID!, $date: AWSDate!) {
    getTRANSACTION(id: $id, date: $date) {
      id
      date
      payee
      category
      paymentMethod
      cashFlow
      amount
      comment
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listTRANSACTIONS = /* GraphQL */ `
  query ListTRANSACTIONS(
    $id: ID
    $date: ModelStringKeyConditionInput
    $filter: ModelTRANSACTIONFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listTRANSACTIONS(
      id: $id
      date: $date
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        date
        payee
        category
        paymentMethod
        cashFlow
        amount
        comment
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;

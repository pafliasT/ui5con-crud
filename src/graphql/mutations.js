/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTRANSACTION = /* GraphQL */ `
  mutation CreateTRANSACTION(
    $input: CreateTRANSACTIONInput!
    $condition: ModelTRANSACTIONConditionInput
  ) {
    createTRANSACTION(input: $input, condition: $condition) {
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
export const updateTRANSACTION = /* GraphQL */ `
  mutation UpdateTRANSACTION(
    $input: UpdateTRANSACTIONInput!
    $condition: ModelTRANSACTIONConditionInput
  ) {
    updateTRANSACTION(input: $input, condition: $condition) {
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
export const deleteTRANSACTION = /* GraphQL */ `
  mutation DeleteTRANSACTION(
    $input: DeleteTRANSACTIONInput!
    $condition: ModelTRANSACTIONConditionInput
  ) {
    deleteTRANSACTION(input: $input, condition: $condition) {
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

import { gql } from "@apollo/client";


export const SIGNIN_MUTATION = gql`
  mutation Signin($signinInput: SigninInput!) {
    signin(signinInput: $signinInput) {
      token
    }
  }
`;

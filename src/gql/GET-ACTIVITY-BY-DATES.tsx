import { gql } from "@apollo/client";

export const GET_ACTIVITY_STATE_BY_DATES = gql`
  query GetActivityStateByDates($args: FindActivityStateInput!) {
    getActivityStateByDates(args: $args) {
      id
      state
      total

    }
  }
`;

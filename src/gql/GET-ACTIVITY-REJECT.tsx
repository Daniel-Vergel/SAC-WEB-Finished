import { gql } from "@apollo/client";

export const GET_ACTIVITY_REJECT = gql`query GetActivityRejectByDates($args: FindActivityStateInput!) {
    getActivityRejectByDates(args: $args) {
      consultor
      totalAceptas
      totalRechazadas
      total
    }
  }
`;
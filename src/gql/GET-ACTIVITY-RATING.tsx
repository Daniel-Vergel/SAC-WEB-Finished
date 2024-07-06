import { gql } from "@apollo/client";

export const GET_ACTIVITY_RATING = gql`query GetActivityRatingByDates($args: FindActivityStateInput!) {
    getActivityRatingByDates(args: $args) {
      consultor
      calificacion
      total
    }
  }
`;
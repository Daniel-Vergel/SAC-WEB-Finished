import { gql } from "@apollo/client";

export const GET_CURRENT_ACTIVITIES2 = gql`
 query GetCurrentActivities($where: ActivityViewWhere) {
  getCurrentActivities(where: $where) {
      id
      bitTicket
      productName
      clientName
      remainingTime
      description
      remainingPercentage
    }
  }
`;

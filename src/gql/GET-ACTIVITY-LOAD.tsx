import { gql } from "@apollo/client";

export const GET_ACTIVITY_LOAD = gql`query GetActivityLoadByDates($args: FindActivityStateInput!) {
    getActivityLoadByDates(args: $args) {
      fecha
      perNombres
      cargo
      restantes
      activiadesAnteriores
      activiadesAsignadas
      activiadesImpactadas
      activiadesResueltas
      activiadesTotal
      horasLaborados
      minutosLaborados
    }
  }
`;
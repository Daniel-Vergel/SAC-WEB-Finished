import { gql } from "@apollo/client";

export const GET_RANKING = gql`query Ranking($prdCod: Int!) {
    ranking(prdCod: $prdCod) {
      PerCod
      nombre
      cargo
      porcentaje
    }
  }
`;
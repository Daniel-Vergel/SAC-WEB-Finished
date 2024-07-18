import { gql } from "@apollo/client";

export const GET_STATICTEAM = gql`query StaticTeam($prdCod: Int!, $startDate: DateTime!) {
    staticTeam(prdCod: $prdCod, startDate: $startDate) {
      en_proceso
      en_espera
      replicada
      resuelta
      en_cordinacion
      antes
      hoy
      impactadas
    }
  }
`;
// useRankingQuery.ts
import { useQuery } from '@apollo/client';
import { GET_EMPLOYEE } from '../gql/GET-EMPLOYEE';

export const useStopwatchDate = (prdCod: number) => {

    const { data, loading, error } = useQuery(GET_EMPLOYEE, {
        variables: {
            employeeInput: {
            id: prdCod
                  
    }},
    });
    
  return { data, loading, error };

}
  
    

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { SIGNIN_MUTATION } from "../gql/SIGNIN_MUTATION";

const httpLink = createHttpLink({
    uri: import.meta.env.VITE_APOLLOURI, // Solo especifica el URI una vez aquí
  });

async function AuthUser(){

    const signinInput = {
        userName: 'Dvergel',
        password: 'Abc123456**',
      };

    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: (httpLink),
      });
 try { 

  const token =  await client 
      .mutate({
        mutation: SIGNIN_MUTATION,
        variables: {
          signinInput,
        },
      })
    
      const finalToken = token?.data?.signin?.token ?? ""

      localStorage.setItem("token", finalToken)

      return finalToken
    } catch (e){
        return ""
    }
}

export async function CreateClient () {

    let token = localStorage.getItem("token");

    if (!token || token == null || token == "") 
        token = await AuthUser() 

      const authLink = setContext((_, { headers }) => {
        // obtén el token de autenticación del almacenamiento local si existe

        // devuelve los encabezados al contexto para que httpLink pueda leerlos
        return {
          headers: {
            ...headers,
            authorization: token ? `Bearer ${token.trim()}` : "",
          },
        };
      });
      
      const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
      });

      return client
}
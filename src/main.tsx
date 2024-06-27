import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

const httpLink = createHttpLink({
  uri: "https://nodejs.softwaretributario.com:7028/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCCUKAlgG40oEDKKAhiggEIEAiHCAM4AKACRs8Ac0HoiAMRpIwVWgyasBASSQAHGCgCEASiLAAOnjNIiRSeRX1GLdpx79OIidNnipgk%2BaW1jZENGAWViFEgi4IEcE2KBDsADbxNgC%2B8RkgADQgdBI0bABGKUIYIIGRRGYgXoJ1stUJtSByCFDaNE1tAEwADIMAtAMAjKNjACoDA%2Biz8wMAWnW56SF1HVAKSL11g30ALKMAHJMzcwuzKyDrWUE5GUA", // Solo especifica el URI una vez aquí
});

const authLink = setContext((_, { headers }) => {
  // obtén el token de autenticación del almacenamiento local si existe
  const token = localStorage.getItem("token");
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

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  </React.StrictMode>
);

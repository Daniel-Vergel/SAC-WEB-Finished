import React, { useEffect, useState } from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { CreateClient } from "./utils/apolloClient.js";

/*const httpLink = createHttpLink({
  uri: "https://nodejs.softwaretributario.com:7028/graphql", // Solo especifica el URI una vez aquí
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
}); */

const Root = () => {
  const [client, setClient] = useState<ApolloClient<NormalizedCacheObject> | null>(null);

  useEffect(() => {
    const setupClient = async () => {
      const apolloClient = await CreateClient();
      setClient(apolloClient);
    };

    setupClient();
  }, []);

  if (!client) {
    return <div>Loading...</div>; // O un indicador de carga que prefieras
  }

  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <App />
      </Provider>
    </ApolloProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);

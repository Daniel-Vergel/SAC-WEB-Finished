import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://nodejs.softwaretributario.com:7028/graphql",
  documents: ["src/*/.tsx", ".src/_generated_/*/.graphqls"],
  verbose: true,
  generates: {
    "./src/_generated_/": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-react-apollo",
      ],
      config: {
        withHooks: true,
      },
    },
  },
};

export default config;

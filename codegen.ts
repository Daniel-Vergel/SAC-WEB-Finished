import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema:
    "https://nodejs.softwaretributario.com:7028/graphql?explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QEcYIE4CeABAOIIoCCUKAlgG40oEDKKAhiggEIEAiHCAM4AKACRs8Ac0HoiAMRpIwVWgyasBASSQAHGCgCEASiLAAOnjNIiRSeRX1GLdpx79OIidNnipgk%2BaW1jZENGAWViFEgi4IEcE2KBDsADbxNgC%2B8RkgADQgdBI0bABGKUIYIIGRRGYgXoJ1stUJtSByCFDaNE1tAEwADIMAtAMAjKNjACoDA%2Biz8wMAWnW56SF1HVAKSL11g30ALKMAHJMzcwuzKyDrWUE5GUA",
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

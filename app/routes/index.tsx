import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";

import { graphcmsClient } from "~/helpers";

import { styled } from "../styles/stitches.config";

const Container = styled("div", {
  fontFamily: "system-ui, sans-serif",
  lineHeight: 1.4,
});

const GetPortfolioQuery = gql`
  {
    mains {
      id
      heroTitle
      heroSubtitle
      heroDescription
      heroButtonName
      heroImage
    }
  }
`;

export let loader = async () => {
  const portfolio = await graphcmsClient.request(GetPortfolioQuery);

  return json({ portfolio });
};

export default function Index() {
  let data = useLoaderData();

  return (
    <Container>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <h1>Welcome to Remix with Stitches Example</h1>
      <ul>
        <li>
          <Link to="/jokes">Jokes</Link>
        </li>
        <li>
          <Link to="/jokes-error">Jokes: Error</Link>
        </li>
      </ul>
    </Container>
  );
}

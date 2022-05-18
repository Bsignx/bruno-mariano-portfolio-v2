import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";

import { ButtonToggleTheme } from "~/components";
import { graphcmsClient } from "~/helpers";
import { styled } from "../styles/stitches.config";

export let loader: LoaderFunction = async ({ request }) => {
  const portfolio = await graphcmsClient.request(gql`
    {
      main(where: { id: "cl37ygy33dor30dlxjekvuqlm" }) {
        id
        heroTitle
        heroSubtitle
        heroDescription
        heroButtonName
        heroImage
      }
    }
  `);

  return json({ portfolio });
};

export default function Index() {
  let data = useLoaderData();

  return (
    <>
      <ButtonToggleTheme />
      AAAAA
    </>
  );
}

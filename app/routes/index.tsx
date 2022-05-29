import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useCatch, useLoaderData } from "@remix-run/react";
import { gql } from "graphql-request";

import { graphcmsClient } from "~/helpers";
import { HomeTemplate } from "~/templates/home/home";
import type { Portfolio } from "~/types";

export let loader: LoaderFunction = async () => {
  const portfolio = await graphcmsClient.request<{
    portfolio: { main: Portfolio };
  }>(gql`
    {
      main(where: { id: "cl37ygy33dor30dlxjekvuqlm" }) {
        id
        heroTitle
        heroSubtitle
        heroDescription
        heroButtonName
        heroImage
        aboutDescription
        aboutTechName
        aboutTitle
        contactButton
        contactDescription
        contactEmail
        contactTitle
        projectsTitle
        projectsButtonName
        footerTitle
        experienceTitle
        project {
          title
          techUsedName
          stage
          repositoryUrl
          websiteUrl
          id
          description
        }
        heroResumeAttachment {
          url
          fileName
          id
        }
        experienceJob {
          companyName
          jobTitle
          jobDescription
          id
          periodWorked
        }
      }
    }
  `);

  return json({ portfolio });
};

export default function Index() {
  let data = useLoaderData<{
    portfolio: { main: Portfolio };
  }>();

  return <HomeTemplate portfolio={data.portfolio.main} />;
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <>
      <div>
        ERROR: {caught.statusText} {caught.status}
      </div>
      <div>{caught.data.message}</div>
    </>
  );
}

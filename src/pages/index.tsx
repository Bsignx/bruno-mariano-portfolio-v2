import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { gql } from 'graphql-request';

import { graphcmsClient } from '../helpers';
import { Portfolio } from '../types';
import { HomeTemplate } from '../templates/home';

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const data = await graphcmsClient.request<{
    main: Portfolio;
  }>(
    gql`
      query MyQuery($locale: Locale!) {
        main(where: { id: "cl37ygy33dor30dlxjekvuqlm" }, locales: [$locale]) {
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
    `,
    { locale }
  );

  return {
    props: {
      portfolioData: data.main,
    },
  };
};

const Home: NextPage = ({
  portfolioData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <HomeTemplate portfolio={portfolioData} />;
};

export default Home;

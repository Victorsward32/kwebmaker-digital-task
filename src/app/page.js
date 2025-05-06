import styles from "./page.module.css";
import Banner from "@/components/banner/Banner";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import About from "@/components/about/About";
import KeyFeatures from "@/components/keyFeatures/KeyFeatures";
import Team from "@/components/team/Team";
// import { logo } from "@/utils/ImageConstants";
export const dynamic = "force-dynamic";
// import { fetchGraphQL } from "/app/api/fetchGraphQL";
// import { query } from "/app/api/queries/homepageQuery";

export default async function Home() {
  const query = `
{
  pages(where: {name: "Homepage"}) {
    nodes {
      homepage {
        banners {
          bannerImage {
            node {
              sourceUrl
            }
          }
          bannersTitle
          bannerDescription
          bannerButton {
            title
            url
            target
          }
        }
        homeAboutTitle
        homeAboutSubtitle
        homeAboutButton {
          target
          title
          url
        }
        homeAboutVideoImage {
          node {
            sourceUrl
          }
        }
        homeAboutVideoUrl
        homeAboutDescription
        homeCategoryTitle
        homeCategorySubtitle
        homeServicesTitle
        homeServicesSubtitle
        homeColoursTitle
        homeColoursSubtitle
        homeColoursButton {
          target
          title
          url
        }
        homeJoinBackgroundImage {
          node {
            sourceUrl
          }
        }
        homeJoinTitle
        homeJoinSubtitle
        homeJoinButton {
          target
          title
          url
        }
        homeJoinDescription
        blogTitle
        blogSubtitle
        categories {
          link
          title
          image {
            node {
              sourceUrl
            }
          }
        }
      }
      seo {
        canonical
        metaKeywords
        metaDesc
        title
        opengraphType
        opengraphSiteName
        opengraphTitle
        opengraphDescription
        opengraphUrl
        schema {
          raw
        }
        opengraphImage {
          mediaItemUrl
        }
      }
    }
  }
  allColourCategory(where: {slug: "popular"}) {
    nodes {
      name
      colours {
        nodes {
          title
          slug
          colourInfo {
            selectColor
            colourRgb
          }
        }
      }
    }
  }
  blogs {
    nodes {
      featuredImage {
        node {
          sourceUrl
          slug
        }
      }
      slug
      title
      date
    }
  }
}
`;

const fetchGraphQL = async (query) => {
  const response = await fetch('https://astralpaints.kwebmakerdigitalagency.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    cache: 'no-store'
  });

  const json = await response.json();

  if (json.errors) {
    console.error("GraphQL Errors:", json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
};

// ✅ Now await will work
const data = await fetchGraphQL(query);
console.log("data --->", data);

  return (

      <div className={styles.pageWrapper}>
        <div className={styles.headerSticky}>
          <Header />
        </div>
        <main className={styles.main}>
        <Banner
  subtitle={data?.pages?.nodes?.[0]?.homepage?.banners?.[0]?.bannerDescription}
  heading={data?.pages?.nodes?.[0]?.homepage?.banners?.[0]?.bannersTitle}
  highlight={data?.pages?.nodes?.[0]?.homepage?.banners?.[0]?.bannerDescription} // Using bannerDescription as a fallback for highlight
  cta={[data?.pages?.nodes?.[0]?.homepage?.banners?.[0]?.bannerButton?.title]}
  // backgroundImage={data?.pages?.nodes?.[0]?.homepage?.banners?.[1]?.bannerImage?.nodes?.[0]?.source}
  backgroundImage={"https://astralpaints.kwebmakerdigitalagency.com/wp-content/uploads/2024/05/Exterior-Emulsions-Home-page-banner-1336-x-650.webp"}
/>
<About/>
<KeyFeatures/>
<Team/>
        
                </main>
        <Footer />
      </div>
  );
}

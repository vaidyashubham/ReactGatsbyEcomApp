import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import CourseCart from "../components/Cart/CourseCart"
import BundleCart from "../components/Cart/BundleCart"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="I write code"
      subtitle="Learn code online"
      heroClass="hero-background"
    />
    <InfoBlock heading="About Us"/>
    <CourseCart courses={data.courses}/>
    <BundleCart bundles={data.bundles} />
    <DualInfoBlock heading="Our Team"/>
  </Layout>
)

export const query = graphql`
{
  img: file(relativePath: {eq: "heromain.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
  courses:allContentfulCourses{
    edges{
      node{
        id
        title
        price
        category
        description{
          description
        }
        images{
          fixed(width:200, height: 120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
  bundles:allContentfulBundles{
    edges{
      node{
        id
        title
        price
        description{
          description
        }
        image{
          fixed(width:200, height: 120){
            ...GatsbyContentfulFixed_tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage

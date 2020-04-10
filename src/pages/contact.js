import React from "react"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import InfoBlock from "../components/Reuseable/InfoBlock"
import DualInfoBlock from "../components/Reuseable/DualInfoBlock"
import TeamPhotoSection from "../components/About/TeamPhotoSection"

const ContactUS = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HeroSection 
      img={data.img.childImageSharp.fluid}
      title="Contact US"
      subtitle=""
      heroClass="about-background"
    />
    <DualInfoBlock heading="A message from CEO"/>
    <InfoBlock heading="About Our Vision"/>
    <TeamPhotoSection />
  </Layout>
)

export const query = graphql`{
  img: file(relativePath: {eq: "about.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
}`

export default ContactUS

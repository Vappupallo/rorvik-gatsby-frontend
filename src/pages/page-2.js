import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Ingressi = styled.p`
  font-size: 18px;
`

const Label = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #0024AA;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0px;
`

const WaveDivider = styled.hr`
  .wave {
  animation: moveTheWave 2400ms linear infinite;
  stroke-dasharray: 0 16 101 16;
}

@keyframes moveTheWave {

  0% {
    stroke-dashoffset: 0;
    transform: translate3d(0, 0, 0);
  }

  100% {
    stroke-dashoffset: -133;
    transform: translate3d(-90px, 0, 0);
  }

}
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Rörvikin tyylit</h1>
    <WaveDivider></WaveDivider>
    <Ingressi>Käytä näitä tyylejä</Ingressi>
    <h1>Heading 1</h1>
    <Label>8 cottages</Label>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p>Paragraph teksti näyttää tältä</p>
    <Ingressi>
      Ingressi on tyylitelty Paragraph teksti
    </Ingressi>

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage

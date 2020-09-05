import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'

import Layout from "../components/layout"
import SEO from "../components/seo"

const Lead = styled.p`
  font-size: 18px;
`

const Label = styled.p`
  font-family: 'Josefin Sans', sans-serif;
  color: #0024AA;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 0px;
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Rörvikin tyylit</h1>
    <Lead>Käytä näitä tyylejä</Lead>
    <h1>Heading 1</h1>
    <Label>8 cottages</Label>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <p>Paragraph teksti näyttää tältä</p>
    <Lead>
      Ingressi on tyylitelty Paragraph teksti
    </Lead>

    <Link to="/">Go back to the homepage</Link>

  </Layout>
)

export default SecondPage

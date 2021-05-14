// src/pages/preview.js
import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import { graphql, useStaticQuery } from 'gatsby'
import linkResolver from '../utils/linkResolver'

import Layout from '../components/Layout'

const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'

  return (
    <Layout>
      <p>Loading</p>
    </Layout>
  )
}

export default (props) => {
  const data = useStaticQuery(graphql`query {
    sitePlugin(name: {eq: "gatsby-source-prismic"}) {
      pluginOptions {
        repositoryName
      }
    }
  }
  `)
  const { repositoryName } = data.sitePlugin.pluginOptions
  return withPreviewResolver(PreviewPage, {
    repositoryName,
    linkResolver: () => linkResolver,
  })(props)
}
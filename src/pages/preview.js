// src/pages/preview.js
import * as React from 'react'
import { withPreviewResolver } from 'gatsby-source-prismic'
import linkResolver from '../utils/linkResolver'

const PreviewPage = ({ isPreview }) => {
  if (isPreview === false) return 'Not a preview!'

  return (
    
      <p>Loading</p>
    
  )
}

export default withPreviewResolver(PreviewPage, {
  repositoryName: process.env.PRISMIC_REPOSITORY_NAME,
  linkResolver,
})
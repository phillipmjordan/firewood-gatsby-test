import * as React from 'react'
import { PreviewStoreProvider } from 'gatsby-source-prismic'

export const wrapRootElement = ({ element }) => (
  <PreviewStoreProvider initialEnabled={true}>{element}</PreviewStoreProvider>
)

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script 
      key="preview" 
      src="https://static.cdn.prismic.io/prismic.js?new=true&repo=firewood-gatsby-test" 
      async 
      defer 
    />
  ]);
}

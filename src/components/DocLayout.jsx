import React from "react"
import { MDXProvider } from "@mdx-js/react"

export default function Layout({ children }) {
  return (
    <MDXProvider components={shortcodes}>{children}</MDXProvider>
  )
}

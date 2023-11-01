/**
 * @file Astro Configuration.
 *
 * @author Ross Clark
 * @since 0.0.0
 * @copyright Ross Clark 2023
 * @license Apache-2.0 AND CC-BY-SA-4.0
 *
 * @see {@link https://docs.astro.build/en/guides/configuring-astro/|Configuring Astro}
 * @see {@link https://docs.astro.build/en/reference/configuration-reference/|Configuration Reference}
 */

import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  /**
   * Build Options
   *
     *
     * @see {@link https://docs.astro.build/en/reference/configuration-reference/#top-level-options|Top level options}
  */
  //   build.format
  // build.client
  // build.server
  // build.assets
  // build.assetsPrefix
  // build.serverEntry
  // build.redirects
  // build.inlineStylesheets
  // build.split
  // build.excludeMiddleware

  /**
   * Experimental Flags
  */
  // experimental.optimizeHoistedScript
  // experimental.devOverlay

  /**
   * Image Options
   *
     *
     * @see {@link https://docs.astro.build/en/reference/configuration-reference/#top-level-options|Top level options}
  */
  // image.endpoint
  // image.service
  // image.domains
  // image.remotePatterns

  /**
  * Markdown options
  *
  *     drafts: true,
  *    gfm: true,
  *     rehypePlugins: [],
   *   remarkPlugins: [],
  *    remarkRehype: {},
    *  shikiConfig: {},
    *syntaxHighlight: "prism"
     *
     * @see {@link https://docs.astro.build/en/reference/configuration-reference/#top-level-options|Top level options}
  */
  markdown: {
    drafts: true,
    gfm: true,
    rehypePlugins: [],
    remarkPlugins: [],
    remarkRehype: {},
    shikiConfig: {},
    syntaxHighlight: "prism"
  },
  /**
   * Integrations
     *
     * @see {@link https://docs.astro.build/en/reference/configuration-reference/#top-level-options|Top level options}
  */
  integrations: [
    /**
    * MDX integration options
    * Can use all markdown configuration options except draft
    *
    * extendMarkdownConfig: true,
    *  gfm: true,
    *  optimize: ,
    *  recmaPlugins: [],
    *  rehypePlugins: [],
    * remarkPlugins: [],
    * remarkRehype: {},
    * shikiConfig: {},
    * syntaxHighlight: "prism"
     *
     * @see {@link https://docs.astro.build/en/reference/configuration-reference/#top-level-options|Top level options}
    */
    mdx({})],
  /**
   * Legacy Flags
  */

  /**
   * Server Options
     *
     * @see {@link https://docs.astro.build/en/reference/configuration-reference/#top-level-options|Top level options}
  */
  // server.host
  // server.port
  // server.headers

  /**
   * Top-Level Options
     *
     * adapter: "",
     * base: "",
     * cacheDir: "./cache/astro",
     * compressHTML: false,
     * outDir: "",
     * output: "",
     * publicDir: "./public",
     * root: ".",
     * redirects: {},
     * site: "https://archiv8.github.io",
     * scopedStyleStrategy: "",
     * srcDir: "./src",
     * trailingSlash: "never"
     *
     * @see {@link https://docs.astro.build/en/reference/configuration-reference/#top-level-options|Top level options}
    */
  // base: "",
  cacheDir: "./.cache/astro",
  // compressHTML: false,
  outDir: "./docs",
  output: "static",
  publicDir: "./public",
  root: ".",
  // redirects: {},
  site: "https://archiv8.github.io",
  // scopedStyleStrategy: "",
  srcDir: "./src",
  trailingSlash: "never"

  /**
   * Vite
  */
});

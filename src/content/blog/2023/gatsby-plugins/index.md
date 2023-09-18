---

title: Blog -2023
subTitle: Aboutthe world
pageDescription: What goes here
tags: Riss Clark
authorUserId: RossClark
contributorUserId: Riss Clark
reviewerUserId: Riss Clark
slug: blog/2023/gatsby-plugins
contentType: info
dateCreated: 09-09-09
published: false
---------------

    This plugin intercepts all local links that have not been created in React using gatsby-link, and replaces their behavior with that of the gatsby-link navigate. This avoids the browser having to refresh the whole page when navigating between local pages, preserving the Single Page Application (SPA) feel.

Example use cases:

    A markdown file with relative links (transformed to a tags by gatsby-transformer-remark)
    An a tag that has been created by a Content Management System (CMS) WYSIWYG editor

gatsby-plugin-canonical-urls

Add canonical links to HTML pages Gatsby generates.

This implementation is primarily helpful for distinguishing between https/http, www/no-www but could possibly be extended to help with when sites add multiple paths to the same page.

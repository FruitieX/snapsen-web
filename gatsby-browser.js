const React = require("react")
const Layout = require("./src/components/Layout").default

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>

const React = require("react")
const Layout = require("./src/components/Layout").default
const {
  updateNotificationState,
} = require("./src/components/UpdateNotification")

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// Wrap all pages with the Layout component - persistent across navigations
exports.wrapPageElement = ({ element }) => <Layout>{element}</Layout>

exports.onServiceWorkerUpdateFound = () => updateNotificationState.show()

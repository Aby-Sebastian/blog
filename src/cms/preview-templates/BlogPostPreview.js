import React from "react"
import PropTypes from "prop-types"
import { CodePostTemplate } from "../../templates/code-post"

const CodePostPreview = ({ entry, widgetFor }) => (
  <CodePostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    tags={entry.getIn(["data", "tags"])}
    title={entry.getIn(["data", "title"])}
  />
)

CodePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default CodePostPreview

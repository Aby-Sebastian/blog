import CMS from "netlify-cms-app"
import {
  CustomWidgetControl,
  CustomWidgetPreview,
} from "../components/custom-widgets"

CMS.registerWidget("mywidget", CustomWidgetControl, CustomWidgetPreview)

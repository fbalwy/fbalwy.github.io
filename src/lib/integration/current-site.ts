import { APPROVED_CONTACT_CONTRACT } from "../content/public-actions.js";
import { QA007_PROMOTED_CONTENT } from "../release/promotion.mjs";
import { createIntegratedSiteModel } from "./site.js";

export const currentSite = createIntegratedSiteModel({
  content: QA007_PROMOTED_CONTENT,
  contact: APPROVED_CONTACT_CONTRACT,
});

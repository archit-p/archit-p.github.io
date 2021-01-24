import {
  ADD_PAGE_TO_BREADCRUMB,
  REMOVE_PAGE_FROM_BREADCRUMB,
} from "src/redux/types"

export function addPageToBreadcrumbs(page) {
  return {
    type: ADD_PAGE_TO_BREADCRUMB,
    page: page,
  }
}

export function removePageFromBreadcrumbs() {
  return {
    type: REMOVE_PAGE_FROM_BREADCRUMB,
  }
}

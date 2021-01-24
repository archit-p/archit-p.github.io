import {
  ADD_PAGE_TO_BREADCRUMB,
  REMOVE_PAGE_FROM_BREADCRUMB,
} from "src/redux/types"

function breadcrumbs(state = [], action = {}) {
  switch (action.type) {
    case ADD_PAGE_TO_BREADCRUMB:
      return [...state, action.page]
    case REMOVE_PAGE_FROM_BREADCRUMB:
      if (state.length === 0) {
        return []
      }
      return state.slice(0, state.length - 1)
    default:
      return state
  }
}

export default breadcrumbs

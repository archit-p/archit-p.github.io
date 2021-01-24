import React from "react"
import { Provider } from "react-redux"
import { createStore } from "redux"
import rootReducer from "src/redux/root"

const initialState = {}

const store = createStore(rootReducer, initialState)

export default ({ element }) => <Provider store={store}>{element}</Provider>

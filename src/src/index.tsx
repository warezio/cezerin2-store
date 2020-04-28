import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

// Old

import { BrowserRouter } from "react-router-dom"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux"
import thunkMiddleware from "redux-thunk"
import { initOnClient } from "theme"
import clientSettings from "./config/store"
import reducers from "../shared/reducers"
import * as analytics from "../shared/analytics"
import App from "../shared/app"
import api from "./api"

const initialState = window.__APP_STATE__
const themeText = window.__APP_TEXT__

initOnClient({
  themeSettings: initialState.app.themeSettings,
  text: themeText,
  language: clientSettings.language,
  api,
})

const store = createStore(
  reducers,
  initialState,
  applyMiddleware(thunkMiddleware)
)

ReactDOM.render(
  <React.StrictMode>
    {" "}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
)

analytics.onPageLoad({ state: initialState })

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

const setVariables = options => {
  if (options.themeSettings) {
    ;({ themeSettings } = options)
  }

  if (options.text) {
    ;({ text } = options)
  }

  if (options.language) {
    ;({ language } = options)
  }

  if (options.api) {
    ;({ api } = options)
  }
}

const initOnClient = options => {
  setVariables(options)
}

const initOnServer = options => {
  setVariables(options)
}
let themeSettings = null
let text = null
let language = null
let api = null

export { themeSettings, text, language, initOnClient, initOnServer }
export default api

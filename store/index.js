import Vuex from 'vuex'

export default function() {
  return new Vuex.Store({
    state: {
      locale: 'en',
      pages: {},
    },

    mutations: {
      setLocale (state, locale) {
        state.locale = locale
      },
      setPages (state, pages) {
        state.pages = pages
      }
    }
  })
}

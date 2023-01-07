import React from 'react'

const NxtContext = React.createContext({
  savedList: [],
  isDark: true,
  isSaved: false,
  removeSaveItem: () => {},
  addSavedItem: () => {},
  toggleTheme: () => {},
})

export default NxtContext

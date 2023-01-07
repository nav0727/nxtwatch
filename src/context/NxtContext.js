import React from 'react'

const NxtContext = React.createContext({
  savedList: [],
  isDark: true,
  addToSavedList: () => {},
  removeCartItem: () => {},
  toggleTheme: () => {},
})

export default NxtContext

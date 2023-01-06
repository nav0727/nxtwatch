import {React} from 'react'

const NxtContext = React.createContext({
  isDark: false,
  onToggleTheme: () => {},
})

export default NxtContext

import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React, { useState } from 'react'

import mapping from './mapping.json'
import { AppNavigator } from './src/Components/Navigator'
import { ThemeContext } from './src/Contexts/ThemeContext'

export default (): JSX.Element => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
  }

  return (
    <React.Fragment>
      <IconRegistry icons={EvaIconsPack} />
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        {/* @ts-expect-error */}
        <ApplicationProvider {...eva} theme={eva[theme]} customMapping={mapping}>
          <AppNavigator />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

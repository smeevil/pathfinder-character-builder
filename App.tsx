import * as eva from '@eva-design/eva'
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import React, { useState } from 'react'

import mapping from './mapping.json'
import { ThemeContext } from './src/Contexts/ThemeContext'
import { MainLayout } from './src/Layouts/MainLayout'

console.log({ mapping })
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
        {/* @ts-ignore */}
        <ApplicationProvider {...eva} theme={eva[theme]} customMapping={mapping}>
          <MainLayout />
        </ApplicationProvider>
      </ThemeContext.Provider>
    </React.Fragment>
  )
}

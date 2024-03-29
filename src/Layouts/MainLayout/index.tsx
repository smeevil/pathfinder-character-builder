import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Avatar, Divider, Icon, Layout, Text, Toggle, TopNavigation } from '@ui-kitten/components'
import React, { useContext } from 'react'
import { SafeAreaView, View } from 'react-native'

import { ThemeContext } from '../../Contexts/ThemeContext'
import { SelectHeritageScreen } from '../../Screens/SelectHeritageScreen'
import { styles } from './styles'

const { Navigator, Screen } = createStackNavigator()

export const MainLayout: React.FC = (): JSX.Element => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const renderAccessoryRight = () => {
    return (
      <React.Fragment>
        <Toggle checked={theme === 'dark'} onChange={toggleTheme} />
        <Icon style={styles.icon} fill="#3366ff" name="moon-outline" />
      </React.Fragment>
    )
  }

  const renderTitle = () => (
    <View style={styles.titleContainer}>
      <Avatar style={styles.logo} source={require('../../../assets/d20.png')} />
      <Text>Pathfinder Character Builder</Text>
    </View>
  )

  return (
    <Layout style={styles.rootWrapper}>
      <SafeAreaView style={styles.mainWrapper}>
        <TopNavigation title={renderTitle} accessoryRight={renderAccessoryRight} />
        <Divider />
        <NavigationContainer>
          <SelectHeritageScreen />
        </NavigationContainer>
      </SafeAreaView>
    </Layout>
  )
}

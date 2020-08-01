import { Button, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export const HomeScreen: React.FC = (): JSX.Element => {
  return (
    <Layout style={styles.container} level="1">
      <Image style={styles.image} source={require('../../../assets/goblin.png')} />
      <Text style={styles.intro}>Hi there!</Text>
      <Button>Start Building!</Button>
    </Layout>
  )
}

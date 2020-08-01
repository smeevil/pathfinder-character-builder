import { useNavigation } from '@react-navigation/native'
import { Layout } from '@ui-kitten/components'
import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'

export const ToBeContinuedScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation()

  return (
    <Layout style={styles.container} level="1">
      <Image style={styles.image} source={require('../../../assets/tbc.png')} />
    </Layout>
  )
}

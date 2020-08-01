import { Card, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View, ViewProps } from 'react-native'

import { cleanText } from '../../Lib/cleanText'
import { IBackground } from '../../Screens/SelectBackgroundScreen/interfaces'
import { Pill } from '../Pill'
import { styles } from './styles'

interface IProps {
  background: IBackground
}

export const BackgroundInfo: React.FC<IProps> = ({ background }): JSX.Element => {
  const Header = (props: ViewProps | undefined): JSX.Element => (
    <View {...props}>
      <Text category="h6">{background.name}</Text>
    </View>
  )

  const Footer = (): JSX.Element => (
    <Layout style={styles.stats} level="1">
      <Layout style={styles.boosts} level="1">
        <Text>Boost either: </Text>
        {background.ability_boost_choices.map((boost, index) => (
          <Pill key={`boost-${index}`} text={boost} />
        ))}
      </Layout>
    </Layout>
  )

  return (
    <React.Fragment>
      <Card header={Header}>
        <Text>{cleanText(background.descr)}</Text>
      </Card>
      {Footer()}
    </React.Fragment>
  )
}

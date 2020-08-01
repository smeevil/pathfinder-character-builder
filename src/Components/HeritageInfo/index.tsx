import { Card, Layout, Text } from '@ui-kitten/components'
import React from 'react'
import { View, ViewProps } from 'react-native'

import { cleanText } from '../../Lib/cleanText'
import { IHeritage, IRace } from '../../Screens/SelectHeritageScreen/interfaces'
import { Pill } from '../Pill'
import { styles } from './styles'

interface IProps {
  race: IRace
  heritage: IHeritage
}

export const HeritageInfo: React.FC<IProps> = ({ race, heritage }): JSX.Element => {
  const Header = (props: ViewProps | undefined): JSX.Element => (
    <View {...props}>
      <Text category="h6">{race.name}</Text>
      <Text category="s1">{heritage.name}</Text>
    </View>
  )

  const Footer = (): JSX.Element => (
    <Layout style={styles.stats} level="1">
      <Layout style={styles.boosts} level="1">
        <Text>Boosts: </Text>
        {race.boosts.map((boost, index) => (
          <Pill key={`boost-${index}`} text={boost} />
        ))}
      </Layout>
      <Layout style={styles.boosts} level="1">
        <Text>Flaws: </Text>
        {race.flaws.map((boost, index) => (
          <Pill key={`boost-${index}`} text={boost} />
        ))}
      </Layout>
      <Layout style={styles.boosts} level="1">
        <Text>Feat: </Text>
        <Pill text={heritage.feat || 'none'} />
      </Layout>
      <Layout style={styles.boosts} level="1">
        <Text>HP: </Text>
        <Pill text={race.hp} />
      </Layout>
      <Layout style={styles.boosts} level="1">
        <Text>Senses: </Text>
        <Pill text={race.senses} />
      </Layout>
      <Layout style={styles.boosts} level="1">
        <Text>Size: </Text>
        <Pill text={race.size} />
      </Layout>
      <Layout style={styles.boosts} level="1">
        <Text>Speed: </Text>
        <Pill text={`${race.speed} ft`} />
      </Layout>
      <Layout style={styles.boosts} level="1">
        <Text>Traits: </Text>
        {race.traits.map((boost, index) => (
          <Pill key={`boost-${index}`} text={boost} />
        ))}
      </Layout>
    </Layout>
  )

  return (
    <React.Fragment>
      <Card header={Header}>
        <Text>{cleanText(heritage.descr)}</Text>
      </Card>
      {Footer()}
    </React.Fragment>
  )
}

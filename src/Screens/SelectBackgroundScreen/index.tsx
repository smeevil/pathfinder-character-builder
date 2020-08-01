import { useNavigation } from '@react-navigation/native'
import { Button, IndexPath, Layout, Select, SelectItem, Spinner } from '@ui-kitten/components'
import React, { useCallback, useEffect, useState } from 'react'

import { BackgroundInfo } from '../../Components/BackgroundInfo'
import { IBackground } from './interfaces'
import { styles } from './styles'

export const SelectBackgroundScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation()
  // const route = useRoute<RouteProp<TNavigationParamsList, 'SelectBackgroundScreen'>>()
  // const { heritage, race }: { heritage: IHeritage; race: IRace } = route.params

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0, 0))
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<IBackground[]>()
  const [background, setBackground] = useState<IBackground>()

  useEffect(() => {
    if (!data) return
    setBackground(data[selectedIndex.row])
  }, [data, selectedIndex])

  const fetchData = useCallback(async () => {
    const json = require('../../../assets/data/backgrounds.json').background as IBackground[]
    setData(json)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchData().catch((err) => console.error(err))
  }, [fetchData])

  const handleOnSelect = (index: IndexPath | IndexPath[]): void => {
    setSelectedIndex(index as IndexPath)
  }

  const maybeRenderBackgroundInfo = (): JSX.Element | null => {
    if (!background) return null
    return (
      <Layout style={styles.cardContainer} level="1">
        <BackgroundInfo background={background} />
      </Layout>
    )
  }

  if (loading || !data) {
    return (
      <Layout style={styles.layout} level="1">
        <Spinner size="giant" />
      </Layout>
    )
  }

  const renderOption = (entry: IBackground, index: number) => <SelectItem key={`option-${index}`} title={entry.name} />
  const displayValue = data[selectedIndex.row].name

  return (
    <Layout style={styles.container} level="1">
      <Layout style={styles.content} level="1">
        <Select
          value={displayValue}
          label="Select your background"
          caption="Your background....."
          style={styles.select}
          placeholder="Default"
          selectedIndex={selectedIndex}
          onSelect={handleOnSelect}
        >
          {data.map(renderOption)}
        </Select>
        {maybeRenderBackgroundInfo()}
      </Layout>
      <Layout style={styles.buttonContainer} level="1">
        <Button status="basic" onPress={() => navigation.goBack()}>
          Back
        </Button>
        <Button onPress={() => navigation.navigate('ToBeContinuedScreen')}>Continue</Button>
      </Layout>
    </Layout>
  )
}

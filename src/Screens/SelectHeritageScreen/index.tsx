import { useNavigation } from '@react-navigation/native'
import { Button, IndexPath, Layout, Select, SelectGroup, SelectItem, Spinner } from '@ui-kitten/components'
import React, { useCallback, useEffect, useState } from 'react'

import { HeritageInfo } from '../../Components/HeritageInfo'
import { createOptionGroup, getEntryAtIndex } from './helpers'
import { IAncestriesData, IHeritage, IRace } from './interfaces'
import { styles } from './styles'

export const SelectHeritageScreen: React.FC = (): JSX.Element => {
  const navigation = useNavigation()

  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0, 0))
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<IAncestriesData>()
  const [race, setRace] = useState<IRace>()
  const [heritage, setHeritage] = useState<IHeritage>()

  useEffect(() => {
    if (!data) return

    const [selectedRace, selectedHeritage] = getEntryAtIndex(data, selectedIndex)
    setRace(selectedRace)
    setHeritage(selectedHeritage)
  }, [data, selectedIndex])

  const fetchData = useCallback(async () => {
    const json = require('../../../assets/data/ancestriesheritages.json') as IAncestriesData
    setData(json)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchData().catch((err) => console.error(err))
  }, [fetchData])

  const handleOnSelect = (index: IndexPath | IndexPath[]): void => {
    setSelectedIndex(index as IndexPath)
  }

  const maybeRenderHeritageInfo = (): JSX.Element | null => {
    if (!race || !heritage) return null
    return (
      <Layout style={styles.cardContainer} level="1">
        <HeritageInfo race={race} heritage={heritage} />
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

  const groupedData = createOptionGroup(data)
  const renderOption = (title: string, index: number) => <SelectItem key={`option-${index}`} title={title} />
  const renderGroup = (title: string, index: number) => (
    <SelectGroup key={`group-${index}`} title={title}>
      {groupedData[title].map(renderOption)}
    </SelectGroup>
  )

  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const groupTitle = Object.keys(groupedData)[selectedIndex.section!]
  const displayValue = groupedData[groupTitle][selectedIndex.row]

  return (
    <Layout style={styles.container} level="1">
      <Select
        value={displayValue}
        label="Select your Heritage"
        caption="Your heritage....."
        style={styles.select}
        placeholder="Default"
        selectedIndex={selectedIndex}
        onSelect={handleOnSelect}
      >
        {Object.keys(groupedData).map(renderGroup)}
      </Select>
      {maybeRenderHeritageInfo()}
      <Layout style={styles.buttonContainer} level="1">
        <Button status="basic" onPress={() => navigation.goBack()}>
          Back
        </Button>
        <Button onPress={() => navigation.navigate('SelectBackgroundScreen', { race, heritage })}>Continue</Button>
      </Layout>
    </Layout>
  )
}

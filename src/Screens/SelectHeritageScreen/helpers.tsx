import { IndexPath } from '@ui-kitten/components'

import { IAncestriesData, IHeritage, IRace } from './interfaces'

export const createOptionGroup = (data: IAncestriesData): Record<string, string[]> => {
  const groups: Record<string, string[]> = {}

  data.ancestries.forEach((entry: IRace) => {
    const items = entry.heritages.map((heritage: IHeritage) => heritage.name)
    groups[entry.name] = items
  })

  return groups
}

export const getEntryAtIndex = (data: IAncestriesData, index: IndexPath): [IRace, IHeritage] => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const race = data.ancestries[index.section!]
  const heritage = race.heritages[index.row]
  return [race, heritage]
}

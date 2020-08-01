type TAttribute = 'STR' | 'DEX' | 'CON' | 'INT' | 'WIS' | 'CHA'

export interface IHeritage {
  descr: string
  feat: string
  name: string
  parent: IRace
}

export interface IRace {
  boosts: TAttribute[]
  // eslint-disable-next-line camelcase
  flavor_text: string
  flaws: TAttribute[]
  heritages: IHeritage[]
  hp: number
  name: string
  senses: string
  size: 'Tiny' | 'Small' | 'Medium' | 'Large'
  source: Record<string, unknown>
  speed: number
  traits: string[]
}

export interface IAncestriesData {
  ancestries: IRace[]
}

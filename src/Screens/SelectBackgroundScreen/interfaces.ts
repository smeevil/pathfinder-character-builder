type TAttributes = 'Strength' | 'Dexterity' | 'Constitution' | 'Intelligence' | 'Wisdom' | 'Charisma'

export interface IBackground {
  // eslint-disable-next-line camelcase
  ability_boost_choices: TAttributes[]
  descr: string
  // eslint-disable-next-line camelcase
  is_comty_use: boolean
  // eslint-disable-next-line camelcase
  is_specific_to_adv: boolean
  name: string
}

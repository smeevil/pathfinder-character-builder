import { IHeritage, IRace } from '../../Screens/SelectHeritageScreen/interfaces'

export type TNavigationParamsList = {
  HomeScreen: undefined
  SelectHeritageScreen: undefined
  SelectBackgroundScreen: {
    race: IRace
    heritage: IHeritage
  }
}

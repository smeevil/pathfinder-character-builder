import { Text, Tooltip } from '@ui-kitten/components'
import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'

import { styles } from './styles'

interface IProps {
  tooltip?: string
  text: string | number
}

export const Pill: React.FC<IProps> = ({ text, tooltip }): JSX.Element => {
  const [visible, setVisible] = useState(false)

  const renderChildren = () => (
    <TouchableOpacity style={styles.pill} onPress={() => setVisible(true)}>
      <Text>{text}</Text>
    </TouchableOpacity>
  )

  const renderTooltip = (): JSX.Element => (
    <Tooltip anchor={renderChildren} visible={visible} onBackdropPress={() => setVisible(false)}>
      {tooltip!}
    </Tooltip>
  )

  if (tooltip) return renderTooltip()
  return (
    <View style={styles.pill}>
      <Text>{text}</Text>
    </View>
  )
}

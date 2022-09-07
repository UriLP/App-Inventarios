import { Platform } from "react-native"

const theme = {
  appBar: {
    primary: '#0366d6',
    textSecondary: '#999',
    textPrimary: '#fff'
  },
  colors: {
    bgPrimary: '#212121',
    bgSecondary: '#0D7377',
    active: '#32E0C4',
    textColor: '#EEEEEE'
  },
  fontSizes: {
    body: 14,
    subheading: 16
  },
  fonts: {
    main: Platform.select({
      ios: 'Arial',
      android: 'Roboto',
      default: 'System'
    })
  },
  fontWeights: {
    normal: '400',
    bold: '700'
  }
}

export default theme
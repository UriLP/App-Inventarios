import { Platform } from "react-native"

const theme = {
  appBar: {
    primary: '#0366d6',
    textSecondary: '#999',
    textPrimary: '#fff'
  },
  colors: {
    bgPrimary: '#212121',
    inactive: '#0D7377',
    active: '#32E0C4',
    textColor: '#EEEEEE'
  },
  colorsCount: {
    ubi1: '#85b6ff',
    ubi2: '#fef5af',
    ubi3: '#ff8f50',
  },
  fontSizes: {
    headerSize: 24,
    subHeadingSize: 20,
    bodySize: 18,
    formSize: 16,
    normalSize: 14,
    smallSize: 10
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
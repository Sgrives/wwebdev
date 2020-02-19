export const isDarkMode = true // TODO read from cookies or preferred scheme

export const lightBlue = '#017a8c'
export const greenBlue = '#00C6A7'
export const blue = '#1E4D92'
export const lightGrey = '#d5d8dc'
export const middleGrey = '#969fa8'
export const darkGrey = '#2c3e50'
export const darkestGrey = '#0C2032'
export const greyBlue = '#5B6F82'
export const white = '#fff'

export const boxShadow = '0 16px 48px #E3E7EB'
export const darkBoxShadow = `0 16px 48px ${darkGrey}`
export const gradient = `linear-gradient(57deg, ${greenBlue} 0%, ${blue} 100%)`
export const breakpoint = '640px'
export const breakpointSmall = '480px'
export const breakpointLarge = '960px';

export const backgroundColor = isDarkMode ? darkestGrey : white
export const contentBackgroundColor = isDarkMode ? darkGrey : white
export const containerBoxShadow = isDarkMode ? darkBoxShadow : boxShadow
export const subtleFontColor = isDarkMode ? middleGrey : greyBlue
export const fontColor = isDarkMode ? lightGrey : darkGrey
export const subtleColor = isDarkMode ? darkestGrey : lightGrey
export const highlightColor = isDarkMode ? greenBlue : lightBlue
export const highlightHoverColor = isDarkMode ? lightBlue : greenBlue

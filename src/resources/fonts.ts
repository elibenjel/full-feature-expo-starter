import { Assets } from 'react-native-ui-lib'

/**
 * Load fonts from the static folder
 */
const fonts = {
  // 'Lemon-Regular': require('~/fonts/Lemon-Regular.ttf'),
}

Assets.loadAssetsGroup('fonts', fonts)

export default fonts

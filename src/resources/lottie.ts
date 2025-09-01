import { Assets } from 'react-native-ui-lib'

/**
 * Load lottie files from the static folder
 */
const lottie = {
  // questionMark: require('~/lottie/question-mark.json'),
}

Assets.loadAssetsGroup('lottie', lottie)

export default lottie

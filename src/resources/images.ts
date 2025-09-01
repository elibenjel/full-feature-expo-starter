import { Assets } from 'react-native-ui-lib'

const images = {
  // logo: require('~/images/logo.png'),
}

/**
 * Load images from the static folder
 */
Assets.loadAssetsGroup('images', images)

export default images
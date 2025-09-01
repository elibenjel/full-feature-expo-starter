import View from '../basic/View'
import Spinner from './Spinner'

export default function Loading() {
  return (
    <View flex center>
      <Spinner animating size="large" />
    </View>
  )
}

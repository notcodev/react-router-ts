import { Matcher } from '../../common/types'
import { View } from '../types'

export const renderViews = (views: View[], matcher: Matcher) =>
  views.map((view, index) => view.render(matcher, index))

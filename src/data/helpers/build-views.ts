import { Matcher } from '../../common/types'
import { View } from '../types'

export const buildViews = (views: View[], matcher: Matcher) =>
  views.map((view) => view.build(matcher))

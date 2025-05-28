import type { Matcher } from '../../common/types'
import type { View } from '../types'

export const renderViews = (views: View[], matcher: Matcher): React.ReactElement[] =>
  views.map((view, index) => view.render(matcher, index))

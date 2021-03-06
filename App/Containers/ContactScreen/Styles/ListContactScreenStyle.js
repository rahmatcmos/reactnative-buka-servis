import { StyleSheet } from 'react-native'
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes'

export default {
  ...ApplicationStyles.screen,
  ...ApplicationStyles.listWithIcon,
  container: {
    flex: 1,
    backgroundColor: Colors.background
  },
  row: {
    flex: 1,
    backgroundColor: Colors.fire,
    justifyContent: 'center'
  },
  boldLabel: {
    fontWeight: 'bold',
    alignSelf: 'center',
    color: Colors.snow,
    textAlign: 'center',
    marginBottom: Metrics.smallMargin
  },
  label: {
    textAlign: 'center',
  },
  serviceTitle: {
    fontWeight: 'bold',
    fontSize: 16
  },
  action: {
    flexDirection: 'row',
    backgroundColor: Colors.error,
    flex: 1,
    paddingHorizontal: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  actionText: {
    color: '#FFF',
    fontSize: Fonts.size.regular,
    marginHorizontal: Metrics.baseMargin
  },
  contactItem: {
    flexDirection: 'row',
    marginHorizontal: Metrics.smallMargin,
    borderRadius: Metrics.borderRadius,
    padding: Metrics.smallMargin,
    paddingVertical: Metrics.baseMargin,
    alignItems: 'center'
  },
  contactItemIcon: {
    borderRadius: Metrics.borderRadius,
    marginRight: Metrics.smallMargin
  }
}

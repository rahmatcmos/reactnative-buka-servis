import React, { Component } from 'react'
import { Toast } from 'native-base';
import { View, ScrollView, Text, KeyboardAvoidingView, ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'
import HeaderBar from '../../Components/HeaderBar'
import RegisterForm from '../../Components/Forms/RegisterForm'
import R from 'ramda'

// Styles
import styles from './Styles/RegisterScreenStyle'
import UserActions from '../../Redux/UserRedux';

class RegisterScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: <HeaderBar title="Create an Account" back={() => navigation.pop()} />
  })

  componentWillReceiveProps(nextProps) {
    if (nextProps.fetching === false && this.props.navigation.isFocused()) {
      if (nextProps.error != null) {
        if (nextProps.error == "Error: The email address is badly formatted.") {
          text = 'Incorrect email format'
        } else if (nextProps.error == "Error: The email address is already in use by another account.") {
          text = 'Email is already in use'
        }

        Toast.show({
          text: text,
          type: 'danger',
          buttonText: 'Close',
          duration: 2500
        })
      } else {
        Toast.show({
          text: 'Check email to complete registration',
          type: 'success',
          buttonText: 'Close',
          duration: 2500
        })
        this.props.navigation.pop()
      }
    }
  }

  onSubmit = (values, dispatch) => {
    values.gender = values.gender || 'Male'
    const { email, password, name, gender, address, location } = values

    if (R.equals(values, { email, password, name, gender, address, location })) {
     this.props.register(email, password, {
       name, gender, address,
       location: {
         latitude: location.latitude,
         longitude: location.longitude,
       }
     })
    } else {
      Toast.show({
        text: 'Fill the form',
        type: 'warning',
        buttonText: 'Close',
        duration: 2500
      })
    }
  }

  render () {
    return (
      <ScrollView>
        <View style={styles.container}>
          <RegisterForm onSubmit={this.onSubmit} fetching={this.props.fetching} />
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetching: state.user.fetching,
    error: state.user.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (e, p, d) => dispatch(UserActions.register(e, p, d))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterScreen)

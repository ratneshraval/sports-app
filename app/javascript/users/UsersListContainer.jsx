import {connect} from 'react-redux'
import UsersListView from 'UsersListView.jsx'

const mapStateToProps = (state) => ({
  users: state.users
})

export default connect(mapStateToProps)(UsersListView)

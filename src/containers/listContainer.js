import { connect } from 'react-redux';
import { List } from '../components/list';

const mapStateToProps = state => ({
  payload: state.data.payload
});

export default connect(
  mapStateToProps
)(List)
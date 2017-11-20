import { connect } from 'react-redux';
import { Average } from '../components/average';

const mapStateToProps = state => ({
  average: state.data.average
});

export default connect(
  mapStateToProps
)(Average)
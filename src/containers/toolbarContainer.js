import { connect } from 'react-redux';
import { filterData } from '../actions';
import { Ratings } from '../components/ratings';

const mapStateToProps = state => ({
  ratings: state.data.ratings
});

const mapDispatchToProps = (dispatch) => ({
  onClick: (value) => {
    dispatch(filterData(value))
  }
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Ratings)

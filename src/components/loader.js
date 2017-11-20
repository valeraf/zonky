import React from 'react';
import { connect } from 'react-redux'

const Loader = ({ loading }) => (loading && <div className="loading"></div>)

const mapStateToProps = (state) => ({
  loading: state.data.loading
})

export default connect(mapStateToProps)(Loader);
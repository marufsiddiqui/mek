import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  data: state.test.data,
});

function SampleComponent(props) {
  const data = props.data;
  return (
    <div>
      Data from redux: {data}
    </div>
  );
}

SampleComponent.propTypes = {
  data: PropTypes.number,
};

export default connect(mapStateToProps)(SampleComponent);

import React from 'react';
import { connect } from 'react-redux';

import {
  Segment,
  Button,
} from 'semantic-ui-react';

import { loadUnitData } from '../toolActions';

const mapDispatchToProps = { loadUnitData };

function Tools(props) {
  return (
    <Segment attached="bottom">
      <Button onClick={props.loadUnitData}>
        Reload Unit Data
      </Button>
    </Segment>
  );
}

export default connect(null, mapDispatchToProps)(Tools);

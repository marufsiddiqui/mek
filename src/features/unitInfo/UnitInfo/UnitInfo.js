import React from 'react';
import { connect } from 'react-redux';

import {
  Form,
  Dropdown,
  Segment,
} from 'semantic-ui-react';

import {selectUnitInfo} from './unitInfoSelectors';

const FACTIONS = [
  { value: 'lc', text: 'Lyran Commonwealth' },
  { value: 'wd', text: 'Wolfs Dragoons' },
];

const mapStateToProps = state => ({
  unitInfo: selectUnitInfo(state),
});

function UnitInfo({
  unitInfo = {},
}) {
  const { name, affiliation } = unitInfo;
  return (
    <Segment attached="bottom">
      <Form size="large">
        <Form.Field>
          <label>Unit Name</label>
          <input type="text" placeholder="Name" value={name} />
        </Form.Field>
        <Form.Field>
          <label>Affiliation</label>
          <Dropdown
            selection
            options={FACTIONS}
            value={affiliation}
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default connect(mapStateToProps)(UnitInfo);

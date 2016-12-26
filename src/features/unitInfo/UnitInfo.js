import React from 'react';
import {
  Form,
  Dropdown,
  Segment,
} from 'semantic-ui-react';

const FACTIONS = [
  { value: 'lc', text: 'Lyran Commonwealth' },
  { value: 'wd', text: 'Wolfs Dragoons' },
];

function UnitInfo() {
  return (
    <Segment attached="bottom">
      <Form size="large">
        <Form.Field>
          <label>Unit Name</label>
          <input type="text" placeholder="Name" value="Black Widow Company" />
        </Form.Field>
        <Form.Field>
          <label>Affiliation</label>
          <Dropdown
            selection
            options={FACTIONS}
            value="wd"
          />
        </Form.Field>
      </Form>
    </Segment>
  );
}

export default UnitInfo;

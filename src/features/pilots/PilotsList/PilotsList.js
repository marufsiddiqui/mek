import React from 'react';
import { Table } from 'semantic-ui-react';

import PilotListHeader from './PilotsListHeader';
import PilotsListRow from './PilotsListRow';

function PilotsList({ pilots = [] }) {
  return (
    <Table celled>
      <PilotListHeader />
      <Table.Body>
        { pilots.map(pilot => <PilotsListRow pilot={pilot} key={pilot.name} />) }
      </Table.Body>

    </Table>
  );
}

export default PilotsList;

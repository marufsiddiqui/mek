import React from 'react';
import { Table } from 'semantic-ui-react';

import PilotListHeader from './PilotsListHeader';
import PilotsListRow from './PilotsListRow';

function PilotsList({
  pilots = [],
  onPilotClicked,
  currentPilot,
}) {
  return (
    <Table celled>
      <PilotListHeader />
      <Table.Body>
        { pilots.map(pilot =>
          <PilotsListRow
            pilot={pilot}
            onPilotClicked={onPilotClicked}
            selected={pilot.id === currentPilot}
            key={pilot.name}
          />)
        }
      </Table.Body>

    </Table>
  );
}

export default PilotsList;

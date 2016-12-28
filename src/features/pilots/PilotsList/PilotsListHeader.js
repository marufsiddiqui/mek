import React from 'react';
import { Table } from 'semantic-ui-react';

function PilotsListHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={5}>
          Name
        </Table.HeaderCell>
        <Table.HeaderCell width={3}>
          Rank
        </Table.HeaderCell>
        <Table.HeaderCell width={2}>
          Age
        </Table.HeaderCell>
        <Table.HeaderCell width={2}>
          Skills
        </Table.HeaderCell>
        <Table.HeaderCell width={4}>
          Mech
        </Table.HeaderCell>

      </Table.Row>
    </Table.Header>
  );
}

export default PilotsListHeader;

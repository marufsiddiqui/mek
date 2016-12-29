import React from 'react';
import { Table } from 'semantic-ui-react';

function MechsListHeader() {
  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={1}>
          ID
        </Table.HeaderCell>
        <Table.HeaderCell width={5}>
          Name
        </Table.HeaderCell>
        <Table.HeaderCell width={3}>
          Model
        </Table.HeaderCell>
        <Table.HeaderCell width={3}>
          Weight (tons)
        </Table.HeaderCell>
        <Table.HeaderCell width={2}>
          Class
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}

export default MechsListHeader;

import React from 'react';
import {
  Header,
  Container,
} from 'semantic-ui-react';

import TabContainer from './features/tabs/TabBarContainer';

import './App.css';

const tabs = [
  { name: 'unitInfo', label: 'Unit Info' },
  { name: 'pilots', label: 'Pilots' },
  { name: 'mechs', label: 'Mechs' },
  { name: 'unitOrganization', label: 'Unit Organization' },
];

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Header inverted as="h1">Project Mini-Mek</Header>
      </div>
      <Container>
        <TabContainer tabs={tabs} size="massive" />
      </Container>
    </div>
  );
}

export default App;

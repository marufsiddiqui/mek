import React from 'react';
import {
  Header,
  Container,
} from 'semantic-ui-react';

import TabContainer from 'features/tabs/TabBarContainer';
import UnitInfo from 'features/unitInfo/UnitInfo';
import Pilots from 'features/pilots/Pilots';
import Mechs from 'features/mechs/Mechs';
import UnitOrganization from 'features/unitOrganization/UnitOrganization';

import './App.css';

const tabs = [
  { name: 'unitInfo', label: 'Unit Info', component: UnitInfo },
  { name: 'pilots', label: 'Pilots', component: Pilots },
  { name: 'mechs', label: 'Mechs', component: Mechs },
  { name: 'unitOrganization', label: 'Unit Organization', component: UnitOrganization },
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

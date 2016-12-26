import React from 'react';
import {
  Header,
  Container,
} from 'semantic-ui-react';

import TabContainer from './features/tabs/TabBarContainer';

import './App.css';

const UnitInfo = () => <div>Unit Info content</div>;

const Pilots = () => <div>Pilots content</div>;

const Mechs = () => <div>Mechs content</div>;

const UnitOrganization = () => <div>Unit Organization content</div>;

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

import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  Segment,
  Header,
} from 'semantic-ui-react';

import schema from 'app/schema';
import { selectPilot } from './pilotsActions';
import { selectCurrentPilot } from './pilotsSelectors';

import PilotList from './PilotsList';
import PilotDetails from './PilotDetails';

export function Pilots(props) {
  const { pilots = [], selectPilot, currentPilot } = props;
  const currentPilotEntry = pilots.find(pilot => pilot.id === currentPilot) || {};
  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Pilot List</Header>
          <PilotList
            onPilotClicked={selectPilot}
            currentPilot={currentPilot}
            pilots={pilots}
          />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Pilot Details</Header>
          <Segment >
            <PilotDetails pilot={currentPilotEntry} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

const mapStateToProps = (state) => {
  const session = schema.from(state.entities);
  const { Pilot } = session;
  const pilots = Pilot.all().withModels.map((pilotModel) => {
    const pilot = { ...pilotModel.ref };
    const { mech } = pilotModel;

    if (mech && mech.type) {
      pilot.mechType = mech.type.id;
    }

    return pilot;
  });

  const currentPilot = selectCurrentPilot(state);

  return { pilots, currentPilot };
};

const mapDispatchToProps = { selectPilot };

export default connect(mapStateToProps, mapDispatchToProps)(Pilots);

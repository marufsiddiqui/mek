import React from 'react';
import {connect} from 'react-redux';

import {
  Grid,
  Segment,
  Header,
} from 'semantic-ui-react';

import schema from 'app/schema';

import MechsList from './MechsList';
import MechDetails from './MechDetails';

export function Mechs(props) {
  const { mechs } = props;
  const currentMech = mechs[0] || {};
  return (
    <Segment>
      <Grid>
        <Grid.Column width={10}>
          <Header as="h3">Mechs List</Header>
          <MechsList mechs={mechs} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Header as="h3">Mech Details</Header>
          <Segment >
            <MechDetails mech={currentMech} />
          </Segment>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}

const mapStateToProps = (state) => {
  const session = schema.from(state.entities);
  const { Mech } = session;
  const mechs = Mech.all().withModels.map((mechModel) => {
    const mech = {
      ...mechModel.ref,
      mechType: {},
    };

    if (mechModel.type) {
      mech.mechType = { ...mechModel.type.ref };
    }
    return mech;
  });

  return { mechs };
};

export default connect(mapStateToProps)(Mechs);

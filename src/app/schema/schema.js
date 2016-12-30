import { Schema } from 'redux-orm';
import Pilot from 'features/pilots/Pilot';
import Mech from 'features/mechs/Mech';
import MechDesign from 'features/mechs/MechDesign';

const schema = new Schema();
schema.register(Pilot, Mech, MechDesign);

export default schema;

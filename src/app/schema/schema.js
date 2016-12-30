import { ORM } from 'redux-orm';
import Pilot from 'features/pilots/Pilot';

const schema = new ORM();
schema.register(Pilot);

export default schema;

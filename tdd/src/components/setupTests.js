import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const configureTests = () => { enzyme.configure({ adapter: new Adapter() }) };


export default configureTests;
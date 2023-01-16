/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
import ToDo from './ToDo';
import renderer from 'react-test-renderer';

it('render ToDo', () => {
  renderer.create(<ToDo />);
});

import renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('Renders Calculator', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});

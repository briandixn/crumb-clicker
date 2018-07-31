import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configue({adapter: new Adapter})

it('renders the card div', () => {
  const wrapper = shallow(<div>);
  expect(wrapper.hasClass('card')).toEqual(true);
})

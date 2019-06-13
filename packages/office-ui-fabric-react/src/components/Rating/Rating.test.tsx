import * as React from 'react';

// import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';
import { mount, ReactWrapper } from 'enzyme';
import { Rating } from './Rating';

describe('Rating', () => {
  it('Renders Rating correctly', () => {
    const component = renderer.create(<Rating />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Can change rating.', () => {
    const rating = mount(<Rating />);

    _checkState(rating, 1, '100%');
    _checkState(rating, 2, '0%');
    _checkState(rating, 3, '0%');
    _checkState(rating, 4, '0%');
    _checkState(rating, 5, '0%');

    rating
      .find('.ms-Rating-button')
      .at(1)
      .simulate('focus');

    _checkState(rating, 1, '100%');
    _checkState(rating, 2, '100%');
    _checkState(rating, 3, '0%');
    _checkState(rating, 4, '0%');
    _checkState(rating, 5, '0%');
  });

  it('Clamps input rating to allowed range.', () => {
    const rating = mount(<Rating rating={10} />);

    expect(rating.find('.ms-Rating-button').length).toEqual(5);

    _checkState(rating, 1, '100%');
    _checkState(rating, 2, '100%');
    _checkState(rating, 3, '100%');
    _checkState(rating, 4, '100%');
    _checkState(rating, 5, '100%');
  });

  it('Half star is displayed when 2.5 value is passed.', () => {
    const rating = mount(<Rating rating={2.5} />);

    _checkState(rating, 1, '100%');
    _checkState(rating, 2, '100%');
    _checkState(rating, 3, '50%');
    _checkState(rating, 4, '0%');
    _checkState(rating, 5, '0%');
  });

  it('When rating is disabled cannot change rating', () => {
    const rating = mount(<Rating disabled={true} />);
    const ratingButtons = rating.find('.ms-Rating-button');

    for (let i = 0; i < 5; i++) {
      expect(ratingButtons.at(i).prop('disabled')).toEqual(true);
    }
  });
});

function _checkState(rating: ReactWrapper, ratingToCheck: number, state: string) {
  const ratingFrontStars = rating.find('.ms-RatingStar-front').hostNodes();
  const width = ratingFrontStars.at(ratingToCheck - 1).props().style!.width;

  expect(width).toEqual(state);
}

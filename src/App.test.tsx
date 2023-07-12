import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import BtnsAudio from './BtnsAudio';


test('Testing Components', () => {

  render(<App />);

  const parent = screen.getByTestId('parent');
  const child1 = screen.getByTestId('child1');
  const child2 = screen.getByTestId('child1');

  expect(parent).toContainElement(child1);
  expect(parent).toContainElement(child2);

});


//button tests
test('testing button(s)', () => { 

  const functionTest = jest.fn();

  /*
  render(<BtnsAudio soundFunc={function (event: React.MouseEvent<HTMLButtonElement>): void {
    throw new Error('Function not implemented.');
  } } pwrState={false} />);
*/

  render(<BtnsAudio soundFunc={functionTest} pwrState={false} />)
  const child1 = screen.getByTestId('child1');
  const button = screen.getByText('Q');

  expect(child1).toContainElement(button);

  fireEvent.click(button);
  expect(functionTest).toHaveBeenCalled();

});
import {
  render, screen,
} from '@testing-library/react';

import {
  Button, ButtonTheme,
} from './Button';

describe('button', () => {
  test('test render', () => {
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
  test('test clear theme', () => {
    render(<Button theme={ButtonTheme.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug();
  });
});

import { render } from '@testing-library/react';
import { MemoryRouter, Route, Switch } from 'react-router-dom'
import SignIn from './SignIn.jsx'

it('Should match the snapshot', () => {
  const { container } = render(
    <MemoryRouter initialEntries={['/signin']}>
      <Switch>
        <Route path='signin'>
          <SignIn />
        </Route>
      </Switch>
    </MemoryRouter>
  )
  expect(container).toMatchSnapshot()
}) 
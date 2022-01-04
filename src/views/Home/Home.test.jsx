import { 
  screen,
  render,
  waitForElementToBeRemoved,
  within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProvider } from '../../context/UserContext.jsx';
import Home from './Home.jsx';

it('Renders the Home view and adds an entry', async () => {
  const { container } = render(
    <UserProvider>
      <Home />
    </UserProvider>
  )

  const entryInput = screen.getByLabelText(/entry/i)
  const signButton = screen.getByLabelText('sign')

  userEvent.type(entryInput, 'test entry')
  userEvent.click(signButton)

  expect(entryInput).toHaveValue('')

  const entry = await screen.findByText(/test entry/i)
  expect(entry).toBeInTheDocument()

  const signOutButton = await screen.findByLabelText('sign-out')
  expect(signOutButton).toBeInTheDocument()

  expect(container).toMatchSnapshot()
})
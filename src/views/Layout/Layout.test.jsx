import { 
  screen,
  render,
  waitForElementToBeRemoved,
  within,
  act,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserProvider, useUser } from '../../context/UserContext.jsx';
import Layout from './Layout.jsx';

let outerSetUser

function SignInMocker() {
  const { user, setUser } = useUser()

  outerSetUser = setUser;

  return <></>
}

it('Renders the header, footer, and children, and also the username if signed in', async () => {
  const { container } = render(
    <UserProvider>
      <Layout>
        <h1>I'm a child</h1>
        <SignInMocker />
      </Layout>
    </UserProvider>
  )

  const header = screen.getByText('Guestbook')
  const footer = screen.getByText('Footer')

  //set a timeout so the next while loop won't wait forever
  const timer = setTimeout(() => {
    throw new Error('The SignInMocker didn\'t work')
  }, 1000);

  //wait until this gets set
  while(outerSetUser === undefined) {}
  clearTimeout(timer)

  act(() => outerSetUser({ name: 'bob'}))

  const bob = await screen.findByText(/bob/)
  expect(bob).toBeInTheDocument()

  expect(container).toMatchSnapshot()
})
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

let outerSignIn

function SignInMocker() {
  const { user, signIn } = useUser()

  outerSignIn = signIn;

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
  while(outerSignIn === undefined) {}
  clearTimeout(timer)

  act(() => outerSignIn('a', 'a'))

  const name = await screen.findByText(/a/)
  expect(name).toBeInTheDocument()

  expect(container).toMatchSnapshot()
})
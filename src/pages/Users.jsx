import SignupForm from '../features/authentication/SignupForm.jsx';
import Heading from '../ui/Heading';

function Users() {
  return (
    <>
      <Heading as="h1">Create a new user</Heading>
      <SignupForm />
    </>
  );
}

export default Users;

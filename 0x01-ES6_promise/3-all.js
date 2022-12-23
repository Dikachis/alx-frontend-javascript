import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((val) => (
      console.log(`${val[0].body} ${val[1].firstName} ${val[1].lastName}`)
    ))
    .catch(() => {
      console.log('Signup system offline');
    });
}

export default handleProfileSignup;

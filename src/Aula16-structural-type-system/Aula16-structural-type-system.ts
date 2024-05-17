type VerifyUserFn = (user: User, sentValue: User) => boolean;
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type User = { username: string; password: string };

const verifiyUser: VerifyUserFn = (user, sentValue) => {
  return (
    user.username == sentValue.username && user.password == sentValue.password
  );
};

const bdUser = { username: 'joao', password: '123456' };
const sentUser = { username: 'joao', password: '123456', permission: '' };
const loggedIn = verifiyUser(bdUser, sentUser);
console.log(loggedIn);

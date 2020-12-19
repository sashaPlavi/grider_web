import { UserList } from './view/UserList';
import { Collections } from './models/Collections';
import { User, UserProps } from './models/User';

const users = new Collections(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.builUser(json);
  }
);

users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    new UserList(root, users).render();
  }
});

users.fetch();

// import { UserEdit } from './view/UserEdit';
// import { User } from './models/User';

// const user = User.builUser({ name: 'Perica', age: 20 });

// const root = document.getElementById('root');
// if (root) {
//   const userEdit = new UserEdit(root, user);

//   userEdit.render();
//   console.log(userEdit);
// } else {
//   throw new Error('root element not found');
// }

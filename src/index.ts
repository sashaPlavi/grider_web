import { UserForm } from './view/UserForm';
import { User } from './models/User';

const user = User.builUser({ name: 'Perica', age: 20 });

const root = document.getElementById('root');
if (root) {
  const userForm = new UserForm(root, user);

  userForm.render();
} else {
  throw new Error('root element not found');
}

import { UserForm } from './view/UserForm';
import { User } from './models/User';

const user = User.builUser({ name: 'Perica', age: 20 });

const userForm = new UserForm(document.getElementById('root')!, user);

userForm.render();

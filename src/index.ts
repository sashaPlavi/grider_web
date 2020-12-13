import { User } from './models/User';

const user = User.builUser({ id: 2 });

//console.log(user.attributes.get('name'));

user.on('change', () => {
  console.log(user);
});
user.fetch();
// user.on('change', () => {
//   console.log('change2');
// });
// user.on('click', () => {
//   console.log('click');
// });
// user.on('hover', () => {
//   console.log('hover');
// });

// user.trigger('dasdasda');

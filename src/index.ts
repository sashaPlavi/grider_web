import { User } from './models/User';

const user = new User({ id: 1, name: 'klementina' });

//console.log(user.attributes.get('name'));
user.on('save', () => {
  console.log(user);
});
user.save();
// user.on('change', () => {
//   console.log('change1');
// });
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

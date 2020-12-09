import { User } from './models/User';

const user = new User({ name: 'perica', age: 44 });

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

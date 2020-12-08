import { User } from './models/User';

const user = new User({ name: 'sasa', age: 38 });

user.on('change', () => {
  console.log('change1');
});
user.on('change', () => {
  console.log('change2');
});
user.on('click', () => {
  console.log('click');
});
user.on('hover', () => {
  console.log('hover');
});

user.trigger('dasdasda');

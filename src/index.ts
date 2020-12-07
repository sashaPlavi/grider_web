import { User } from './models/User';

const user = new User({ name: 'sasa', age: 38 });

user.set({});

console.log(user.get('name'));

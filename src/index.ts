import { User, UserProps } from './models/User';

import { Collections } from './models/Collections';

// axios.get('http://localhost:3000/users').then((res: AxiosResponse) => {
//   console.log(res.data);
// });
const collections = new Collections<User, UserProps>(
  'http://localhost:3000/users',
  (json: UserProps) => User.builUser(json)
);

collections.on('change', () => {
  console.log(collections);
});

collections.fetch();

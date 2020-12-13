import axios, { AxiosResponse } from 'axios';

import { Eventing } from './Eventing';
export class Collections<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialise: (json: K) => T) {}

  get on() {
    return this.events.on;
  }
  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((res: AxiosResponse) => {
      res.data.forEach((value: K) => {
        this.models.push(this.deserialise(value));
      });

      this.trigger('change');
    });
  }
}

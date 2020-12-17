import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetRadnomAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;

      this.model.set({ name });
    }
  };

  onSetRadnomAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
    <div>
    <h1>User form</h1>
    <div>User Name: ${this.model.get('name')}</div>
    <div>User Age: ${this.model.get('age')}</div>
    <input/>
    <button class="set-name">Change Name </button>
    <button class="set-age">Set Random Age </button>
    </div>`;
  }
}

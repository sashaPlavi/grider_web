export class UserForm {
  constructor(public parent: Element) {}

  template(): string {
    return `
    <div>
    <h1>User form</h1>
    <input/>
    </div>`;
  }
  render(): void {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();
    console.log(templateElement.innerHTML);

    this.parent.append(templateElement.content);
  }
}

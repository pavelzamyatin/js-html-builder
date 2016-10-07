export default class PairedTag {
  constructor(name, attributes = {}, body = '', children = []) {
    this.name = name;
    this.attributes = attributes;
    this.body = body;
    this.children = children;
  }

  toString() {
    const strAttributes = Object.keys(this.attributes).reduce((acc, key) =>
      `${acc} ${key}="${this.attributes[key]}"`, '');

    const value = Object.keys(this.children).length > 0 ?
      Object.keys(this.children).map(k => this.children[k].toString()).join('') : this.body;

    return `<${this.name}${strAttributes}>${value}</${this.name}>`;
  }
}

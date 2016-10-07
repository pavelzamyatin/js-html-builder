export default class Node {

  constructor(name, attributes) {
    this.name = name;
    this.attributes = attributes;
  }

  getName() {
    return this.name;
  }

  getAttributes() {
    return this.attributes;
  }

  getAttributesAsLine() {
    const strAttributes = Object.keys(this.getAttributes()).reduce((acc, key) =>
        `${acc} ${key}="${this.getAttributes()[key]}"`, '');
    return strAttributes;
  }
}

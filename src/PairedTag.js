import Node from '../src/Node';

export default class PairedTag extends Node {
  constructor(name, attributes, body = '', children = []) {
    super(name, attributes);
    this.body = body;
    this.children = children;
  }

  toString() {
    const value = Object.keys(this.children).length > 0 ?
      Object.keys(this.children).map(k => this.children[k].toString()).join('') : this.body;

    return `<${this.getName()}${this.getAttributesAsLine()}>${value}</${this.getName()}>`;
  }
}

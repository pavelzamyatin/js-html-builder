import Node from '../src/Node';

export default class SingleTag extends Node {
  constructor(name, attributes = {}) {
    super(name, attributes);
  }
  toString() {
    return `<${this.getName()}${this.getAttributesAsLine()}>`;
  }
}


export default class SingleTag {
  constructor(name, attributes = {}) {
    this.name = name;
    this.attributes = attributes;
  }

  toString() {
    const strAttributes = Object.keys(this.attributes).reduce((acc, key) =>
        `${acc} ${key}="${this.attributes[key]}"`, '')

    return `<${this.name}${strAttributes}>`
  }
}

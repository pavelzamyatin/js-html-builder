const singleTagsList = new Set(['hr', 'img', 'br']);

// BEGIN (write your solution here)
export const render = (ast) => {
  switch (ast.type) {
    case 'tagList':
      return `${ast.value.map(render).join('')}`;
    case 'tag':
      // console.log(ast.attributes);
      const attributes = Object.keys(ast.attributes).reduce((acc, key) =>
        `${acc} ${key}="${ast.attributes[key]}"`, '');
      const result = singleTagsList.has(ast.name) ?
        `<${ast.name}${attributes}>${render(ast.value)}` :
        `<${ast.name}${attributes}>${render(ast.value)}</${ast.name}>`;
      return result;
    default:
      return ast;
  }
};

export const parse = (data) => {
  if (data[0] instanceof Array) {
    return {
      type: 'tagList',
      value: data.map(parse),
    };
  }

  let value;
  let attributes = {};

  if (data.length === 3) {
    attributes = data[1];
    value = data[2];
  } else if (data.length === 2) {
    if (data[1] instanceof Array || typeof data[1] === 'string') {
      value = data[1];
    } else {
      attributes = data[1];
      value = '';
    }
  } else if (data.length === 1) {
    value = '';
  }

  const processedBody = value instanceof Array ? parse(value) : value;

  return {
    type: 'tag',
    name: data[0],
    attributes,
    value: processedBody,
  };
};
// END

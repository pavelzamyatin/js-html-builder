import PairedTag from '../src/PairedTag';
import SingleTag from '../src/SingleTag';

const buildNode = (name, ...args) => {
  const singleTagsList = new Set(['hr', 'img', 'br']);
  const Tag = singleTagsList.has(name) ? SingleTag : PairedTag;
  return new Tag(name, ...args);
};

export default buildNode;

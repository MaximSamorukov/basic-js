const CustomError = require("../extensions/custom-error");

const chainMaker = {

  getLength() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    const item = `( ${value} )`;
    this.chain.push(item);
    return this;

  },
  removeLink(position) {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if (typeof position !== 'number' || position < 1 || position > this.getLength()) {
      this.chain = [];
      throw new Error();
    }
    this.chain = this.chain.filter((i, index) => index !== position - 1);
    return this;

  },
  reverseChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    // console.log('finish');
    // console.log(this.chain);
    const theChain = this.chain.join('~~');
    this.chain = [];
    return theChain;
  }
};

chainMaker.chain = [];
module.exports = chainMaker;

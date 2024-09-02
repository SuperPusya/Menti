import { expect } from "chai";
import _ from 'lodash';

describe('Math Operations Test', function () {
  it('should return 4 when adding 2 + 2', function () {
    expect(2 + 2).to.equal(4);
  });

  it('should return 0 when subtracting 2 - 2', function () {
    expect(2 - 2).to.equal(0);
  });
});


it('should return false if an array is not empty', function () {
    const array = [1, 2, 3];
    expect(_.isEmpty(array)).to.be.false;
  });
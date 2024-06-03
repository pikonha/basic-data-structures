import { expect } from "chai";

import { Queue } from "../src/queue.js";
import { Stack } from "../src/stack.js";

const runTests = (DataStructureClass) => {
  describe(`${DataStructureClass.name} tests`, () => {
    let ds;

    beforeEach(() => {
      ds = new DataStructureClass();
    });

    it("should start empty", () => {
      expect(ds.isEmpty()).to.be.true;
      expect(ds.size()).to.equal(0);
    });

    it("should add elements", () => {
      ds.add(1);
      expect(ds.isEmpty()).to.be.false;
      expect(ds.size()).to.equal(1);
      ds.add(2);
      expect(ds.size()).to.equal(2);
    });

    it("should remove elements", () => {
      ds.add(1);
      ds.add(2);
      expect(ds.remove()).to.equal(2);
      expect(ds.size()).to.equal(1);
      expect(ds.remove()).to.equal(1);
      expect(ds.isEmpty()).to.be.true;
    });

    it("should peek elements", () => {
      expect(ds.peek()).to.be.null;
      ds.add(1);
      expect(ds.peek()).to.equal(1);
      ds.add(2);
      expect(ds.peek()).to.equal(2);
    });

    it("should handle remove on empty structure gracefully", () => {
      expect(ds.remove()).to.be.null;
      ds.add(1);
      ds.remove();
      expect(ds.remove()).to.be.null;
    });

    it("should handle peek on empty structure gracefully", () => {
      expect(ds.peek()).to.be.null;
      ds.add(1);
      ds.remove();
      expect(ds.peek()).to.be.null;
    });
  });
};

runTests(Queue);
// runTests(Stack);

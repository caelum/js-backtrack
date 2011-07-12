

Screw.Unit(function() {
    describe("Collection Matcher", function() {
        it("should match empty collections", function() {
            expect([]).to(contains_same_elements, []);
        });
        it("should match collections of primitives in any order", function() {
            expect([1,2,3,"hi","pokemon"]).to(contains_same_elements, ["pokemon", 3, 1, 2, "hi"]);
        });
        it("should not match collections of different size", function() {
            expect([1,2,3,4,5,6]).to_not(contains_same_elements, [1,2,3]);
            expect([1,2,3]).to_not(contains_same_elements, [1,2,3,4,5,6]);
        });
        it("should match collections with repetitions", function() {
            expect([1,2,3,3,3,3]).to(contains_same_elements, [3,1,3,2,3,3]);
            expect([1,2,3,3,3,3]).to_not(contains_same_elements, [3,1,3,2]);
            expect([1,2,3,3,3,3]).to_not(contains_same_elements, [3,1,1,1,2,1]);
        });
        it("should match collections in any order of collections in any order", function() {
            expect([[1,2],3,4,[5]]).to(contains_same_elements, [[5], 4, 3, [2,1]]);
            expect([[1,2],3,4,[5]]).to_not(contains_same_elements, [5,4,3,2,1]);
        });
    });
});

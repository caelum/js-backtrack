

Screw.Unit(function() {

    var default_extractor = function (obj) {
        return obj["value"];
    }
    
    var percent = function (val) {
    }

    describe("Brute Force", function () {
        it("Empty collection input returns empty result", function () {
            var result = bruteforce([], 100, default_extractor, percent);
            expect(result).to(contains_same_elements, []);
        });
        
        it("Value zero must return empty or zero list", function () {
            var result = bruteforce([{value: 100}], 0, default_extractor, percent);
            expect(result).to(contains_same_elements, []);
            
            var result = bruteforce([{value: 0}], 0, default_extractor, percent);
            expect(result).to(contains_same_elements, [[{value: 0}]]);
        });
        
        it("Collection with one element that matches with value return this object", function () {
            var result = bruteforce([{value: 100}], 100, default_extractor, percent);
            expect(result).to(contains_same_elements, [[{value: 100}]]);
        });
        
        it("Collection with two elements that one matches with value returns this element", function () {
            var result = bruteforce([{value: 100}, {value: 200}], 100, default_extractor, percent);
            expect(result).to(contains_same_elements, [[{value: 100}]]);
        });
        
        it("Collection with two elements that one is smaller than value with value returns other element", function () {
            var result = bruteforce([{value: 200}, {value: 100}], 200, default_extractor, percent);
            expect(result).to(contains_same_elements, [[{value: 200}]]);
        });
        
        it("Collection with two elements that fits value returns these two elements", function () {
            var result = bruteforce([{value: 100}, {value: 100}], 200, default_extractor, percent);
            expect(result).to(contains_same_elements, [[{value: 100}, {value: 100}]]);
        });
        
        it("Brings all possible solutions", function() {
            var result = bruteforce([{value: 1}, {value: 2}, {value: 3}, {value: 4}, {value: 5}, {value: 6}], 6, default_extractor, percent);
            expect(result).to(contains_same_elements, [[{value:6}], [{value:1},{value:5}], [{value:2},{value:4}], [{value:1},{value:3},{value:2}]]);
        });
        
        it("Big Test", function () {
            var result = bruteforce([{value: 100}, {value: 300}, {value: 200}, {value: 350}, {value: 120}, {value: 500}], 450, default_extractor, percent);
            expect(result).to(contains_same_elements, [[{value: 350}, {value: 100}]]);
        });
    });
});

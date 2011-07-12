var contains_same_elements = {
    index_of: function (element, list) {
        var i;
        for(i = 0; i < list.length; i++) {
            if(element instanceof Array) {
                if((list[i] instanceof Array) && this.list_equal(list[i], element)) {
                    return i;
                }
            }
            else if(Screw.Matchers.equal.match(element, list[i])) {
                return i;
            }
        }
        return -1;
    },
    remove: function (list, index) {
        list[index] = list[list.length - 1];
        list.pop();
    },
    list_equal: function (list1, list2) {
        var copy_list2 = list2.slice(0, list2.length);
        var i;
        for(i = 0; i < list1.length; i++) {
            var list1_item = list1[i];
            var index_on_list2 = this.index_of(list1_item, copy_list2)
            if(index_on_list2 == -1) {
                return false;
            }
            this.remove(copy_list2, index_on_list2);
        }
        return copy_list2.length == 0;
    },
    match:
        function(expected, actual) {
	        if(expected.length != actual.length) {
	            return false;
	        }
	        return this.list_equal(expected, actual);
        },
    failure_message: 
        function (expected, actual, not) {
            return "expected " + $.print(actual) + (not ? ' to not contain ' : ' to contain ') + $.print(expected);;
        }
};

var less_or_equal = {
    match: function(expected, actual) {
        return actual <= expected;
    },
    
    failure_message: function (expected, actual, not) {
        return "expected " + $.print(actual) + (not ? ' to be greater ' : ' to be less or equal ') + $.print(expected);;
    }
};


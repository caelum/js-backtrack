function bruteforce(entry, value, extractor, percentage_callback) {
    return bruteforce_r(0, entry, value, extractor, percentage_callback, [], []);
}

function bruteforce_r(depth, entry, value, extractor, 
                        percentage_callback, state, results) {
    
    var initial_length = entry.length;
    while (entry.length > 0) {
        var element = entry.pop();
        var extracted_value = extractor(element);
        var delta = value - extracted_value;

        if (depth == 0) {
            percentage_callback((1 - (entry.length/initial_length)) * 100);
        }
    
        if (delta > 0) {
            bruteforce_r(depth + 1, 
                         entry.concat(), 
                         delta, extractor, 
                         percentage_callback, 
                         state.concat(element), 
                         results);
        }
        else if (delta == 0) {
            results.push(state.concat(element));
        }
    }
    
    if (depth == 0) percentage_callback(100);
    return results;
}

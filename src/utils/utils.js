export function getFilterParameters(department, location, functionValue, search) {
    if(department || location || functionValue || search) {
        let queryStr = '?';
        const queryArr = [];
        if(search) queryArr.push(`q=${search}`);
        if(department) queryArr.push(`dept=${department}`);
        if(location) queryArr.push(`loc=${location}`);
        if(functionValue) queryArr.push(`fun=${functionValue}`);
        queryStr+=queryArr.join('&');
        return queryStr;
    }

    return ''
}
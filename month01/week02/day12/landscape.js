const isMountain = require('./isMountain.js');
const isValley = require('./isValley.js');

function landscape(arr){

    var mountain = isMountain(arr);
    if(mountain) return 'Mountain';

    var valley = isValley(arr);
    if(valley) return 'Valley';

    return 'Neither';
}

module.exports = landscape;
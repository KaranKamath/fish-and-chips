/**
 * Replace British English with American English
 *
 * @param {String} doc
 * @return {String}
 */
module.exports = {
    toAmerican: function(doc) {
        return String(doc)
            .replace('centre', 'center')
            .replace('colour', 'color');
    }
}

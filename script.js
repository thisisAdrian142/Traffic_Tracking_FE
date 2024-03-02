var stringMatcher = function(strs) {
    return function findMatcher(q, cb) {
        var matches, stringRegex;

        matches = [];
        stringRegex = new RegExp(q, 'i');
        $.each(strs, function(i, str) {
            if (stringRegex.test(str)) {
                matches.push(str);
            }
        });
        cb(matches);
    };
};

var suburbs = [
    'Alexandria',
    'Annandale',
    'Barangaroo',
    'Bondi',
    'Chippendale',
    'Coogee',
    'Darlinghurst',
    'Double Bay',
    'Glebe',
    'Haymarket',
    'Kings Cross',
    'Kirribilli',
    'Leichhardt',
    'Newtown',
    'Paddington',
    'Palm Beach',
    'Potts Point',
    'Pyrmont',
    'Redfern',
    'Rose Bay',
    'Surry Hills',
    'Sydney CBD',
    'The Rocks',
    'Ultimo',
    'Vaucluse',
    'Woolloomooloo'
];

$('#basic-bar .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
}, {
    name: 'suburbs',
    source: stringMatcher(suburbs) // This uses your stringMatcher function
});

module.exports.a = 10;

module.exports.db = {
    store: function() {
        console.log('store() inside db')
    },
    fetch: function() {
        console.log('fetch() inside db');
    }
}
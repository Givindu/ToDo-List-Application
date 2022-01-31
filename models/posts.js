const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    topic: {
        type: String,
        reuqired: true
    },
    description: {
        type: String,
        reuqired: true
    }

});

module.exports = mongoose.model('Posts', postSchema);
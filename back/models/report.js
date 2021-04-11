const mongoose = require('mongoose');

const reportSchema = mongoose.Schema({
	date: {type: Date, required: true },
	title: {type: String, required: true},
	report: {type: String, required: true}

});

module.exports = mongoose.model('report', reportSchema);
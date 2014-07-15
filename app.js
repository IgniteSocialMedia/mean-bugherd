'use strict';

var mean = require('meanio'),
	fs = require('fs'),
	appPath = process.cwd(),
	Module = mean.Module;

var MeanBugherd = new Module('mean-bugherd');

MeanBugherd.register(function(app, auth, database) {


	var template = fs.readFileSync(__dirname + '/template.js', 'utf8');
	
	var bhId = (mean.config)?mean.config.clean.bugherdId:(require(appPath + '/server/config/config').bugherdId)?require(appPath + '/server/config/config').bugherdId:false;

	if (bhId) MeanBugherd.aggregateAsset('js', template.replace('__BUGHERD_ID__', bhId));

	return MeanBugherd;
});

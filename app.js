'use strict';

var mean = require('meanio'),
	fs = require('fs'),
	Module = mean.Module;

var MeanBugherd = new Module('mean-bugherd');

MeanBugherd.register(function(app, auth, database) {


	var template = fs.readFileSync(__dirname + '/template.js', 'utf8');

	var bhId = mean.config.bugherdId;
	
	if(bhId){
	    MeanBugherd.aggregateAsset('js', template.replace('__BUGHERD_ID__', bhId), {
		group: 'footer',
		weight: -9999,
		inline: true
	    });
	}

	return MeanBugherd;
});

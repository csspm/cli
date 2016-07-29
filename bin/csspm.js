#!/usr/bin/env node

const csspm = require('../src');
const pkg = require('../package.json');
const prg = require('commander');

process.title = 'csspm';

prg
	.version('0.0.1');

prg
	.command('install')
	.alias('i')
	.action(function (env, options) {
		console.log(env, options);
	});

prg.parse(process.argv);

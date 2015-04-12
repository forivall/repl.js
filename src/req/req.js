


var req = module.exports = {};

req.local = function (path)
{
	return require(__dirname + '/../../node_modules/' + path);
}


var
	resolve = require('path').resolve,
	paths   = require('module')._nodeModulePaths

req.inRepl = function (repl)
{
	var
		context = repl.context,
		cmodule = context.module;

	/* @todo: check empty resolve */
	// cmodule.filename = resolve('file');
	cmodule.filename = resolve();
	cmodule.paths    = paths(cmodule.filename);
}


var
	parse = require('./parse');

req.process = function (argopts, console)
{
	var mods = argopts._;

	mods = mods.map(parse.build);
	mods = mods.map(parse.attempt);

	return mods;
}

req.extend = function (repl, mods)
{

}

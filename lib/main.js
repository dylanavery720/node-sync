var sync = require('./sync');
var sync2 = require('./sync2');

module.exports = {
	proc: sync,
	proc2: sync2.proc,
	implicit: sync2.implicit,
	letImplicit: sync2.letImplicit
};
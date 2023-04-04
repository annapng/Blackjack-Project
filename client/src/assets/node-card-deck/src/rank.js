//"use strict";

// export default class Rank {
// 	constructor(_shortName, _longName, _sortNum) {
// 		this.shortName = _shortName;
// 		this.longName = _longName;
// 		this.sortNum = _sortNum;

// 		Object.freeze(this);
// 	}
// }


module.exports = function Rank(shortName, longName, sortNum) {
	this.shortName = shortName;
	this.longName = longName;
	this.sortNum = sortNum;
}
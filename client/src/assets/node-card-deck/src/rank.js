//"use strict";

export default class Rank {
	constructor(_shortName, _longName, _sortNum) {
		this.shortName = _shortName;
		this.longName = _longName;
		this.sortNum = _sortNum;

		Object.freeze(this);
	}
}

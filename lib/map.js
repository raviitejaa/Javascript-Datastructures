var MapEntry=function(key,value){this.key=key;this.value=value;};
var Map = function(){
	this.entries=[];
	this.put=function(key,value){if(!this.hasKey(key)){this.entries.push(new MapEntry(key,value));}};
	this.hasKey=function(key){for(var i=0;i<this.entries.length;i++){if(this.entries[i].key===key){return true;}}return false;};
	this.get=function(key){for(var i=0;i<this.entries.length;i++){if(this.entries[i].key===key){return this.entries[i].value;}}	return undefined;};
	this.remove=function(key){for(var i=0;i<this.entries.length;i++){if(this.entries[i].key===key){this.entries.splice(i,1);return true;}}return false;};
	return this;
};
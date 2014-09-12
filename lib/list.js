var List=function(){
//backed up by array
	var list=[];//private variable
	this.add=function(ele){
		list.push(ele);
	},
	this.remove=function(ele){
		var removed=false;
		for(var i in list){
			if(list[i]===ele){
				list.splice(i,1);
				removed=true;
			}
		}
		return removed;
	},
	this.contains=function(ele){
		for(var i in list){
			if(list[i]==ele)
				return true;
		}
		return false;
	},
	this.count=function(ele){
		var count=0;
		for(var i in list){
			if(list[i]==ele)
				count++;
		}
		return count;
	},
	this.getAsArray=function(){
		return list;	
	},
	this.size=function(){
		return list.length;
	},
	this.get=function(index){
		return list[index];
	}
	
	return this;
}
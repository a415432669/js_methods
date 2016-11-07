//JSON对象长度和遍历方法
function getJsonObjLength(jsonObj){
		var length=0;
		for(var n in jsonObj){
			length++;
		}
		return length;
	}
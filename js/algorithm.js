

var alg=(function(){
	//模块的配置值
	var configMap={},
		stateMap={},//模块状态值
		initModule;
		
	initModule=function(arr,sort){
		switch(sort){
			case "bubble":
				return alg.bubbleSort(arr);
				break
		
			case "quick":
				return alg.quickSort(arr);
				break
			default:
				return "err";
		}
		
	}
	
	return {
		initModule:initModule
	}
}());


//冒泡排序
alg.bubbleSort=function(arr){
		var aLength=arr.length;
		for(var j=aLength;j>0;j--){
			for(var i=0;i<j;i++){
				if(arr[i]>arr[i+1]){
					var temp=arr[i];
					arr[i]=arr[i+1];
					arr[i+1]=temp;
				}
			}
		}
		return arr;
};

//快速排序
alg.quickSort=(function quickSort(arr){
	if(arr.length<=1){return arr;}
	var left=[],right=[],mid,vmid;
	mid=Math.floor(arr.length/2); 
	vmid=arr.splice(mid,1)[0];
	for(var i=0;i<arr.length;i++){
		if(arr[i]<vmid){
			left.push(arr[i]);
		}else{
			right.push(arr[i]);
		}
	}
	/*return alg.quickSort(left).concat([vmid],alg.quickSort(right));//concat方法用于连接两个或多个数组*/
	return quickSort(left).concat([vmid],quickSort(right))
});





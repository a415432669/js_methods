//堆排序
alg.heapSort=(function(){
	var h=[],//用来存放堆的数组
		n;//用来存储堆中元素的个数，也就是堆的大小
		//交换函数，交换堆中的两个元素值
		function swap(x,y){
			var t;
			t=h[x];
			h[x]=h[y];
			h[y]=t;
		}
		//向下调整函数
		function siftdown(i){
			//传入一个需要向下调整的节点编号i,这里传入1,即从堆的定点开始向下调整
			var flag=0,t;//flag用来标记是否需要继续向下调整
			//当i节点有儿子（其实至少有左儿子）并且需要继续调整的时候循环执行
			while(i*2<=n&&flag===0){
				//首先判断它和左儿子的关系，并用t记录较小的节点编号
				var leftChildIndex=i*2+1,
					rightChildIndex=i*2+2;
				if(h[i]>h[leftChildIndex]){
					t=leftChildIndex;
				}else{
					t=i;
				}
				//如果它有右儿子，在对右儿子进行讨论
				if(rightChildIndex){
					//如果右儿子的值更小，更新较小的节点编号
					if(h[t]>h[rightChildIndex]){
						t=rightChildIndex;
					}
				}
				//如果发现最小的节点编号不是自己，说明子节点中有比父节点你更小的
				if(t!==i){
					swap(t,i);//交换他们
					i=t;//更新i为刚才与他交换的儿子节点编号，便于接下来继续向下调整
				}else{
					flag=1
				}
			}
		}
		
		//建立堆的函数
		function create(){
			var i;
			//从最后1个非叶节点到第一个接待你一次进行向上调整
			for(i=n/2;i>=0;i--){
				siftdown(i);
			}
			console.error(h);
		}
		
		//删除最大的元素
		function deleteMax(){
			var t;
			t=h[0];//用一个临时变量记录堆定点的值
			console.info(t);
			h[0]=h[n];//将堆最后一个点赋值到堆顶
			n--;//堆的元素数减1
			siftdown(0);//向下调整(相当于重建堆)
			return t;
		}
		function sort(ary){
			h=ary;
			var num=ary.length,i;
			n=num-1;
			//建堆
			create();
			var sorteAry=[];
			for(i=0;i<=num;i++){
				sorteAry.push(deleteMax());
			}
			return sorteAry;
		}
		
		console.log(sort([5,36,7,22,17,46]));
		
		
}());

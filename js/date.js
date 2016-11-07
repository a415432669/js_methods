/*获取时间的函数，里面用到了js的Date对象。了解Date对象的方法与属性*/
function getTime(){
				var ctime=new Date()
				/*Date对象的属性
				 * constructor：返回对创建此对象的函数引用
				 * prototype：使您有能力向对象添加属性和方法*/
				console.log('constructor:'+ctime.constructor);
				/*console.log(ctime.prototype)*/
				var y=ctime.getFullYear();
				var month=ctime.getMonth()+1;
				var d=ctime.getDate();
				var h=ctime.getHours();
				var m=ctime.getMinutes();
				var s=ctime.getSeconds();
				var str=y+'-'+month+'-'+d+' '+h+':'+m+':'+s;
				return str;
				/*
				Date()	返回当日的日期和时间。
				getDate()	从 Date 对象返回一个月中的某一天 (1 ~ 31)。
				getDay()	从 Date 对象返回一周中的某一天 (0 ~ 6)。
				getMonth()	从 Date 对象返回月份 (0 ~ 11)。
				getFullYear()	从 Date 对象以四位数字返回年份。
				getHours()	返回 Date 对象的小时 (0 ~ 23)。
				getMinutes()	返回 Date 对象的分钟 (0 ~ 59)。
				getSeconds()	返回 Date 对象的秒数 (0 ~ 59)。
				getMilliseconds()	返回 Date 对象的毫秒(0 ~ 999)。
				getTime()	返回 1970 年 1 月 1 日至今的毫秒数。
				*/
			}
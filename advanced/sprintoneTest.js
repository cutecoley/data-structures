
var loadQ = function (count)
{
	var queuestartTime = new Date().getTime();
	console.log('qStartTime: ', queuestartTime)
	var queue= new Queue();

	for  (var i=0; i<count; i++) {
		queue.enqueue(i);
	}
	var enqueueLoadtime = new Date().getTime(); 
	console.log('qEnQTime: ', enqueueLoadtime);//Now we have time taken to load n elements
	var maxSize = queue.size();

	for  (var i=0; i<count; i++) {
		queue.dequeue(i);
	}
	var dequeueLoadtime = new Date().getTime(); //Now we have time taken to load n elements
	console.log('qDqTime: ', dequeueLoadtime);
	return ({ 'timeToQ': enqueueLoadtime - queuestartTime,
			  'timeToDQ': dequeueLoadtime - enqueueLoadtime,
			  'QmaxSize': maxSize });
	
}


var loadStack = function (count)
{
	var stackstartTime = new Date().getTime();
	console.log('stackStartTime: ', stackstartTime)
	var stack= new Stack();

	for  (var i=0; i<count; i++) {
		stack.push(i);
	}
	var maxSize = stack.size();
	var stackPushtime = new Date().getTime(); //Now we have time taken to load n elements
	console.log('stackPushTime: ', stackPushtime);
	for  (var i=0; i<count; i++) {
		stack.pop(i);
	}
	var stackPoptime = new Date().getTime(); //Now we have time taken to load n elements
	console.log('stackPushTime: ', stackPoptime);
	return ({ 'timeToPush': stackPushtime - stackstartTime,
			  'timeToPop': stackPoptime - stackPushtime,
			  'stackSize': maxSize });
	
}

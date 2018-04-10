function getFibber(n) {
	var fibber = [];
	for(var i=0;i<len;i++){
		if(i<2){
			fibber.push(i);
		} else {
			fibber.push(fibber[i-2]+fibber[i-1]);
		}
	}
	return fibber;
}

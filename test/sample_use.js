var rendezvous = require("../index");
var s1count = 0;
var s2count = 0;
var s3count = 0;
var s4count = 0;

for (i = 1; i < 1000000; i++) {
	//console.log(rendezvous.select("key"+i, [{"shardId": "s1"}, {"shardId": "s2"}, {"shardId": "s3"}, {"shardId": "s4"}]).shardId);
	switch (rendezvous.select("key"+i, [{"shardId": "s1"}, {"shardId": "s2"}, {"shardId": "s3"}, {"shardId": "s4"}]).shardId) {
	    case "s1":
			s1count++;
	        break;
	    case "s2":
	        s2count++;
	        break;
	    case "s3":
	        s3count++;
	        break;
		case "s4":
	        s4count++;
	        break;
	    default:
	        console.log("No shard selected");;
	}
}

console.log("s1 = "+ s1count);
console.log("s2 = "+ s2count);
console.log("s3 = "+ s3count);
console.log("s4 = "+ s3count);
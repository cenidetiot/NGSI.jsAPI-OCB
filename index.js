var ngsi = require('./lib/NGSI.js');

/*
console.log("*************************parserEntity**************************************\n")

console.log(ngsi.parseEntity({
		id : "Room",
		type : "Room1",
		temperature : {
			value : 50 ,
			metadata : {
				frecuency: 40,
				scale: 'Celsious'
			}
		},
		dateStamp : new Date(),
		json : {
			ok : 40
		},
		location : {
			value :[ 0, 0],
			type: "geo:point"
		}

	}))

console.log("****************  parseAttrs Example ***********************************\n")
console.log(ngsi.parseAttrs({
	temperature : { 
		value : 50,
		metadata :{
			frecuency : 50, 
			scale: 'Fahrenheit'   
		} 
	}
})) 

console.log("*******************parseValue Example ********************\n")

console.log(ngsi.parseValue({ ok : 20}))

*/




let coords = [
[
18.879751306118546,
-99.22197723761204
],
[
18.87991373199594,
-99.22199869528413
],
[
18.87996449005033,
-99.22190750017762
],
[
18.879984793267777,
-99.2218270339072
],
[
18.879939111025056,
-99.22174656763676
],
[
18.879893428769883,
-99.22165537253022
],
[
18.87973100287282,
-99.22145152464509
],
[
18.8795888800837,
-99.22130132094026
],
[
18.879390923140832,
-99.221076015383
],
[
18.87928940666914,
-99.22097945585847
],
[
18.87893917436966,
-99.22117793932557
],
[
18.87856356210443,
-99.22121012583375
],
[
18.878675230703656,
-99.22134960070255
],
[
18.878776747547473,
-99.22145152464509
],
[
18.87888841600463,
-99.22154808416965
],
[
18.87903053938793,
-99.22144079580903
],
[
18.879203117619838,
-99.22140860930085
],
[
18.87936554402868,
-99.22153199091554
],
[
18.87948228791276,
-99.22165537253022
],
[
18.879614259162025,
-99.22181630507114
],
[
18.879751306118546,
-99.22197723761204
]
]

let query = ngsi.createQuery({
	id: ".*",
	type: "Device",
	georel : "coveredBy",
	owner: "Id owner",
	geometry:"polygon",
	coords : coords,
	options: "keyValues"
})
console.log(query)


function showCharts(Data) {
	console.log("displayCharts.js - showCharts");
	if(dweetio == null){
		console.log("dweetio is null...");
	}
  dweetio.get_all_dweets_for('TimSensors', function(err, dweets){
	console.log(err);
	
	var sound = createChart('TimSensors', 'Sound', 'Sound_Level', 'Sound measured', 'Sound in Decibels', 'column', 'container1', dweets);
    LocalData(sound, Data);
  
    var Temperature = createChart ('TimSensors', 'Temperature', 'Temperature_Level', 'Temperature measured', 'Temperature in Centigrade', 'column', 'container2', dweets);
  
    var Humidity = createChart ('TimSensors', 'Humidity', 'Humidity_Level', 'Humidity measured', 'Humidity in Percentage', 'column', 'container3', dweets);
  
  });
}  

 
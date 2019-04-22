function LocalData(sound, Data) {
	console.log("LocalData - LocalData called");
  arrayUnder100(Data.Sound_LevelData);

  console.log("time to add the records to data...");
  addRecords(sound, Data.Sound_LevelData);

  console.log("DAT: " + JSON.stringify(Data));
  window.localStorage.setItem('Data', JSON.stringify(Data));
}


function arrayUnder100(array) {
  while(array.length > 95) {
    array.splice(0, 1);
  }
}

function addRecords(records, data) {
  for (var i = 0; i < records.length; i += 1) {
	  console.log("addRecords - adding record " + (i+1) + "of " + records.length);
    data.push(records[i]);
  }
}



function LocalDataT(temperature, Data) {
	console.log("LocalData - LocalData called");
  arrayUnder100(Data.Temperature_LevelData);

  console.log("time to add the records to data...");
  addRecords(sound, Data.Temperature_LevelData_LevelData);

  console.log("DATA: " + JSON.stringify(Data));
  window.localStorage.setItem('Data', JSON.stringify(Data));
} 


function arrayUnder100(array) {
  while(array.length > 95) {
    array.splice(0, 1);
  }
} 

function addRecords(records, data) {
  for (var j = 0; i < records.length; j += 1) {
	  console.log("addRecords - adding record " + (j+1) + "of " + records.length);
    data.push(records[j]);
  }
} 



function LocalDataH(humidity, Data) {
	console.log("LocalData - LocalData called");
  arrayUnder100(Data.Temperature_LevelData);

  console.log("time to add the records to data...");
  addRecords(sound, Data.Humidity_LevelData_LevelData);

  console.log("DATA: " + JSON.stringify(Data));
  window.localStorage.setItem('Data', JSON.stringify(Data));
} 


function arrayUnder100(array) {
  while(array.length > 95) {
    array.splice(0, 1);
  }
} 

function addRecords(records, data) {
  for (var k = 0; i < records.length; k += 1) {
	  console.log("addRecords - adding record " + (k+1) + "of " + records.length);
    data.push(records[k]);
  }

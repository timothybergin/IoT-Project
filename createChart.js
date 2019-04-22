
function createChartOne(dweetId, chartTitle, contentType, seriesTitle, yAxisTitle, chartType, id, dweets) {  
	console.log("createChart - " + chartTitle);
    var data = []
    var location = '#'+id+''

array_for_cats = []
	var name = dweetId
	
   var chart = {
      type: 'spline',
	  backgroundColor: '#697c9b',
	  animation: Highcharts.svg, // don't animate in IE < IE 10.
      marginRight: 10,
   };
   var title = {
      text: Sound   
   };   
   var xAxis = {
      type: 'datetime',
      tickPixelInterval: 50
   };
   var yAxis = {
      title: {
		// color: #c11d15,
         text: Time
      },
      plotLines: [{
         value: 1,
         width: 3,
        // color: '#c11d15'
      }]
   };
   var tooltip = {
      formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
         Highcharts.dateFormat('%H:%M:%S', this.x) + '<br/>' +
         Highcharts.numberFormat(this.y, 1);
      }
   };
   
   
    var plotOptions = {
      area: {
         pointStart: 1940,
         marker: {
            enabled: true,
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };
   var legend = {
	   
      enabled: true
   };
   var exporting = {
      enabled: true
   };


   var series = []

	    for(theDweet in dweets.reverse())
	    {
	        var dweet = dweets[theDweet];
			console.log("DWEET: " + dweet);
	        val = dweet.content[contentType]
			data.push(parseInt(val))
			array_for_cats.push(dweet.created)
	    }
		
		series= [{
		  color: '#0fcadb',
	      name: Temperature_Graph,
	      data: Temperature    
	    }]

	   var json = {};   
	   json.chart = chart; 
	   json.title = title;     
	   json.tooltip = tooltip;
	   json.xAxis = xAxis;
	   json.yAxis = yAxis; 
	   json.legend = legend;  
	   json.exporting = exporting;   
	   json.series = series;
	   json.plotOptions = plotOptions;


	   Highcharts.setOptions({
	      global: {
	         useUTC: false
	      }
	   });
	   $(location).highcharts(json);
		chart = $(location).highcharts()
		chart.xAxis[0].update({categories: array_for_cats}, true);

	
	dweetio.listen_for(name, function(dweet){
			console.log("dweetio - listener");
	        val = dweet.content[contentType]
			var chart = $('.'+id+'').highcharts();
			chart.series[0].addPoint(parseInt(val));  
			array_for_cats.push(dweet.created) 
			chart.xAxis[0].update({categories: array_for_cats}, true);
	});
        return data;
} 

function createChartTwo(dweetId, chartTitle, contentType, seriesTitle, yAxisTitle, chartType, id, dweets) {  
	console.log("createChart - " + chartTitle);
    var data = []
    var location = '#'+id+''

array_for_cats = []
	var name = dweetId
	
   var chart = {
      type: chartType,
	  backgroundColor: '#697c9b',
	  animation: Highcharts.svg, // don't animate in IE < IE 10.
      marginRight: 10,
   };
   var title = {
      text: chartTitle   
   };   
   var xAxis = {
      type: 'datetime',
      tickPixelInterval: 50
   };
   var yAxis = {
      title: {
		// color: #c11d15,
         text: yAxisTitle
      },
      plotLines: [{
         value: 1,
         width: 3,
        // color: '#c11d15'
      }]
   };
   var tooltip = {
      formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
         Highcharts.dateFormat('%H:%M:%S', this.x) + '<br/>' +
         Highcharts.numberFormat(this.y, 1);
      }
   };
   
   
    var plotOptions = {
      area: {
         pointStart: 1940,
         marker: {
            enabled: true,
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };
   var legend = {
	   
      enabled: true
   };
   var exporting = {
      enabled: true
   };


   var series = []

	    for(theDweet in dweets.reverse())
	    {
	        var dweet = dweets[theDweet];
			console.log("DWEET: " + dweet);
	        val = dweet.content[contentType]
			data.push(parseInt(val))
			array_for_cats.push(dweet.created)
	    }
		
		series= [{
		  color: '#0fcadb',
	      name: seriesTitle,
	      data: data   
	    }]

	   var json = {};   
	   json.chart = chart; 
	   json.title = title;     
	   json.tooltip = tooltip;
	   json.xAxis = xAxis;
	   json.yAxis = yAxis; 
	   json.legend = legend;  
	   json.exporting = exporting;   
	   json.series = series;
	   json.plotOptions = plotOptions; 
	   
	 Highcharts.setOptions({
	      global: {
	         useUTC: false
	      }
	   });
	   $(location).highcharts(json);
		chart = $(location).highcharts()
		chart.xAxis[0].update({categories: array_for_cats}, true);

	
	dweetio.listen_for(name, function(dweet){
			console.log("dweetio - listener");
	        val = dweet.content[contentType]
			var chart = $('.'+id+'').highcharts();
			chart.series[0].addPoint(parseInt(val));  
			array_for_cats.push(dweet.created) 
			chart.xAxis[0].update({categories: array_for_cats}, true);
	});
        return data;
}  

function createChartOne(dweetId, chartTitle, contentType, seriesTitle, yAxisTitle, chartType, id, dweets) {  
	console.log("createChart - " + chartTitle);
    var data = []
    var location = '#'+id+''

array_for_cats = []
	var name = dweetId
	
   var chart = {
      type: chartType,
	  backgroundColor: '#697c9b',
	  animation: Highcharts.svg, // don't animate in IE < IE 10.
      marginRight: 10,
   };
   var title = {
      text: chartTitle   
   };   
   var xAxis = {
      type: 'datetime',
      tickPixelInterval: 50
   };
   var yAxis = {
      title: {
		// color: #c11d15,
         text: yAxisTitle
      },
      plotLines: [{
         value: 1,
         width: 3,
        // color: '#c11d15'
      }]
   };
   var tooltip = {
      formatter: function () {
      return '<b>' + this.series.name + '</b><br/>' +
         Highcharts.dateFormat('%H:%M:%S', this.x) + '<br/>' +
         Highcharts.numberFormat(this.y, 1);
      }
   };
   
   
    var plotOptions = {
      area: {
         pointStart: 1940,
         marker: {
            enabled: true,
            symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)',
            radius: 2,
            states: {
               hover: {
                 enabled: true
               }
            }
         }
      }
   };
   var legend = {
	   
      enabled: true
   };
   var exporting = {
      enabled: true
   };


   var series = []

	    for(theDweet in dweets.reverse())
	    {
	        var dweet = dweets[theDweet];
			console.log("DWEET: " + dweet);
	        val = dweet.content[contentType]
			data.push(parseInt(val))
			array_for_cats.push(dweet.created)
	    }
		
		series= [{
		  color: '#0fcadb',
	      name: seriesTitle,
	      data: data   
	    }]

	   var json = {};   
	   json.chart = chart; 
	   json.title = title;     
	   json.tooltip = tooltip;
	   json.xAxis = xAxis;
	   json.yAxis = yAxis; 
	   json.legend = legend;  
	   json.exporting = exporting;   
	   json.series = series;
	   json.plotOptions = plotOptions; 
	   
	 Highcharts.setOptions({
	      global: {
	         useUTC: false
	      }
	   });
	   $(location).highcharts(json);
		chart = $(location).highcharts()
		chart.xAxis[0].update({categories: array_for_cats}, true);

	
	dweetio.listen_for(name, function(dweet){
			console.log("dweetio - listener");
	        val = dweet.content[contentType]
			var chart = $('.'+id+'').highcharts();
			chart.series[0].addPoint(parseInt(val));  
			array_for_cats.push(dweet.created) 
			chart.xAxis[0].update({categories: array_for_cats}, true);
	});
        return data;
} 
require(["esri/Map",
    "esri/views/MapView",
    "esri/widgets/BasemapGallery",
    "esri/config",
    "esri/WebMap",
    "esri/layers/FeatureLayer"
],
    function (Map, MapView, BasemapGallery, esriConfig, WebMap, FeatureLayer) {
         esriConfig.portalUrl = "https://itimansora.maps.arcgis.com"

         /*var webmap = new WebMap({
             portalItem: { // autocasts as new PortalItem()
                 id: "2978fe7940414c849c5080e51f36cb73"
             }
         });

        var popup = {
            title: "{CITY_NAME}",
            content: `<p style="color: red; font-size: larger;">{POP_RANK}</p>`
        }
        var renderer = {
            type: "class-breaks",
            // attribute of interest - Earthquake magnitude
            field: "POP_RANK",
            classBreakInfos: [{
                minValue: 0,  // 0 acres
                maxValue: 2,  // 200,000 acres
                symbol: {
                    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    style: "square",
                    color: "blue",
                    size: "15px",  // pixels
                    outline: {  // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 0],
                        width: 3  // points
                    } // will be assigned sym1
                }
            },
            {
                minValue: 2.1,  // 0 acres
                maxValue: 5,  // 200,000 acres
                symbol: {
                    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    style: "square",
                    color: "red",
                    size: "15px",  // pixels
                    outline: {  // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 0],
                        width: 3  // points
                    } // will be assigned sym1
                }

            },
            {
                minValue: 5.1,  // 0 acres
                maxValue: 8,  // 200,000 acres
                symbol: {
                    type: "simple-marker",  // autocasts as new SimpleMarkerSymbol()
                    style: "square",
                    color: "black",
                    size: "15px",  // pixels
                    outline: {  // autocasts as new SimpleLineSymbol()
                        color: [255, 255, 0],
                        width: 3  // points
                    } // will be assigned sym1
                }

            }]
        };



        const layer = new FeatureLayer({
            // URL to the service
            url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/ArcGIS/rest/services/world_cities/FeatureServer/0",
            popupTemplate: popup,
            definitionExpression: "CNTRY_NAME ='Egypt'",
            renderer: renderer
        });

        var myMap = new Map(
            {
                basemap: "topo",
                layers: [layer]
            }
        )
        var myview = new MapView({
            map: myMap,
            container: "itimap",
            center: [55, 30],
            zoom: 5
        })
        layer.when(function(){
            return layer.queryExtent()
        }).then(function(response){
            console.log(response)
            myview.goTo(response.extent,{
                duration:5000
            })

        })

        layer.on("layerview-create", function(event){
            // The LayerView for the layer that emitted this event
            console.log(event);
          });*/

       
         var gallery = new BasemapGallery({
             view: myview,
         })
         layer.when(function () {

             return layer.queryExtent();
         })
             .then(function (response) {
                 myview.goTo(response.extent);
                
              });

         myview.ui.add(gallery, "top-right")

         myview.on("click", function (event) {
             alert("welcome")
             console.log(event)
             myview.goTo(event.mapPoint)
         })


        
    });
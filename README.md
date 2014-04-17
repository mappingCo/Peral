Peral
=====


* terrain model with 3d buildings

http://mappingco.github.io/Peral/terrain_model/peral.html

![terrain](http://mappingco.github.io/Peral/terrain_model/terrain.png)


* terrain model with 'parcelas'

http://mappingco.github.io/Peral/terrain_model/peral_parcelas.html

![parcelas](http://mappingco.github.io/Peral/terrain_model/parcelas.png)

* osmbuildings in 3D:

http://mappingco.github.io/Peral/OSMbuildings/v1/

![osmbuildings1](http://mappingco.github.io/Peral/OSMbuildings/v1/osmbuildings1.png)

* buildings of interest in 3D:

http://mappingco.github.io/Peral/OSMbuildings/v2/

![osmbuildings2](http://mappingco.github.io/Peral/OSMbuildings/v2/osmbuildings2.png)

* Personalized osmbuildings :

http://mappingco.github.io/Peral/OSMbuildings/v3/

![osmbuildings3](http://mappingco.github.io/Peral/OSMbuildings/v3/osmbuildings3.png)


This examples use the OSMBuildings-Leaflet.js lib [http://osmbuildings.org/]

```javascript
var map = new L.Map('map').setView([41, -4], 17);
var osmb = new OSMBuildings(map).loadData();
L.control.layers({}, { Buildings:osmb }).addTo(map); // add to layer switcher (optional)
```
this library uses 3D osm tags: http://wiki.openstreetmap.org/wiki/Simple_3D_Buildings
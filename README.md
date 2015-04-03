Peral
=====


* terrain model with 3d buildings

http://sigon426.github.io/Peral/terrain_model/peral.html

![terrain](http://sigon426.github.io/Peral/terrain_model/terrain.png)


* terrain model with 'parcelas'

http://sigon426.github.io/Peral/terrain_model/peral_parcelas.html

![parcelas](http://sigon426.github.io/Peral/terrain_model/parcelas.png)

* Parcelas SIGPAC

http://sigon426.github.io/Peral/Sigpac/

![parcelas](http://sigon426.github.io/Peral/Sigpac/sigpac.png)

* osmbuildings in 3D:

http://sigon426.github.io/Peral/OSMbuildings/v1/

![osmbuildings1](http://sigon426.github.io/Peral/OSMbuildings/v1/osmbuildings1.png)

* buildings of interest in 3D:

http://sigon426.github.io/Peral/OSMbuildings/v2/

![osmbuildings2](http://sigon426.github.io/Peral/OSMbuildings/v2/osmbuildings2.png)

* Personalized osmbuildings :

http://sigon426.github.io/Peral/OSMbuildings/v3/

![osmbuildings3](http://sigon426.github.io/Peral/OSMbuildings/v3/osmbuildings3.png)

* OSMbuildings with actual date/time for shadow projection:

http://sigon426.github.io/Peral/OSMbuildings/v4/

![osmbuildingsv4](http://sigon426.github.io/Peral/OSMbuildings/v4/osmbuildings4.png)



This examples use the OSMBuildings-Leaflet.js lib [http://osmbuildings.org/]

```javascript
var map = new L.Map('map').setView([41, -4], 17);
var osmb = new OSMBuildings(map).loadData();
L.control.layers({}, { Buildings:osmb }).addTo(map); // add to layer switcher (optional)
```
this library uses 3D osm tags: http://wiki.openstreetmap.org/wiki/Simple_3D_Buildings


* Swiping between two layers to compare 1956/now orthophotos

http://sigon426.github.io/Peral/historico/swipelayers.html

![swipe](http://sigon426.github.io/Peral/historico/swipe.png)
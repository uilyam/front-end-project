import { Component, OnInit, ElementRef, Input } from '@angular/core';
import { ITruck } from 'src/app/interfaces/truck.interface';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() trucks: ITruck[];

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    const geojson = this.transform(this.trucks);
    const mapbox = (window as any).mapboxgl;
    mapbox.accessToken = environment.mapbox.accessToken;
    const map = new mapbox.Map({
      container: this.element.nativeElement,
      style: 'mapbox://styles/wpf8741/cjvohbxwp0dhw1crr7bffeqsg',
      center: [-80.84301, 35.22723], // charlotte
      zoom: 12
    });

    geojson.features.forEach((marker) => {

      // create a HTML element for each feature
      const el = document.createElement('div');
      el.className = 'marker';

      // make a marker for each feature and add to the map
      new mapbox.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(
          new mapbox.Popup({ offset: 25 }) // add popups
          .setHTML(`
            <h3>${marker.properties.title}</h3>
            <a href="${marker.properties.link}" target="_blank">
              <img src="${marker.properties.description}" height="100%" width="100%"/>
            </a>
            `
          )
        )
        .addTo(map);
    });
  }

  transform(trucks: ITruck[]) {
    return {
      type: 'FeatureCollection',
      features: trucks.map(truck => {
        return {
          type: 'Feature',
          geometry: {
            type: 'Point',
            coordinates: [
              truck.coordinates.longitude,
              truck.coordinates.latitude
            ]
          },
          properties: {
            title: truck.name,
            description: truck.image_url,
            link: truck.url
          }
        };
      })
    };
  }
}

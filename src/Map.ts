export class Map {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 6,
      center: { 
        lat: 0, 
        lng: 0
      }
    });    
  }

  public addMarker() {

  }

}
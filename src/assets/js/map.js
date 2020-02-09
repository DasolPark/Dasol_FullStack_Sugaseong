const naverMap = document.querySelector('#map');

if (naverMap) {
  const mapOptions = {
    center: new naver.maps.LatLng(37.37363280609266, 126.96297172924932),
    zoom: 18
  };

  const map = new naver.maps.Map('map', mapOptions);

  const marker = new naver.maps.Marker({
    position: new naver.maps.LatLng(37.37363280609266, 126.96297172924932),
    map: map
  });
}

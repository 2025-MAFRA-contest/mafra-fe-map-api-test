namespace kakao {
  namespace maps {
    namespace event {
      type EventTarget = kakao.maps.Map | kakao.maps.Marker;

      function addListener(target:EventTarget, type:stirng, handler:function): void;
      function removeListener(target:EventTarget, type:stirng, handler:function): void;
      function trigger(target:EventTarget, type:stirng, data:unknown): void;
      function preventMap(): void;

      interface MouseEvent {
        latLng: kakao.maps.LatLng;
        point: kakao.maps.Point;
      }
    }
  }
}

// 카카오맵 api 관련 타입 정의

declare namespace kakao {
  namespace maps {
    enum MapTypeId {
      ROADMAP, 
      SKYVIEW, 
      HYBRID
    }

    // 좌표
    class LatLng {
      constructor(latitude: number, longitude: number);

      getLat(): number;
      getLng(): number;
    }

    // 지도 옵션
    // ? === 필수 아님
    interface MapOptions {
      center: LatLng;
      level?: number;
      mapTypeId?: MapTypeId;
      draggalbe?: boolean;
      scrollwheel?: boolean;
      disableDoubleClick?: boolean;
      disableDoubleClickZoom?: boolean;
      projectionId?: string;
      tileAnimation?: boolean;
      keyboardShortcuts?: boolean;
      speed?: number;
    }

    // 지도
    class Map {
      constructor(container: HTMLElement, options: MapOptions);
      setCenter(center: LatLng): void;
      setLevel(level: number): void;

      // 컨트롤러 추가
      addControl(control: MapTypeControl | ZoomControl, position: ControlPosition): void;
    }

     // 컨트롤러
    const ControlPosition: {
      TOP: number;
      TOPLEFT: number;
      TOPRIGHT: number;
      LEFT: number;
      RIGHT: number;
      BOTTOM: number;
      BOTTOMLEFT: number;
      BOTTOMRIGHT: number;
    }

    class MapTypeControl {
      constructor();
    }
    
    class ZoomControl {
      constructor();
    }
    

    // 지도 로드
    function load(callback: () => void): void;
  }
}

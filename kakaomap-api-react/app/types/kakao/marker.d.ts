namespace kakao {
  namespace maps {

    // 크기
    class Size {
      constructor(width: number, height: number);
    }

    // 마커 이미지 옵션
    interface MarkerImageOptions {
      alt?: string;
      coords?: string;
      offset?: Point;
      shape?: string;
      spriteOrigin?: Point;
      spriteSize?: Size;
    }

    // 마커 이미지
    class MarkerImage {
      constructor(src: string, size: Size, options?: MarkerImageOptions);
    }

    // 지도 시점
    class Viewpoint {
      constructor(pan: number, tilt: number, zoom: number, panoId?: number);
    }

    // 지점
    class Point {
      constructor(x: number, y: number);
    }

    // 마커 옵션
    interface MarkerOptions {
      map?: Map | Roadview;
      position: LatLng | Viewpoint;
      image?: MarkerImage;
      title?: string;
      draggable?: boolean;
      clickable?: boolean;
      zIndex?: number;
      opacity?: number;
      range?: number;
    }

    // 마커
    class Marker {
      constructor(options: MakerOptions);

      setMap(map_or_roadview: Map | Roadview | null): void;
      getMap(): Map;

      setImage(image: MarkerImage): void;
      getImage(): MarkerImage;

      setPosition(position: LatLng | Viewpoint): void;
      getPosition(): LatLng;

      setZIndex(zIndex: number): void;
      getZIndex(): number;

      setVisible(visible: boolean): void;
      getVisible(): boolean;

      setTitle(title: string): void;
      getTitle(): string;

      setDraggable(draggable: boolean): void;
      getDraggable(): boolean;

      setClickable(clickable: boolean): void;
      getClickable(): boolean;

      setAltitude(altitude: number): void;
      getAltitude(): number;

      setRange(range: number): void;
      getRange(): number;

      setOpacity(opacity: number): void;
      getOpacity(): number;
    }
  }
}

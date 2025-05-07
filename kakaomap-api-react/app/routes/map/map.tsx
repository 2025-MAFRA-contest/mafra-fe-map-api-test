import { useEffect, useRef } from 'react';
import createMarker from './marker';
import createController from './controller';

export default function Map() {
	const mapContainer = useRef<HTMLDivElement>(null);
	const map = useRef<kakao.maps.Map | null>(null);

	// 지도 생성
	const loadMap = () => {
		const container = mapContainer.current;
		const options = {
			center: new window.kakao.maps.LatLng(37.566826, 126.978656),
			level: 3,
			mapTypeId: window.kakao.maps.MapTypeId.SKYVIEW,
		};
		if (!container) {
			console.error('container is null');
			return;
		}
		map.current = new window.kakao.maps.Map(container, options);
		createController(map.current);
		createMarker(map.current);
	};

	// 카카오맵 스크립트 동적 로딩
	const loadScript = () => {
		if (document.querySelector('script[src*="dapi.kakao.com"]')) {
			// 이미 스크립트가 있으면 바로 loadMap
			if (window.kakao && window.kakao.maps) {
				loadMap();
			} else {
				window.kakao.maps.load(() => loadMap());
			}
			return;
		}
		const script = document.createElement('script');
		script.src =
			`//dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_API_KEY}&autoload=false`;
		script.onload = () => {
			window.kakao.maps.load(() => {
				loadMap();
			});
		};
		document.head.appendChild(script);
	};

	useEffect(() => {
		if (window.kakao && window.kakao.maps) {
			loadMap();
		} else {
			loadScript();
		}
	}, []);

	return (
		<div>
			<h2>카카오맵</h2>
			<div id="map" ref={mapContainer} style={styles.map}></div>
		</div>
	);
}
const styles = {
	map: {
		width: '100%',
		height: '500px'
	}
}
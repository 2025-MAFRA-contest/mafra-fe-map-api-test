import { useEffect } from 'react'

export default function Map() {
  useEffect(() => {
    // 1. Kakao Maps SDK script 동적 삽입
    const script = document.createElement('script')
    script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=4ac8562be32bab2925b55e6f78cf46de&autoload=false'
    script.async = true

    script.onload = () => {
      // 2. SDK 로드 후 지도 생성
      window.kakao.maps.load(() => {
        const container = document.getElementById('map') // 지도 표시할 div 요소
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울 좌표
          level: 3 // 확대 레벨 (1: 최대 확대, 숫자 커질수록 축소)
        }
		if(container){
			const map = new window.kakao.maps.Map(container, options) // 지도 객체 생성

			// 지도 타입 컨트롤 (일반 / 스카이뷰 전환 버튼)
			const mapTypeControl = new window.kakao.maps.MapTypeControl()
			map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT)

			// 줌 인/아웃 컨트롤
			const zoomControl = new window.kakao.maps.ZoomControl()
			map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)

			 // 마커를 표시할 위치 배열
			const positions = [
				{name: "서울 시청", lat:37.5665, lng: 126.9780},
				{name: "부산역", lat:35.1151, lng: 129.0415},
				{name: "광주역", lat: 35.1601, lng:126.8514},
			];

			// 각 위치마다 마커와 InfoWindow 생성
			positions.forEach(pos => {
				const marker = new window.kakao.maps.Marker({
					position:new window.kakao.maps.LatLng(pos.lat, pos.lng),
					map:map,
				});

				const infowindow = new window.kakao.maps.InfoWindow({
					content: `<div style="padding:8px 12px; font-size:14px; color:black;">📍 ${pos.name}</div>`,
				  });		

				// 마커 클릭 시 InfoWindow 열기
				window.kakao.maps.event.addListener(marker, 'click', () => {
					const position = marker.getPosition();
					console.log(`${pos.name} 위치:`, position.getLat(), position.getLng());
					
					infowindow.open(map, marker);
				});
			});
		}
      });
    }

	// script 태그를 <head>에 추가
    document.head.appendChild(script)
  }, [])

	return (
		<div>
			<h2>카카오맵</h2>
			<div id="map" style={styles.map}></div>
		</div>
	);
}
const styles = {
	map: {
		width: '100%',
		height: '500px'
	}
}
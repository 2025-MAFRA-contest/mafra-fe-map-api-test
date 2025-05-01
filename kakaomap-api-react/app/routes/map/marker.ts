const createMarker = (map: kakao.maps.Map | null) => {
    if (!map) return;

    // 마커 등록
    const markers = [
        {
            title: '서울시청',
            position: new kakao.maps.LatLng(37.566826, 126.978656),
        },
        {
            title: '남산타워',
            position: new kakao.maps.LatLng(37.5511694, 126.9882266),
        },
        {
            title: '경복궁',
            position: new kakao.maps.LatLng(37.579617, 126.977041),
        },
    ];

    markers.forEach((thisOption: kakao.maps.MarkerOptions) => {
        const thisMarker = new kakao.maps.Marker(thisOption);
        thisMarker.setMap(map);
        kakao.maps.event.addListener(thisMarker, 'click', () => {
            const latlng = thisMarker.getPosition();
            alert(`현재 클릭한 위치: 위도 ${latlng.getLat()}, 경도 ${latlng.getLng()}`);
        });
    });
};

export default createMarker;

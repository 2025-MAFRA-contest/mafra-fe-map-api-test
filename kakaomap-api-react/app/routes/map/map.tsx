import React, { useEffect } from 'react';
import { loadKakaoSdk } from "~/hooks/loadKakaoSdk";

export default function Map() {
	useEffect(() => {
		(async () => {
			await loadKakaoSdk();

			const kakao = (window as any).kakao;
			console.log("✅ window.kakao:", kakao);

			const container = document.getElementById('map');
			const options = {
				center: new kakao.maps.LatLng(37.5665, 126.9780),
				level: 3,
			};

			if (container) {
				new kakao.maps.Map(container, options);
			}
		})();
	}, []);

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
};

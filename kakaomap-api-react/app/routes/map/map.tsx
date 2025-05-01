export default function Map() {
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
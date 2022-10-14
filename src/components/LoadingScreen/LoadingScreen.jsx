import { PixelSpinner } from "react-epic-spinners";

import "./LoadingScreen.css";

const LoadingScreen = () => {
	return (
		<section className="loading-container">
			<article className="loading-box">
				<h2>Cargando...</h2>
				<PixelSpinner color="#000" />
			</article>
		</section>
	);
}

export default LoadingScreen;
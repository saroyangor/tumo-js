import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

import Sidebar from '../components/Sidebar.tsx';
import MainInfo from '../components/MainInfo.tsx';

const HomePage = (): JSX.Element => {
	const { t } = useTranslation();
	const naxabanRef = useRef();
	const cdnRef = useRef();
	const terminsRef = useRef();
	const mainFunctionsRef = useRef();
	const drawLineRef = useRef();
	const leftRef = useRef();
	const rightRef = useRef();
	const widthRef = useRef();
	const colorRef = useRef();
	const goToRef = useRef();
	const moveRef = useRef();
	const eraseRef = useRef();
	const showGridRef = useRef();
	const shapesRef = useRef();
	const triangleRef = useRef();
	const rectangleRef = useRef();
	const polygonRef = useRef();

	const refs = {
		naxabanRef,
		cdnRef,
		terminsRef,
		mainFunctionsRef,
		drawLineRef,
		leftRef,
		rightRef,
		widthRef,
		colorRef,
		goToRef,
		moveRef,
		eraseRef,
		showGridRef,
		shapesRef,
		triangleRef,
		rectangleRef,
		polygonRef,
	};

	return (
		<article className="py-10">
			<h1 className="text-4xl text-green-500 text-center mb-8">{t('tumo.js Ուղեցույց')}</h1>

			<div className="flex gap-8">
				<Sidebar refs={refs} />
				<MainInfo refs={refs} />
			</div>
		</article>
	);
};

export default HomePage;

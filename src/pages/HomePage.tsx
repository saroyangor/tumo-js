import { useTranslation } from 'react-i18next';

import Sidebar from '../components/Sidebar.tsx';
import MainInfo from '../components/MainInfo.tsx';
import { useRef } from 'react';

const HomePage = (): JSX.Element => {
	const { t } = useTranslation();
	const naxabanRef = useRef();

	return (
		<article className="py-10">
			<h1 className="text-4xl text-green-500 text-center">{t('tumo.js Ուղեցույց')}</h1>

			<div className="flex gap-8">
				<Sidebar refs={{ naxabanRef: naxabanRef }} />
				<MainInfo refs={{ naxabanRef: naxabanRef }} />
			</div>
		</article>
	);
};

export default HomePage;

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import icon from '../assets/favicon.ico';
import eng from '../assets/eng.png';
import arm from '../assets/arm.png';

const languages = ['eng', 'arm'];

const Header = (): JSX.Element => {
	const { i18n } = useTranslation();

	return (
		<div className="bg-neutral-700 border-t-4 border-green-500">
			<header className="container mx-auto py-8 flex justify-between items-center">
				<div>
					<h1>
						<Link to="/" className="flex items-center gap-1">
							<img src={icon} alt="icon" />
							<span className="font-extrabold text-white uppercase text-3xl">tumo</span>
							<span className="font-medium text-green-500 uppercase text-3xl">.js</span>
						</Link>
					</h1>
				</div>

				<div className="languages">
					<ul className="flex items-center gap-6">
						{languages.map((language) => (
							<li key={language}>
								<button onClick={() => i18n.changeLanguage(language)}>
									<img src={language === 'eng' ? eng : arm} alt={language} />
								</button>
							</li>
						))}
					</ul>
				</div>
			</header>
		</div>
	);
};

export default Header;

import { useTranslation } from 'react-i18next';

const Footer = (): JSX.Element => {
	const { t } = useTranslation();

	return <footer className="bg-black text-white py-16">{t('Footer')}</footer>;
};

export default Footer;

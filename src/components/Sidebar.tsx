import { useTranslation } from 'react-i18next';

interface ISidebarProps {
	refs: any;
}

const Sidebar = ({ refs }: ISidebarProps): JSX.Element => {
	const { t } = useTranslation();
	return (
		<aside className="fixed">
			<ul>
				<li>
					<button
						onClick={() =>
							refs.naxabanRef.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}
						className="hover:text-green-500 transition"
					>
						{t('Նախաբան')}
					</button>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;

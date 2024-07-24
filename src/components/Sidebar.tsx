import { useTranslation } from 'react-i18next';

interface ISidebarProps {
	refs: any;
}

const Sidebar = ({ refs }: ISidebarProps): JSX.Element => {
	const { t } = useTranslation();
	return (
		<aside className="w-1/4">
			<ul className="sticky top-5 w-full flex flex-col gap-4">
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
				<li>
					<button
						onClick={() =>
							refs.cdnRef.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}
						className="hover:text-green-500 transition"
					>
						{t('Գրել և աշխատացնել կոդ')}
					</button>
				</li>
				<li>
					<button
						onClick={() =>
							refs.terminsRef.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}
						className="hover:text-green-500 transition"
					>
						{t('Տերմիններ')}
					</button>
				</li>
				<li>
					<button
						onClick={() =>
							refs.mainFunctionsRef.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}
						className="hover:text-green-500 transition"
					>
						{t('Հիմնական ֆունկցիաներ')}
					</button>

					<ul className="flex flex-col">
						<li className="pl-8">
							<button
								onClick={() =>
									refs.drawLineRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('drawLine()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.leftRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('left()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.rightRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('right()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.widthRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('width()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.colorRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('color()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.goToRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('goTo()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.moveRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('move()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.eraseRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('erase()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.showGridRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('showGrid()')}
							</button>
						</li>
					</ul>
				</li>

				<li>
					<button
						onClick={() =>
							refs.shapesRef.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start',
							})
						}
						className="hover:text-green-500 transition"
					>
						{t('Պատկերներ')}
					</button>

					<ul className="flex flex-col">
						<li className="pl-8">
							<button
								onClick={() =>
									refs.triangleRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('drawTriangle()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.rectangleRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('drawRectangle()')}
							</button>
						</li>
						<li className="pl-8">
							<button
								onClick={() =>
									refs.polygonRef.current.scrollIntoView({
										behavior: 'smooth',
										block: 'start',
									})
								}
								className="hover:text-green-500 transition"
							>
								{t('drawPolygon()')}
							</button>
						</li>
					</ul>
				</li>
			</ul>
		</aside>
	);
};

export default Sidebar;

import { useTranslation } from 'react-i18next';

import flowerGif from '../assets/flower.gif';
import terminsGif from '../assets/turtle_intro.gif';
import drawLineGif from '../assets/forward.gif';
import leftGif from '../assets/left.gif';
import left2Gif from '../assets/left_2.gif';
import widthGif from '../assets/width.gif';
import colorNameGif from '../assets/color_name.gif';
import colorRGBGif from '../assets/color_rgb.gif';
import colorHexGif from '../assets/color_hex.gif';
import colorArrayGif from '../assets/color_rgb_array.gif';
import gotoGif from '../assets/goto.gif';
import moveGif from '../assets/move.gif';
import showGridPng from '../assets/grid1.png';
import showGrid2Png from '../assets/grid2.png';
import drawTrianglePng from '../assets/drawTriangle.png';
import drawRectanglePng from '../assets/drawRectangle.png';
import drawPolygon1Png from '../assets/drawPolygon.png';
import drawPolygon2Png from '../assets/drawPolygon6.png';

interface IMainInfoProps {
	refs: any;
}

const MainInfo = ({ refs }: IMainInfoProps): JSX.Element => {
	const { t } = useTranslation();
	return (
		<section className="flex flex-col gap-8 pl-40">
			<div ref={refs.naxabanRef}>
				<h3 className="text-2xl font-bold pb-2.5 border-b border-black">{t('Նախաբան')}</h3>

				<p className="py-3.5">
					{t(
						'tumo-js֊ը հատուկ միջավայր է JavaScript լեզվով ծրագրավորում սովորելու/ուսուցանելու համար։ Սկզբնական գաղափարը պատկանում է Սեյմուր Պեյպերտին.\n Tumo-ի այս JavaScript տարբերակի սկիզբը դրել է  bjpop֊ը, հետո Թումոյի ծրագրավորման դասընթացավարների թիմը զարգացրել է այն։',
					)}
				</p>
				<img src={flowerGif} alt="Flower" className="w-3/4 m-auto" />
			</div>

			<div ref={refs.cdnRef}>
				<h3 className="text-2xl font-bold pb-2.5 border-b border-black">
					{t('Ինչպես գրել և աշխատացնել ծրագրերը')}
				</h3>

				<p className="py-3.5">
					{t('Ծրագիրը աշխատացնելու համար ընդամենը անհրաժեշտ է HTML ֆայլում կցել CDN հղումը։')}
				</p>
			</div>

			<div ref={refs.terminsRef}>
				<h3 className="text-2xl font-bold pb-2.5 border-b border-black">
					{t('Tumo.js տերմիններ')}
				</h3>
				<article className="flex justify-between">
					<div>
						<p className="pt-3.5 font-bold">{t('վրձին')}</p>
						<p>{t('- դեղին եռանկյունը')}</p>
						<p className="font-bold">{t('կտավ')}</p>
						<p>{t('- տարածքը, որտեղ շարժվում է վրձինը')}</p>
						<p className="font-bold">{t('կոորդինատներ')}</p>
						<p>{t('- կետի կոորդինատները կտավի վրա արտահայտված են x-ով և y-ով')}</p>
					</div>
					<img src={terminsGif} alt="intro" className="w-1/2" />
				</article>
			</div>

			<div ref={refs.mainFunctionsRef}>
				<h3 className="text-2xl font-bold pb-2.5 border-b border-gray-300">
					{t('Հիմնական ֆունկցիաներ')}
				</h3>

				<div ref={refs.drawLineRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('drawLine()')}</h3>

					<p className="py-3.5">
						{t(
							'drawLine արտահայտությունը անգլերենից թարգմանաբար նշանակում է «նկարել գիծ»։ Այս ֆունկցիան վրձինը մղում է առաջ՝ տրված քայլերի քանակով։ Այսինքն, եթե փակագծերի մեջ գրաված է 100, ապա վրձինը 100 միավոր առաջ կշարժվի։',
						)}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('drawLine(length)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: length')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ՝')}</p>

							<p className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								drawLine<span className="text-white">(</span>
								<span className="text-purple-400">100</span>
								<span className="text-white">)</span>
							</p>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={drawLineGif} alt="drawLine" />
						</div>
					</article>
				</div>

				<div ref={refs.leftRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('left()')}</h3>

					<p className="py-3.5">
						{t(
							'Left բառն անգլերենից թարգմանաբար նշանակում է ձախ։ Վրձինը ուղղությունը պտտում է տրված աստիճանով դեպի ձախ։ Եթե փակագծերի մեջ գրանք 30, ապա վրձինը 30 աստիճանով ձախ կթեքվի։',
						)}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('left(angle)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: angle')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 1՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									left<span className="text-white">(</span>
									<span className="text-purple-400">30</span>
									<span className="text-white">)</span>
								</p>
								<p>
									left<span className="text-white">(</span>
									<span className="text-purple-400">60</span>
									<span className="text-white">)</span>
								</p>
								<p>
									left<span className="text-white">(</span>
									<span className="text-purple-400">90</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={leftGif} alt="left" />
						</div>
					</article>

					<article className="flex mt-3">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 2՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<p>
									left<span className="text-white">(</span>
									<span className="text-purple-400">30</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<p>
									left<span className="text-white">(</span>
									<span className="text-purple-400">50</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={left2Gif} alt="left" />
						</div>
					</article>
				</div>

				<div ref={refs.rightRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('right()')}</h3>

					<p className="py-3.5">{t('Ամեն ինչն ինչպես left()-ի ժամանակ, սակայն դեպի աջ :)')}</p>
				</div>

				<div ref={refs.widthRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('width()')}</h3>

					<p className="py-3.5">
						{t(
							'Width բառը թարգմանաբար նշանակում է լայնություն․ width() ֆունկցիան կարգավորում է հաջորդող գծերի լայնությունը։',
						)}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('width(thickness)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: thickness')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									width<span className="text-white">(</span>
									<span className="text-purple-400">3</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									width<span className="text-white">(</span>
									<span className="text-purple-400">15</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									width<span className="text-white">(</span>
									<span className="text-purple-400">6</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={widthGif} alt="width" />
						</div>
					</article>
				</div>

				<div ref={refs.colorRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('color()')}</h3>

					<p className="py-3.5">{t('color() ֆունկցիան որոշում է հաջորդող գծերի գույնը:')}</p>

					<p className="p-2 bg-zinc-500 text-white">{t('color(r [, g [, b ]]])')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('string: a (գույնի անունը)')}</p>
						<p className="">{t('number: a, b, c (RGB)')}</p>
						<p className="">{t('string: a (գույնի hex կոդը)')}</p>
						<p className="">{t('array: [a,b,c]')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 1 (գույնի անունով)՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"red"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"green"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">60</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"dodgerblue"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">120</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={colorNameGif} alt="colorName" />
						</div>
					</article>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 2 (RGB)՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									color<span className="text-white">(</span>
									<span className="text-purple-400">255</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">15</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">20</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-purple-400">12</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">250</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">65</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">60</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-purple-400">89</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">36</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">120</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={colorRGBGif} alt="colorRGB" />
						</div>
					</article>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 3 (HEX)՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"#3EEF0F"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"#ED16A2"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">60</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"#EDCD16"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">120</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={colorHexGif} alt="colorHex" />
						</div>
					</article>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 4 (զանգածով RGB)՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									color<span className="text-white">&#40;&#91;</span>
									<span className="text-purple-400">15</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">20</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">200</span>
									<span className="text-white">&#93;&#41;</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">&#40;&#91;</span>
									<span className="text-purple-400">65</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">250</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">150</span>
									<span className="text-white">&#93;&#41;</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">60</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">&#40;&#91;</span>
									<span className="text-purple-400">255</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">200</span>
									<span className="text-white">&#93;&#41;</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">120</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={colorArrayGif} alt="colorArray" />
						</div>
					</article>
				</div>

				<div ref={refs.goToRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('goTo()')}</h3>

					<p className="py-3.5">
						{t(
							'Տեղափոխում է կրիան x,y կորդինատները ունեցող կետ, սակայն տեղափոխման ընթացքում գիծ չի գծում։',
						)}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('goTo(x, y)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: x, number: y')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"red"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									goTo<span className="text-white">(-</span>
									<span className="text-purple-400">213</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">128</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"blue"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									goTo<span className="text-white">(-</span>
									<span className="text-purple-400">7</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">105</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">60</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"green"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									goTo<span className="text-white">(</span>
									<span className="text-purple-400">238</span>
									<span className="text-white">,-</span>
									<span className="text-purple-400">182</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">120</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={gotoGif} alt="goto" />
						</div>
					</article>
				</div>

				<div ref={refs.moveRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('move()')}</h3>

					<p className="py-3.5">
						{t('Տեղաշարժում է վրձինը նշված հեռավորության վրա, առանց գիծ գծելու։')}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('move(length)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: length')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"red"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									move<span className="text-white">(</span>
									<span className="text-purple-400">60</span>
									<span className="text-white">)</span>
								</p>
								<br />
								<p>
									color<span className="text-white">(</span>
									<span className="text-lime-400">"blue"</span>
									<span className="text-white">)</span>
								</p>
								<p>
									drawLine<span className="text-white">(</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={moveGif} alt="move" />
						</div>
					</article>
				</div>

				<div ref={refs.eraseRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('erase()')}</h3>

					<p className="py-3.5">{t('Մաքրում է կտավը')}</p>

					<p className="p-2 bg-zinc-500 text-white">{t('erase()')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('չունի')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									erase<span className="text-white">()</span>
								</p>
							</div>
						</div>
					</article>
				</div>

				<div ref={refs.showGridRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('showGrid()')}</h3>

					<p className="py-3.5">
						{t('Ցուցադրում է կոորդինատական առանցքները։ Արգումենտը կարգավորում է ցանցի խտությունը։')}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('showGrid(scale)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: scale')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 1՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									showGrid<span className="text-white">(</span>
									<span className="text-purple-400">50</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={showGridPng} alt="showGrid" />
						</div>
					</article>

					<article className="flex mt-3">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 2՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									showGrid<span className="text-white">(</span>
									<span className="text-purple-400">20</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={showGrid2Png} alt="showGrid" />
						</div>
					</article>
				</div>
			</div>

			<div ref={refs.shapesRef}>
				<h3 className="text-2xl font-bold pb-2.5 border-b border-gray-300">{t('Պատկերներ')}</h3>

				<div ref={refs.triangleRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('drawTriangle()')}</h3>

					<p className="py-3.5">
						{t('Գծում է եռանկյուն։ Արգումենտը որոշում է եռանկյան կողմի երկարությունը։')}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('drawTriangle(length)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: length')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ՝')}</p>

							<p className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								drawTriangle<span className="text-white">(</span>
								<span className="text-purple-400">100</span>
								<span className="text-white">)</span>
							</p>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={drawTrianglePng} alt="drawTriangle" />
						</div>
					</article>
				</div>

				<div ref={refs.rectangleRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('drawRectangle()')}</h3>

					<p className="py-3.5">
						{t('Գծում է ուղղանկյուն Արգումենտները որոշում են ուղղանկյան կողմերի երկարությունները։')}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('drawRectangle(width, height)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: width')}</p>
						<p className="">{t('number: height')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ՝')}</p>

							<p className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								drawRectangle<span className="text-white">(</span>
								<span className="text-purple-400">100</span>
								<span className="text-white">,</span>
								<span className="text-purple-400">60</span>
								<span className="text-white">)</span>
							</p>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={drawRectanglePng} alt="drawRectangle" />
						</div>
					</article>
				</div>

				<div ref={refs.polygonRef} className="pt-8">
					<h3 className="text-xl font-bold pb-2.5 border-b border-black">{t('drawPolygon()')}</h3>

					<p className="py-3.5">
						{t(
							'Գծում է բազմանկյուն: Արգումենտները որոշում են բազմանկյան կողմերի քանակը և երկարությունը։',
						)}
					</p>

					<p className="p-2 bg-zinc-500 text-white">{t('drawPolygon(sideCount, length)')}</p>

					<div className="py-3.5">
						<p className="font-bold">{t('Արգումենտներ')}</p>
						<p className="">{t('number: sideCount')}</p>
						<p className="">{t('number: length')}</p>
					</div>

					<article className="flex">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 1՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									drawPolygon<span className="text-white">(</span>
									<span className="text-purple-400">5</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={drawPolygon1Png} alt="drawPolygon" />
						</div>
					</article>

					<article className="flex mt-3">
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Օրինակ 2՝')}</p>

							<div className="p-3.5 bg-black text-yellow-300 font-mono rounded-md mr-8 font-bold text-lg">
								<p>
									drawPolygon<span className="text-white">(</span>
									<span className="text-purple-400">6</span>
									<span className="text-white">,</span>
									<span className="text-purple-400">100</span>
									<span className="text-white">)</span>
								</p>
							</div>
						</div>
						<div className="w-1/2">
							<p className="font-bold mb-2.5">{t('Արդյունք՝')}</p>
							<img src={drawPolygon2Png} alt="drawPolygon" />
						</div>
					</article>
				</div>
			</div>
		</section>
	);
};

export default MainInfo;

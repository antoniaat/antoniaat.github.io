import Flip from 'react-reveal/Flip';
import codingSelfie from '../../public/home/coding-selfie.webp';
import rightingSoftware from '../../public/home/righting-software.webp';
import programmingBasics from '../../public/home/programming-basics.webp';
import predictTheUnpredictable from '../../public/home/predict-the-unpredictable.webp';
import publicSpeaking from '../../public/home/public-speaking.webp';
import podcast from '../../public/home/it-talks-podcast.webp';
import selfieTime from '../../public/home/selfie-time.webp';
import me from '../../public/home/me.jpeg';
import ybc from '../../public/home/ybc.webp';
import {
	AboutWrapper,
	AboutTitleStyled,
	AboutHeaderStyled,
	AboutDescriptionStyled,
	AboutImgStyled,
	AboutTextStyled,
} from './about.styled';

const myCurrentAge = new Date().getFullYear() - new Date('05/03/1997').getFullYear();

export const About = () => (
	<AboutWrapper>
		<Flip top>
			<AboutTitleStyled>
				Здравей, радвам се, че си тук! Аз съм Тони.
				</AboutTitleStyled>
		</Flip>
		<AboutHeaderStyled>
			<AboutTextStyled>
				Последното нещо, което искам е да губя времето ти, затова ще се опитам да бъда максимално кратка.
			</AboutTextStyled>
		</AboutHeaderStyled>
	
		<AboutTextStyled>
			На {myCurrentAge} години съм, родена в топлия южен град Петрич. Определям се като един щастлив екстроверт с добро сърце. Обожавам да чета, да пътувам, да съм сред природата и да прекарвам време с прекрасните хора в живота ми. Изключително много се зареждам, когато помагам на други хора и вярвам на сто процента, че ако човек иска да промени света, трябва първо да започне със себе си.
		</AboutTextStyled>
		
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={codingSelfie} />
			<AboutTextStyled>
				Всичко започна през 2016 г. в малка маркетинг агенция. Тогава си мислех, че маркетингът ще бъде любовта на живота ми, заради креативността и желанието с които работех. Скоро обаче агенцията започна да предлага като услуга изготвяване на уеб сайтове и тогава за първи път се сблъсках с програмирането. Може да предположите, че ми хареса.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={rightingSoftware} />
			<AboutTextStyled>
				Междувременно следвах "Бизнес Информатика" в УНСС и карах курсовете на СофтУни по програмиране. И двете места ми дадоха много и ми помогнаха да се развия като човек и професионалист.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={ybc} />
			<AboutTextStyled>
				Малко по-малко с натрупването на повече опит започнах да работя за различни агенции като подизпълнител и да поемам проекти на свободни начала сама. Това беше ценна част от моя път, защото ме научи да работя с всякакви клиенти и научих много за управлението на времето, проектите и финансите си. Обичах фрийланс работата заради свободата, която ми даваше и около 3-4 години това беше основният ми източник на доходи.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={programmingBasics} />
			<AboutTextStyled>
				Още по време на първите курсове много харесах модела на СофтУни, енергията на хората там и практическата насоченост на обученията. Докато все още бях студентка получих възможността да стана част от екипа и така започнаха най-вълнуващите години в живота ми. Малко по малко през годините отговорностите ми нарастваха и станах лидер на екипът, отговорен за качеството на обученията в цялата JavaScript пътека. Бях отговорна и за лекторския екип и корпоративните обучения на организацията.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={predictTheUnpredictable} />
			<AboutTextStyled>
				Докато работех в СофтУни открих и голямата си страст към обученията. Осъзнах, че да помагам и уча другите е кауза за която си заслужава да се боря. Около четири години преподавах активно в различни курсове по програмиране и съм благодарна за всички прекрасни хора, които срещнах през това време. 300+ лекции по-късно спрях да водя цялостни обучения, но все още се появявам тук-там като заместник на някой лектор от Front-End пътеката.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={publicSpeaking} />
			<AboutTextStyled>
				На 22 годишна възраст вече бях постигнала и научила толкова много и реших, че е време да се отдам повече на техническата част от нашата професия и да стана програмист на пълен работен ден. Тогава се преместих в development екипа на организацията и започнах да работя по платформите и.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={podcast} />
			<AboutTextStyled>
				Междувременно започнах да водя и подкаст под името 
				<a
					target={'_blank'}
					href="https://www.youtube.com/watch?v=91LKVhfH1kc&list=PLlcYRzEHmgNnPf45OpR_yL6yDZVnNdLUE&index=4">
					"IT Talks"
				</a>, където си говорех с различни специалисти от ИТ сферата. Сега вече това не е нещо УАУ, но държа да кажа, че тогава нямаше друг подкаст в България за ИТ теми и това беше много вълнуващо начинание.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={selfieTime} />
			<AboutTextStyled>
				След около година и половина се почувствах леко изчерпана и отегчена от Front-End разработката и започнах да търся нещо по-предизвикателно. Тогава LinkedIn ме срещна с Devexperts - компанията в която работя и до днес. Devexperts беше шамар в лицето на мислите ми, че Front-end-a е скучен и е само картинки и CSS. Набързо научих какво е реактивно програмиране, фунцкионално програмиране и как се работи с live data и стриймове. И докато все още си тръшках главата с най-технически предизвикателните задачи в живота ми, започнах малко по-малко да виждам поле за изява като лидер на екипа в който бях. Колкото и да обичам програмирането беше време да се примиря, че моята сила е в управлението на хора и проекти. Така с усмивка и нова доза вдъхновение станах Team Lead на Front-end екип от 9 души в най-големия проект на компанията.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={me} />
			<AboutTextStyled>
				Едно от стъпалата, което дълги години ме очакваше беше изграждането на личен бранд. Това е едно от нещата, за които трябва да се почувстваш достатъчно израстнал и не исках да прибързвам с него. Преди около година стартирах YouTube канал и Instagram страница, където се старая редовно да споделям по нещо полезно и вдъхновяващо. Красотата на това да правиш нещо свое е, че нямаш никакви ограничения, затова и тествам различни формати. Подкаст епизоди, видеа само с мен, наръчници в писмен формат, кратки видеа, малки курсове - всичко това са неща, които ще виждате от мен в бъдеще.
			</AboutTextStyled>
		</AboutDescriptionStyled>
	</AboutWrapper>
);

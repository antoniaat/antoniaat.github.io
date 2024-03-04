import Flip from 'react-reveal/Flip';
import codingSelfie from '../../public/home/coding-selfie.webp';
import rightingSoftware from '../../public/home/righting-software.webp';
import programmingBasics from '../../public/home/programming-basics.webp';
import predictTheUnpredictable from '../../public/home/predict-the-unpredictable.webp';
import publicSpeaking from '../../public/home/public-speaking.webp';
import podcast from '../../public/home/it-talks-podcast.webp';
import selfieTime from '../../public/home/selfie-time.webp';
import books from '../../public/home/books.webp';
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
			<AboutTitleStyled>Hi, I’m Tony. Nice to meet you.</AboutTitleStyled>
		</Flip>
		<AboutHeaderStyled>
			<AboutTextStyled>
				You can be sure that the last thing I want is to lose your time, so I'll try to be as brief as possible.
			</AboutTextStyled>
		</AboutHeaderStyled>
		<Flip top>
			<AboutTitleStyled>The culture-fit part</AboutTitleStyled>
		</Flip>
		<AboutTextStyled>
			I'm {myCurrentAge} years old, born in Bulgaria, but a citizen of the world. I am a very communicative,
			open-minded, and good-hearted person. I love reading books, traveling, and being around nature. I always
			strive to help others, and I genuinely believe that if we want to change the world, we should first start
			changing ourselves.
		</AboutTextStyled>
		<Flip top>
			<AboutTitleStyled>The experience part</AboutTitleStyled>
		</Flip>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={codingSelfie} />
			<AboutTextStyled>
				Everything started in 2016 in a small digital marketing agency. Back then, I thought that digital
				marketing would be the love of my life because of its creativity. Soon our agency started bringing small
				business card websites to its customers, and then I fell in love with programming.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={rightingSoftware} />
			<AboutTextStyled>
				Meanwhile, I was studying for my bachelor's degree at the University of National and World Economy in
				Sofia and Software Engineering at Softuni. The official university gave me a lot of knowledge about the
				business world, but the academy was the one that taught me how to write code.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={ybc} />
			<AboutTextStyled>
				While studying and still working in the digital marketing agency, I began doing freelance projects. I
				have worked with different agencies, tried to build a personal brand, and left dozens of satisfied
				customers. I loved freelance work because of the freedom I've had. Although, I was always responsible
				and correct with my clients.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={programmingBasics} />
			<AboutTextStyled>
				I liked how practical and modern the education in Softuni is, and then I decided to become part of the
				biggest programming academy in Bulgaria team. I started as an intern, but soon my passion for FE
				appeared, and I was leading the JavaScript program there. I worked passionately on the FE program
				improvement with an incredible team of five people under my lead.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={predictTheUnpredictable} />
			<AboutTextStyled>
				And then one of the most incredible things in my career happened. I realized that the more knowledge I
				share, the happier I am. Four years after, with hundreds of students and more than 300+ lectures, I
				couldn't be more proud of this journey.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={publicSpeaking} />
			<AboutTextStyled>
				At the age of 22, I led a five-person team and conducted lectures in front of more than 300. And yes,
				back then, programming was half of my job, and I felt the need to spend more time doing this to improve
				my technical expertise. That's why I decided to move to the development team in the same company and
				start working behind the educational software we were using.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={podcast} />
			<AboutTextStyled>
				Meanwhile, I started running my podcast under the brand, which was the most listened
				<a
					target={'_blank'}
					href="https://www.youtube.com/watch?v=91LKVhfH1kc&list=PLlcYRzEHmgNnPf45OpR_yL6yDZVnNdLUE&index=4">
					{' '}
					podcast{' '}
				</a>
				about development back then in Bulgaria.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={selfieTime} />
			<AboutTextStyled>
				After a year and a half and a lot of thoughts like "FE is boring, maybe I should become Full-stack" I've
				met Devexperts. The Fintech domain, combined with really well-written projects using a functional &
				reactive approach, still fills every day with something new to learn. Then I also realized that in this
				moment of my life, I want to work for a big company with well-organized processes and a dedicated person
				for each role (not a fan of a one-man army anymore). Now I'm living my best life in this company, working as a FE team lead with a wonderful team.
			</AboutTextStyled>
		</AboutDescriptionStyled>
		<AboutDescriptionStyled>
			<AboutImgStyled loading="lazy" src={books} />
			<AboutTextStyled>
				Last but not least is my blogging experience. I'm on a break from teaching because of the pandemic (and
				because I prefer teaching onsite). Although my English is not perfect, I decided to start sharing some
				thoughts about life and programming. Still new to that and still trying to gather more posts before I
				start improving the SEO, so your feedback is kindly welcomed. :)
			</AboutTextStyled>
		</AboutDescriptionStyled>
	</AboutWrapper>
);

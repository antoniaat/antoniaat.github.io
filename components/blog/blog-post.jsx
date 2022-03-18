import Link from 'next/link';

import { item, content } from '../../styles/components/blog/blog-post.module.scss';

import thumbnailImgSrc from '../../assets/images/thumbnail.png';

export const BlogPost = ({ slug, title, description, date }) => (
	<article className={item}>
		<Link href={'/blog/' + slug} passHref>
			<section>
				<article>
					<img src={thumbnailImgSrc} alt="thumbnail" />
				</article>
				<article className={content}>
					<h5>{title}</h5>
					<p>{description}</p>
					<p>
						<small>{date}</small>
					</p>
				</article>
			</section>
		</Link>
	</article>
);

import Link from 'next/link';
import {
	BlogPostContentImgStyled,
	BlogPostContentImgWrapperStyled,
	BlogPostContentStyled,
	BlogPostContentTextStyled,
	BlogPostContentTitleStyled,
	BlogPostContentWrapperStyled,
	BlogPostStyled,
} from './blog-post.styled';

export const BlogPost = ({ slug, title, description, date, imgSrc }) => (
	<BlogPostStyled>
		<Link href={'/blog/' + slug} passHref>
			<BlogPostContentWrapperStyled>
				<BlogPostContentImgWrapperStyled>
					<BlogPostContentImgStyled src={imgSrc} alt="thumbnail" />
				</BlogPostContentImgWrapperStyled>
				<BlogPostContentStyled>
					<BlogPostContentTitleStyled>{title}</BlogPostContentTitleStyled>
					<BlogPostContentTextStyled>{description}</BlogPostContentTextStyled>
					<BlogPostContentTextStyled>
						<small>{date}</small>
					</BlogPostContentTextStyled>
				</BlogPostContentStyled>
			</BlogPostContentWrapperStyled>
		</Link>
	</BlogPostStyled>
);

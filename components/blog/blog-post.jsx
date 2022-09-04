import Link from 'next/link';
import thumbnailImgSrc from '../../assets/images/thumbnail.png';
import {
	BlogPostContentImgStyled,
	BlogPostContentImgWrapperStyled,
	BlogPostContentStyled,
	BlogPostContentTextStyled,
	BlogPostContentTitleStyled,
	BlogPostContentWrapperStyled,
	BlogPostStyled,
} from './blog-post.styled';

export const BlogPost = ({ slug, title, description, date }) => (
	<BlogPostStyled>
		<Link href={'/blog/' + slug} passHref>
			<BlogPostContentWrapperStyled>
				<BlogPostContentImgWrapperStyled>
					<BlogPostContentImgStyled src={thumbnailImgSrc} alt="thumbnail" />
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

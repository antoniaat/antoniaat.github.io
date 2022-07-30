import Layout from '../layout';
import Wrapper from '../wrapper';
import { postTitle, content } from '../../styles/components/blog/post-page.module.scss';


export const PostPage = ({ title, children }) => (
	<Layout>
		<Wrapper>
			<h1 className={postTitle}>{title}</h1>
			<article className={content}>{children}</article>
		</Wrapper>
	</Layout>
);

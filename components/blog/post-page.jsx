import Layout from '../layout';
import Wrapper from '../wrapper';

export const PostPage = ({ title, children }) => (
	<Layout>
		<Wrapper>
			<h1>{title}</h1>

			<article>{children}</article>
		</Wrapper>
	</Layout>
);

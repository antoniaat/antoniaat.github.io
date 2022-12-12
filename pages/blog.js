import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Layout } from '../components/layout';
import { BlogPost } from '../components/blog/blog-post';
import { BlogPageListStyled, BlogPageStyled } from '../components/blog/blog-page.styled';

export const getStaticProps = async () => {
	const files = fs.readdirSync(path.join('posts/2022'));

	const posts = files.map(filename => {
		const markdownWithMeta = fs.readFileSync(path.join('posts/2022', filename), 'utf-8');
		const { data: frontMatter } = matter(markdownWithMeta);

		return {
			frontMatter,
			slug: filename.split('.')[0],
		};
	});

	return {
		props: { posts },
	};
};

const Blog = ({ posts }) => (
	<Layout>
		<BlogPageStyled>
			<BlogPageListStyled>
				{posts.map((post, index) => (
					<BlogPost
						key={index}
						imgSrc={`/blog-thumbnails/${post.frontMatter.imgSrc}`}
						slug={post.slug}
						title={post.frontMatter.title}
						description={post.frontMatter.description}
						date={post.frontMatter.date}
					/>
				))}
			</BlogPageListStyled>
		</BlogPageStyled>
	</Layout>
);

export default Blog;

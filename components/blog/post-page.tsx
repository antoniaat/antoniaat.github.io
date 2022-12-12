import { Layout } from '../layout';
import { PostPageContentStyled, PostPageStyled, PostPageTitleStyled } from './post-page.styled';

export const PostPage = ({ title, children }) => (
	<Layout>
		<PostPageStyled>
			<PostPageTitleStyled>{title}</PostPageTitleStyled>
			<PostPageContentStyled>{children}</PostPageContentStyled>
		</PostPageStyled>
	</Layout>
);

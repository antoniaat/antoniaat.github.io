import { CONTACT_EMAIL } from '../../scripts/i18n/main-info.tss';
import {
	CollaborationCtaLinkStyled,
	CollaborationCtaStyled,
	CollaborationDescriptionStyled,
	CollaborationTitleStyled,
	CollaborationWrapperStyled,
} from './collaboration.styled';

export const Collaboration = () => (
	<CollaborationWrapperStyled>
		<CollaborationTitleStyled>Start a project</CollaborationTitleStyled>
		<CollaborationDescriptionStyled>
			Interested in working together? We should queue up a chat. I’ll buy the coffee.
		</CollaborationDescriptionStyled>
		<CollaborationCtaStyled>
			<CollaborationCtaLinkStyled href={`mailto:${CONTACT_EMAIL}`}>
					Let&apos;s do this
			</CollaborationCtaLinkStyled>
		</CollaborationCtaStyled>
	</CollaborationWrapperStyled>
);

import styled from 'styled-components';
import { teamMembers } from '../../public/teamData';
import { fadeUp } from '../../theme';

const Section = styled.section`
	position: relative;
	background: var(--bg);
	color: var(--text);
	font-family: var(--font-body);
	padding: 4rem 5vw;

	@media (max-width: 768px) {
		padding: 2rem 6vw;
	}
`;

const Container = styled.div`
	max-width: 100%;
`;

const Title = styled.h2`
	font-family: var(--font-display);
	font-size: clamp(2.5rem, 6vw, 4rem);
	line-height: .92;
	letter-spacing: .01em;
	color: var(--text);
	text-transform: uppercase;
	margin: 0 0 3rem 0;
	animation: ${fadeUp} .6s .15s ease both;
`;

const Disclaimer = styled.p`
	font-size: .72rem;
	letter-spacing: .08em;
	text-transform: uppercase;
	color: var(--muted);
	margin: 0 0 2.5rem 0;
	animation: ${fadeUp} .6s .2s ease both;
`;

const TeamGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	gap: 2rem;
	animation: ${fadeUp} .6s .25s ease both;

	@media (max-width: 1400px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
		gap: 1.5rem;
	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}
`;

const MemberName = styled.h3`
	font-family: var(--font-display);
	font-size: clamp(1.1rem, 3vw, 1.3rem);
	line-height: 1.2;
	letter-spacing: .01em;
	color: var(--accent-2);
	text-transform: uppercase;
	margin: 0;
	transition: color .3s ease;
`;

const MemberTitle = styled.p`
	font-size: .75rem;
	letter-spacing: .1em;
	text-transform: uppercase;
	color: var(--accent);
	margin: 0;
	font-weight: 700;
`;

const MemberDescription = styled.p`
	color: var(--muted);
	font-size: .8rem;
	line-height: 1.6;
	margin: 0;
`;

const MemberCard = styled.div`
	position: relative;
	background: rgba(20, 20, 30, .8);
	border: 1px solid rgba(255, 255, 255, .06);
	border-radius: 16px;
	overflow: hidden;
	transition: all .3s ease;
	display: flex;
	flex-direction: column;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(38, 80, 245, .08), transparent);
		opacity: 0;
		transition: opacity .3s ease;
		pointer-events: none;
		z-index: 1;
	}

	&:hover {
		border-color: rgba(38, 80, 245, .3);
		background: rgba(20, 20, 30, 1);

		&::before {
			opacity: 1;
		}

		${MemberName} {
			color: var(--accent-2);
		}
	}
`;

const PhotoWrapper = styled.div`
	position: relative;
	width: 100%;
	padding-bottom: 100%;
	overflow: hidden;
	background: rgba(38, 80, 245, .1);
`;

const Photo = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

const MemberInfo = styled.div`
	position: relative;
	z-index: 10;
	padding: 1.8rem;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`;

const TeamSection = () => {


	return (
		<Section>
			<Container>
				<Title>Our Team</Title>
				<Disclaimer>
					These are our official high school team members. GEarheads is a much larger organization—we're excluding younger members and student mentors from this view.
				</Disclaimer>

				<TeamGrid>
					{teamMembers.map((member, index) => (
						<MemberCard key={index}>
							<PhotoWrapper>
								<Photo src={member.photo} alt={member.name} />
							</PhotoWrapper>
							<MemberInfo>
								<MemberName>{member.name}</MemberName>
								{member.title && <MemberTitle>{member.title}</MemberTitle>}
								{member.description && <MemberDescription>{member.description}</MemberDescription>}
							</MemberInfo>
						</MemberCard>
					))}
				</TeamGrid>
			</Container>
		</Section>
	);
};

export default TeamSection;
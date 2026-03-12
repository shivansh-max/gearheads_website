import styled from 'styled-components';
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

const ValuesGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(6, 1fr);
	gap: 1rem;
	animation: ${fadeUp} .6s .25s ease both;

	@media (max-width: 1440px) {
		grid-template-columns: repeat(6, 1fr);
	}

	@media (max-width: 1200px) {
		grid-template-columns: repeat(4, 1fr);
	}

	@media (max-width: 1024px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: 1fr;
	}
`;

const ValueTitle = styled.h3`
	font-family: var(--font-display);
	font-size: clamp(0.95rem, 2vw, 1.1rem);
	line-height: 1.2;
	letter-spacing: .01em;
	color: var(--text);
	text-transform: uppercase;
	margin: 0;
	transition: color .3s ease;
`;

const ValueDescription = styled.p`
	position: relative;
	z-index: 10;
	color: var(--muted);
	font-size: .7rem;
	line-height: 1.5;
	margin: 0;
	margin-top: 0.6rem;
`;

const ValueCard = styled.div`
	position: relative;
	background: rgba(20, 20, 30, .8);
	border: 1px solid rgba(255, 255, 255, .06);
	border-radius: 12px;
	padding: 1.2rem;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	transition: all .3s ease;

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
	}

	&:hover {
		border-color: rgba(38, 80, 245, .3);
		background: rgba(20, 20, 30, 1);

		&::before {
			opacity: 1;
		}

		${ValueTitle} {
			color: var(--accent-2);
		}
	}
`;

const ValuesSection = () => {
	const values = [
		{
			title: 'Accessibility',
			description: 'STEM should never depend on money or background.'
		},
		{
			title: 'Curiosity',
			description: 'We encourage students to build, break, test, and explore without fear.'
		},
		{
			title: 'Service',
			description: 'Robotics is our tool; impact is our goal.'
		},
		{
			title: 'Innovation',
			description: 'We push for creative solutions, open-source tools, and new ideas.'
		},
		{
			title: 'Teamwork',
			description: 'Learning is a collaborative effort, and we grow together.'
		},
		{
			title: 'Community',
			description: 'We strengthen local STEM ecosystems by connecting students, schools, and organizations around shared goals.'
		}
	];

	return (
		<Section>
			<Container>
				<Title>Our Values</Title>

				<ValuesGrid>
					{values.map((value, index) => (
						<ValueCard key={index}>
							<ValueTitle>{value.title}</ValueTitle>
							<ValueDescription>{value.description}</ValueDescription>
						</ValueCard>
					))}
				</ValuesGrid>
			</Container>
		</Section>
	);
};

export default ValuesSection;
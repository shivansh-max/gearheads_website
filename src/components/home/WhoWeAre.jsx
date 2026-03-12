import { createGlobalStyle, keyframes } from 'styled-components';
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');
	*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
	:root {
		--bg:        #000000;
		--accent:    #2650f5;
		--accent-2:  #00e5a0;
		--text:      #e8eaf0;
		--muted:     #7a8090;
		--font-display: 'Bebas Neue', sans-serif;
		--font-body:    'Space Mono', monospace;
	}
`;

const fadeUp = keyframes`
	from { opacity: 0; transform: translateY(28px); }
	to   { opacity: 1; transform: translateY(0); }
`;

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

const Header = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 4rem;
	margin-bottom: 4rem;
	align-items: start;
	animation: ${fadeUp} .6s .15s ease both;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
`;

const Title = styled.h2`
	font-family: var(--font-display);
	font-size: clamp(2.5rem, 6vw, 5rem);
	line-height: .92;
	letter-spacing: .01em;
	color: var(--text);
	text-transform: uppercase;
	margin: 0;
`;

const AccentSpan = styled.span`
	color: var(--accent);
`;

const Description = styled.p`
	color: var(--muted);
	font-size: .88rem;
	line-height: 1.75;
	margin: 0;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 1.6rem;
	animation: ${fadeUp} .6s .25s ease both;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`;

const Card = styled.div`
	position: relative;
	background: transparent;
	border: 1px solid rgba(255,255,255,.08);
	border-radius: 12px;
	padding: 2rem;
	overflow: hidden;
	transition: all .3s ease;

	&:hover {
		border-color: rgba(38,80,245,.4);
		background: rgba(38,80,245,.02);

		&::before {
			opacity: .08;
		}
	}

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(38,80,245,.1), transparent);
		opacity: 0;
		transition: opacity .3s ease;
		pointer-events: none;
	}
`;

const CardContent = styled.div`
	position: relative;
	z-index: 10;
`;

const Number = styled.span`
	font-family: var(--font-display);
	font-size: clamp(2.5rem, 5vw, 3.5rem);
	line-height: 1;
	letter-spacing: .01em;
	color: var(--accent);
	text-transform: uppercase;
	display: block;
	margin-bottom: 1.2rem;
`;

const CardTitle = styled.h3`
	font-family: var(--font-body);
	font-size: .75rem;
	font-weight: 700;
	letter-spacing: .12em;
	margin: 0 0 .8rem 0;
	color: var(--text);
	text-transform: uppercase;
`;

const CardDescription = styled.p`
  color: var(--muted);
  font-size: .8rem;
  line-height: 1.6;
  margin: 0;
`;

const WhoAreWeSection = () => {
	const cards = [
		{
			number: '01',
			title: 'ENGINEERING EXCELLENCE',
			description: 'Design and build competitive FTC robots using CAD, machining, coding, and iterative engineering that gives students real-world experience.'
		},
		{
			number: '02',
			title: 'HANDS-ON LEARNING',
			description: 'Run interactive robot-driving demos, CNC drawing showcases, and workshops that let kids and families experience robotics up close.'
		},
		{
			number: '03',
			title: 'COMMUNITY IMPACT',
			description: 'Share CAD files, CNC builds, fabrication guides, and technical documentation to help other teams and students learn, create, and grow in STEM.'
		},
		{
			number: '04',
			title: 'OPEN-SOURCE INNOVATION',
			description: 'Share CAD files, CNC builds, fabrication guides, and technical documentation to help other teams and students learn, create, and grow in STEM.'
		}
	];

	return (
		<>
			<GlobalStyle />
			<Section>
				<Container>
					<Header>
						<Title>
							Who are <AccentSpan>we?</AccentSpan>
						</Title>
						<Description>
							We're a student-led FTC robotics team dedicated to engineering, innovation, and expanding access to STEM across Wisconsin. Through hands-on robotics, CNC fabrication, and community outreach, we create opportunities for students to build real technical skills and explore engineering with confidence.
						</Description>
					</Header>

					<Grid>
						{cards.map((card, index) => (
							<Card key={index}>
								<CardContent>
									<Number>{card.number}</Number>
									<CardTitle>{card.title}</CardTitle>
									<CardDescription>{card.description}</CardDescription>
								</CardContent>
							</Card>
						))}
					</Grid>
				</Container>
			</Section>
		</>
	);
};

export default WhoAreWeSection;
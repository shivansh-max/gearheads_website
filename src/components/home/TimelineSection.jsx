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

const TimelineContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem 4rem;
  animation: ${fadeUp} .6s .25s ease both;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const TimelineItem = styled.div`
  position: relative;
  padding-left: 0;
`;

const Year = styled.div`
  font-family: var(--font-body);
  font-size: .75rem;
  font-weight: 700;
  letter-spacing: .12em;
  margin: 0 0 .5rem 0;
  color: var(--accent);
  text-transform: uppercase;
`;

const TeamName = styled.h3`
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: .04em;
  margin: 0 0 1.2rem 0;
  color: var(--text);
  text-transform: uppercase;
`;

const Description = styled.p`
  color: var(--muted);
  font-size: .8rem;
  line-height: 1.7;
  margin: 0;
`;

const TimelineSection = () => {
	const timeline = [
		{
			year: '2017-2018 (FLL)',
			team: 'Hydro Dynamics',
			description: 'Our first year in FIRST learning teamwork, problem-solving, and creative design. Built a water-focused project and discovered the foundations of engineering.'
		},
		{
			year: '2018-2019 (FLL)',
			team: 'Into Orbit',
			description: 'A breakout season where our robot and project reached new levels. Explored space challenges and earned top recognition, transforming our passion for STEM.'
		},
		{
			year: '2019-2020 (FTC)',
			team: 'Skystone',
			description: 'First full year in FTC team—learning CAD, machining, programming and competition logistics. Found the grounds for future success.'
		},
		{
			year: '2020-2021 (FTC)',
			team: 'Ultimate Goal',
			description: 'Focused on improving the robot and team dynamics this season. Strengthened our engineering workflow and learned how to deliver consistent results.'
		},
		{
			year: '2021-2022 (FTC)',
			team: 'Freight Frenzy',
			description: 'Enhanced robot reliability strategy and coding while expanding mechanisms. Achieved strong competition results through disciplined engineering and teamwork.'
		},
		{
			year: '2022-2023 (FTC)',
			team: 'POWERPLAY',
			description: 'Our most successful season yet—refined leadership and earned our first Inspire Award. Captured the Wisconsin State Trophy and qualified for World Championships.'
		},
		{
			year: '2023-2024 (FTC)',
			team: 'CENTERSTAGE',
			description: 'Improved design and fabrication processes while growing outreach. Showcased robotics and CNC technology to thousands across Wisconsin.'
		},
		{
			year: '2024-2025 (FTC)',
			team: 'Into the Deep',
			description: 'Continued refining robot systems, CAD workflows, and machining skills. Expanded community impact through demos, events, and STEM partnerships.'
		},
		{
			year: '2025-2026 (FTC)',
			team: 'DECODE',
			description: 'Building the future with refined design, robust fabrication, and deepening our outreach mission to inspire the next generation.'
		}
	];

	return (
		<Section id="timeline">
			<Container>
				<Title>Timeline</Title>

				<TimelineContainer>
					{timeline.map((item, index) => (
						<TimelineItem key={index}>
							<Year>{item.year}</Year>
							<TeamName>{item.team}</TeamName>
							<Description>{item.description}</Description>
						</TimelineItem>
					))}
				</TimelineContainer>
			</Container>
		</Section>
	);
};

export default TimelineSection;
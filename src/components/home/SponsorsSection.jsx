import styled from 'styled-components';
import { sponsors } from "../../public/sponsorData";

const Section = styled.section`
	background: #000000;
	color: #e8eaf0;
	padding: 4rem 5vw;
	font-family: 'Space Mono', monospace;

	@media (max-width: 768px) {
		padding: 2rem 6vw;
	}
`;

const Title = styled.h2`
	font-family: 'Bebas Neue', sans-serif;
	font-size: clamp(2.5rem, 6vw, 4rem);
	font-weight: 400;
	line-height: 0.92;
	letter-spacing: 0.01em;
	color: #e8eaf0;
	text-transform: uppercase;
	margin: 0 0 3rem 0;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 1.5rem;

	@media (max-width: 1024px) {
		grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
		gap: 1.2rem;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
		gap: 1rem;
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 0.8rem;
	}
`;

const SponsorCard = styled.div`
	background: linear-gradient(135deg, rgba(38, 80, 245, 0.1), rgba(20, 20, 30, 0.8));
	border: 1px solid rgba(38, 80, 245, 0.2);
	border-radius: 16px;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	transition: all 0.3s ease;
	cursor: pointer;
	aspect-ratio: 3 / 4;

	&:hover {
		border-color: rgba(38, 80, 245, 0.5);
		background: linear-gradient(135deg, rgba(38, 80, 245, 0.2), rgba(20, 20, 30, 0.9));
		transform: translateY(-4px);
	}
`;

const LogoWrapper = styled.div`
	flex: 1;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 1.5rem;
	background: rgba(38, 80, 245, 0.05);

	img {
		max-width: 100%;
		max-height: 100%;
		object-fit: contain;
	}
`;

const SponsorName = styled.h3`
	font-family: 'Bebas Neue', sans-serif;
	font-size: clamp(0.7rem, 2vw, 1rem);
	font-weight: 400;
	letter-spacing: 0.05em;
	color: #e8eaf0;
	text-transform: uppercase;
	margin: 0;
	padding: 1.2rem;
	text-align: center;
	border-top: 1px solid rgba(38, 80, 245, 0.2);
`;

const SponsorsSection = () => {
	return (
		<Section>
			<Title>Our Sponsors</Title>
			<Grid>
				{sponsors.map((sponsor, index) => (
					<SponsorCard key={index}>
						<LogoWrapper>
							<img src={sponsor.logo} alt={sponsor.name} />
						</LogoWrapper>
						<SponsorName>{sponsor.name}</SponsorName>
					</SponsorCard>
				))}
			</Grid>
		</Section>
	);
};

export default SponsorsSection;
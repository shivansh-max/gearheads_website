import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowForward } from 'react-icons/io5';

const Wrapper = styled.div`
	width: 100%;
	background: #000000;
	color: #e8eaf0;
	padding: 2rem 5vw;
	font-family: 'Space Mono', monospace;
`;

const MetaBar = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 6rem;
	font-size: 0.7rem;
	letter-spacing: 0.15em;
	text-transform: uppercase;
	color: #7a8090;

	@media (max-width: 768px) {
		margin-bottom: 3rem;
		font-size: 0.65rem;
	}
`;

const LocationDot = styled.span`
	display: inline-block;
	width: 6px;
	height: 6px;
	background: #00e5a0;
	border-radius: 50%;
	margin-right: 0.6rem;
	vertical-align: middle;
`;

const Hero = styled.div`
	max-width: 100%;
`;

const Title = styled.h1`
	font-family: 'Bebas Neue', sans-serif;
	font-size: clamp(3rem, 12vw, 9rem);
	font-weight: 400;
	line-height: 0.9;
	color: #2650f5;
	text-transform: uppercase;
	margin: 0 0 1rem 0;
	letter-spacing: 0.02em;

	@media (max-width: 768px) {
		margin-bottom: 0.5rem;
	}
`;

const Subtitle = styled.h2`
	font-family: 'Bebas Neue', sans-serif;
	font-size: clamp(3rem, 12vw, 9rem);
	font-weight: 400;
	line-height: 0.9;
	margin: 0 0 2rem 0;
	letter-spacing: 0.02em;

	/* Stroke effect for outlined text */
	-webkit-text-stroke: 2px #2650f5;
	-webkit-text-fill-color: transparent;
	paint-order: stroke;
	text-transform: uppercase;

	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}
`;

const TeamNumber = styled.div`
	font-family: 'Bebas Neue', sans-serif;
	font-size: clamp(2.5rem, 10vw, 8rem);
	font-weight: 400;
	line-height: 1;
	margin-bottom: 2.5rem;
	letter-spacing: 0.02em;
	text-transform: uppercase;

	span {
		color: #00e5a0;
		margin-right: 0.3rem;
	}

	@media (max-width: 768px) {
		margin-bottom: 1.5rem;
		font-size: clamp(2rem, 8vw, 6rem);
	}
`;

const Description = styled.p`
	font-size: 0.85rem;
	line-height: 1.8;
	color: #7a8090;
	max-width: 550px;
	margin-bottom: 2.5rem;
	font-family: 'Space Mono', monospace;

	@media (max-width: 768px) {
		font-size: 0.8rem;
		margin-bottom: 2rem;
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;

	@media (max-width: 768px) {
		gap: 0.8rem;
	}
`;

const PrimaryButton = styled.a`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.9rem 2.2rem;
	background: #2650f5;
	color: white;
	text-decoration: none;
	border-radius: 50px;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	font-family: 'Space Mono', monospace;
	border: none;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		background: #1a3de0;
		transform: translateY(-2px);
	}

	&:hover svg {
		transform: translate(2px, -2px);
	}

	svg {
		transition: transform 0.3s ease;
	}

	@media (max-width: 768px) {
		padding: 0.8rem 1.8rem;
		font-size: 0.7rem;
	}
`;

const SecondaryButtonLink = styled(Link)`
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.9rem 2.2rem;
	background: transparent;
	color: #e8eaf0;
	text-decoration: none;
	border: 1px solid rgba(232, 234, 240, 0.3);
	border-radius: 50px;
	font-size: 0.75rem;
	font-weight: 700;
	letter-spacing: 0.12em;
	text-transform: uppercase;
	font-family: 'Space Mono', monospace;
	cursor: pointer;
	transition: all 0.3s ease;

	&:hover {
		border-color: #00e5a0;
		color: #00e5a0;
		transform: translateY(-2px);
	}

	@media (max-width: 768px) {
		padding: 0.8rem 1.8rem;
		font-size: 0.7rem;
	}
`;

export default function HeroSection({
										founded = '2019',
										location = 'Brookfield, Wisconsin, USA',
										teamName = 'GEarheads',
										teamNumber = '16460',
										tagline = 'A student-led FTC team from Wisconsin that builds competitive robots and brings hands-on STEM to the community through demos, workshops, and events.',
										ctaHref = '#',
										ctaLabel = 'View us in Action',
										secondaryHref = '/version-comparison',
										secondaryLabel = 'Meet the Team',
									}) {
	return (
		<Wrapper>
			<MetaBar>
				<span>{founded} – Present</span>
				<span>
          <LocationDot />
					{location}
        </span>
			</MetaBar>

			<Hero>
				<Title>FTC TEAM</Title>
				<Subtitle>{teamName}</Subtitle>
				<TeamNumber>
					<span>#</span>
					{teamNumber}
				</TeamNumber>
				<Description>{tagline}</Description>
				<ButtonContainer>
					<PrimaryButton href={"https://www.instagram.com/ftcgearheads16460/"} target="_blank" rel="noopener noreferrer">
						{ctaLabel}
						<IoArrowForward size={14} />
					</PrimaryButton>
					<SecondaryButtonLink to="/version-comparisons">VERSION COMPARISONS</SecondaryButtonLink>
				</ButtonContainer>
			</Hero>
		</Wrapper>
	);
}
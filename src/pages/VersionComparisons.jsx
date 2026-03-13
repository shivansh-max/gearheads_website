import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BarChart, Bar, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import MARK1 from '../assests/m1.png';
import MARK2 from '../assests/m2.png';
import MARK3 from '../assests/m3.png';

const Container = styled.div`
	background-color: #000000;
	color: #ffffff;
	min-height: 100vh;
	font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, sans-serif;
`;

const Nav = styled.nav`
	position: sticky;
	top: 0;
	z-index: 50;
	background-color: rgba(0, 0, 0, 0.95);
	border-bottom: 1px solid #1a1a1a;
	backdrop-filter: blur(10px);
`;

const NavContainer = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: clamp(12px, 3vw, 24px) clamp(16px, 5vw, 48px);
	display: flex;
	align-items: center;
	gap: clamp(16px, 4vw, 48px);
	flex-wrap: wrap;

	@media (max-width: 768px) {
		justify-content: space-between;
	}

	@media (max-width: 480px) {
		flex-direction: column;
		align-items: flex-start;
		gap: 12px;
	}
`;

const NavTitle = styled(Link)`
	font-size: clamp(11px, 2vw, 14px);
	font-weight: 600;
	letter-spacing: 0.5px;
	color: #666;
	text-transform: uppercase;
	text-decoration: none;
	transition: color 0.3s ease;
	white-space: nowrap;

	&:hover {
		color: #3b82f6;
	}
`;

const NavButtons = styled.div`
	display: flex;
	gap: clamp(12px, 3vw, 32px);
	margin-left: auto;

	@media (max-width: 768px) {
		margin-left: 0;
	}

	@media (max-width: 480px) {
		width: 100%;
		flex-wrap: wrap;
		gap: 8px;
		margin-left: 0;
	}
`;

const NavButton = styled.button`
	background: none;
	border: none;
	color: ${props => props.active ? '#3b82f6' : '#666'};
	font-size: clamp(10px, 1.5vw, 14px);
	font-weight: 600;
	letter-spacing: 0.5px;
	cursor: pointer;
	transition: color 0.3s ease;
	text-transform: uppercase;
	white-space: nowrap;

	&:hover {
		color: #3b82f6;
	}
`;

const Header = styled.header`
	max-width: 1200px;
	margin: 0 auto;
	padding: clamp(30px, 8vw, 80px) clamp(16px, 5vw, 48px) clamp(20px, 5vw, 60px);
`;

const Title = styled.h1`
	font-size: clamp(36px, 10vw, 72px);
	font-weight: 700;
	margin-bottom: 12px;
	letter-spacing: -1px;
	color: #ffffff;
	line-height: 1.1;
`;

const TitleBlue = styled(Title)`
	color: #3b82f6;
	margin-bottom: 24px;
`;

const Subtitle = styled.p`
	font-size: clamp(13px, 2.5vw, 18px);
	color: #666;
	line-height: 1.4;
`;

const StatsSection = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: clamp(20px, 5vw, 80px) clamp(16px, 5vw, 48px);
`;

const StatsGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: clamp(16px, 4vw, 48px);

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const StatCard = styled.div`
	border-bottom: 2px solid #1a1a1a;
	padding-bottom: clamp(16px, 3vw, 32px);
`;

const RobotImage = styled.img`
	width: 100%;
	height: auto;
	max-height: 200px;
	object-fit: contain;
	margin-bottom: clamp(12px, 2vw, 24px);
	border-radius: 4px;
`;

const StatLabel = styled.div`
	display: flex;
	align-items: center;
	gap: 12px;
	margin-bottom: clamp(12px, 2vw, 24px);
`;

const StatDot = styled.div`
	width: 8px;
	height: 8px;
	border-radius: 50%;
	background-color: ${props => props.color};
	flex-shrink: 0;
`;

const StatName = styled.span`
	font-size: clamp(11px, 1.5vw, 14px);
	font-weight: 600;
	letter-spacing: 0.5px;
	text-transform: uppercase;
`;

const StatValue = styled.p`
	font-size: clamp(24px, 6vw, 36px);
	font-weight: 700;
	margin-bottom: clamp(12px, 2vw, 24px);
	line-height: 1.2;
`;

const StatRow = styled.div`
	margin-bottom: clamp(12px, 2vw, 24px);
`;

const StatRowLabel = styled.p`
	font-size: clamp(10px, 1.2vw, 12px);
	color: #666;
	margin-bottom: 8px;
	letter-spacing: 0.5px;
	text-transform: uppercase;
`;

const Section = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: clamp(30px, 8vw, 80px) clamp(16px, 5vw, 48px);
	border-top: 1px solid #1a1a1a;
`;

const SectionTitle = styled.h2`
	font-size: clamp(32px, 8vw, 56px);
	font-weight: 700;
	margin-bottom: 8px;
	color: #3b82f6;
	letter-spacing: -1px;
	line-height: 1.1;
`;

const SectionSubtitle = styled.p`
	font-size: clamp(10px, 1.5vw, 12px);
	color: #666;
	margin-bottom: clamp(24px, 5vw, 48px);
	letter-spacing: 1px;
	text-transform: uppercase;
`;

const ChartContainer = styled.div`
	padding: clamp(20px, 4vw, 48px) 0;
	overflow-x: auto;

	&:first-of-type {
		margin-bottom: clamp(24px, 5vw, 64px);
	}
`;

const InsightGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: clamp(16px, 3vw, 32px);
	margin-top: clamp(24px, 5vw, 48px);

	@media (max-width: 1024px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const InsightCard = styled.div`
	border: 1px solid #1a1a1a;
	padding: clamp(16px, 3vw, 32px);
	border-radius: 8px;
`;

const InsightLabel = styled.p`
	font-size: clamp(10px, 1.2vw, 12px);
	font-weight: 600;
	color: #666;
	margin-bottom: 12px;
	letter-spacing: 1px;
	text-transform: uppercase;
`;

const InsightText = styled.p`
	color: #999;
	font-size: clamp(12px, 1.5vw, 14px);
	line-height: 1.6;
`;

const FooterSection = styled.section`
	max-width: 1200px;
	margin: 0 auto;
	padding: clamp(30px, 8vw, 80px) clamp(16px, 5vw, 48px);
	border-top: 1px solid #1a1a1a;
`;

const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: clamp(24px, 5vw, 48px);

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
	}
`;

const FooterColumn = styled.div``;

const FooterTitle = styled.h3`
	font-size: clamp(10px, 1.2vw, 12px);
	font-weight: 600;
	color: #666;
	margin-bottom: clamp(12px, 2vw, 24px);
	letter-spacing: 1px;
	text-transform: uppercase;
`;

const FooterList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
`;

const FooterItem = styled.li`
	color: #999;
	font-size: clamp(12px, 1.5vw, 14px);
	line-height: 1.8;
	margin-bottom: clamp(8px, 1.5vw, 16px);
`;

const Spacer = styled.div`
	height: clamp(20px, 5vw, 80px);
`;

export default function RobotAnalysis() {
	const [activeNav, setActiveNav] = useState('performance');
	const performanceRef = useRef(null);
	const timingRef = useRef(null);
	const capabilitiesRef = useRef(null);

	const robotData = [
		{ name: 'MARK 1', color: '#0ab7f4', points: 4.33, ppm: 0.0467, accuracy: 60, success: 56.87, drops: 5.33 },
		{ name: 'MARK 2', color: '#0ef386', points: 27, ppm: 11, accuracy: 66, success: 95, drops: 1.33 },
		{ name: 'MARK 3', color: '#a930ad', points: 59, ppm: 29.5, accuracy: 65.33, success: 84.67, drops: 0 }
	];

	const performanceMetrics = [
		{ metric: 'Points/Session', mark1: 4.33, mark2: 27, mark3: 59 },
		{ metric: 'Points/Min', mark1: 0.0467, mark2: 11, mark3: 29.5 },
		{ metric: 'Artifacts', mark1: 0, mark2: 11.2, mark3: 19.667 },
		{ metric: 'Accuracy %', mark1: 60, mark2: 66, mark3: 65.33 },
		{ metric: 'Success %', mark1: 56.87, mark2: 95, mark3: 84.67 },
	];

	const timingData = [
		{ phase: 'Intake 3', mark1: 854, mark2: 6230, mark3: 3845 },
		{ phase: 'Set Shot', mark1: 617.67, mark2: 3800, mark3: 2526 },
		{ phase: 'Shoot 3', mark1: 697.67, mark2: 3390, mark3: 3076 },
	];

	const radarData = [
		{ metric: 'Points', mark1: 7, mark2: 45, mark3: 100 },
		{ metric: 'Accuracy', mark1: 90, mark2: 99, mark3: 99 },
		{ metric: 'Reliability', mark1: 20, mark2: 75, mark3: 100 },
		{ metric: 'Speed', mark1: 30, mark2: 70, mark3: 85 },
		{ metric: 'Consistency', mark1: 15, mark2: 60, mark3: 80 },
	];

	const scrollToSection = (ref, navName) => {
		setActiveNav(navName);
		ref.current?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<Container>
			{/* Navigation */}
			<Nav>
				<NavContainer>
					<NavTitle to="/">The GEarheads #16460</NavTitle>
					<NavButtons>
						{[
							{ name: 'performance', label: 'Performance' },
							{ name: 'timing', label: 'Timing' },
							{ name: 'capabilities', label: 'Capabilities' }
						].map((item) => (
							<NavButton
								key={item.name}
								active={activeNav === item.name}
								onClick={() => scrollToSection(
									item.name === 'performance' ? performanceRef : item.name === 'timing' ? timingRef : capabilitiesRef,
									item.name
								)}
							>
								{item.label}
							</NavButton>
						))}
					</NavButtons>
				</NavContainer>
			</Nav>

			{/* Header */}
			<Header>
				<Title>ROBOT</Title>
				<TitleBlue>TELEOPERATION</TitleBlue>
				<Subtitle>Performance Analysis | MARK 1 vs MARK 2 vs MARK 3</Subtitle>
			</Header>

			{/* Stats Cards */}
			<StatsSection>
				<StatsGrid>
					{robotData.map((robot, index) => {
						const robotImages = [MARK1, MARK2, MARK3];
						return (
							<StatCard key={robot.name}>
								<RobotImage src={robotImages[index]} alt={robot.name} />
								<StatLabel>
									<StatDot color={robot.color} />
									<StatName>{robot.name}</StatName>
								</StatLabel>
								<StatRow>
									<StatRowLabel>Points/Session</StatRowLabel>
									<StatValue>{robot.points}</StatValue>
								</StatRow>
								<StatRow>
									<StatRowLabel>Points/Min</StatRowLabel>
									<StatValue>{robot.ppm.toFixed(2)}</StatValue>
								</StatRow>
								<StatRow>
									<StatRowLabel>Drops</StatRowLabel>
									<StatValue>{robot.drops}</StatValue>
								</StatRow>
							</StatCard>
						);
					})}
				</StatsGrid>
			</StatsSection>

			{/* Performance Section */}
			<Section ref={performanceRef}>
				<SectionTitle>PERFORMANCE</SectionTitle>
				<SectionSubtitle>Scoring metrics across all robots</SectionSubtitle>

				<ChartContainer>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={performanceMetrics} margin={{ top: 20, right: 10, left: 0, bottom: 80 }}>
							<CartesianGrid stroke="#1a1a1a" strokeDasharray="0" />
							<XAxis dataKey="metric" stroke="#666" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 11 }} />
							<YAxis stroke="#666" tick={{ fontSize: 11 }} />
							<Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', fontSize: '12px' }} />
							<Bar dataKey="mark1" fill="#0ab7f4" radius={[4, 4, 0, 0]} />
							<Bar dataKey="mark2" fill="#0ef386" radius={[4, 4, 0, 0]} />
							<Bar dataKey="mark3" fill="#a930ad" radius={[4, 4, 0, 0]} />
						</BarChart>
					</ResponsiveContainer>
				</ChartContainer>

				<ChartContainer>
					<ResponsiveContainer width="100%" height={300}>
						<LineChart data={performanceMetrics} margin={{ top: 20, right: 10, left: 0, bottom: 80 }}>
							<CartesianGrid stroke="#1a1a1a" strokeDasharray="0" />
							<XAxis dataKey="metric" stroke="#666" angle={-45} textAnchor="end" height={100} tick={{ fontSize: 11 }} />
							<YAxis stroke="#666" tick={{ fontSize: 11 }} />
							<Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', fontSize: '12px' }} />
							<Line type="monotone" dataKey="mark1" stroke="#0ab7f4" strokeWidth={2} dot={false} />
							<Line type="monotone" dataKey="mark2" stroke="#0ef386" strokeWidth={2} dot={false} />
							<Line type="monotone" dataKey="mark3" stroke="#a930ad" strokeWidth={2} dot={false} />
						</LineChart>
					</ResponsiveContainer>
				</ChartContainer>
			</Section>

			{/* Timing Section */}
			<Section ref={timingRef}>
				<SectionTitle>TIMING</SectionTitle>
				<SectionSubtitle>Operation duration in milliseconds</SectionSubtitle>

				<ChartContainer>
					<ResponsiveContainer width="100%" height={300}>
						<BarChart data={timingData} margin={{ top: 20, right: 10, left: 0, bottom: 20 }}>
							<CartesianGrid stroke="#1a1a1a" strokeDasharray="0" />
							<XAxis dataKey="phase" stroke="#666" tick={{ fontSize: 11 }} />
							<YAxis stroke="#666" tick={{ fontSize: 11 }} />
							<Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', fontSize: '12px' }} formatter={(value) => value.toFixed(0)} />
							<Bar dataKey="mark1" fill="#0ab7f4" radius={[4, 4, 0, 0]} />
							<Bar dataKey="mark2" fill="#0ef386" radius={[4, 4, 0, 0]} />
							<Bar dataKey="mark3" fill="#a930ad" radius={[4, 4, 0, 0]} />
						</BarChart>
					</ResponsiveContainer>
				</ChartContainer>

				<InsightGrid>
					<InsightCard>
						<InsightLabel>Mark 1</InsightLabel>
						<InsightText>Fastest raw speed but lower throughput on artifact scoring</InsightText>
					</InsightCard>
					<InsightCard>
						<InsightLabel>Mark 2</InsightLabel>
						<InsightText>Moderate timing with high success rate and consistency</InsightText>
					</InsightCard>
					<InsightCard>
						<InsightLabel>Mark 3</InsightLabel>
						<InsightText>Fastest cycle time with highest artifact throughput</InsightText>
					</InsightCard>
				</InsightGrid>
			</Section>

			{/* Capabilities Section */}
			<Section ref={capabilitiesRef}>
				<SectionTitle>CAPABILITIES</SectionTitle>
				<SectionSubtitle>Normalized performance radar</SectionSubtitle>

				<ChartContainer>
					<ResponsiveContainer width="100%" height={350}>
						<RadarChart data={radarData} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
							<PolarGrid stroke="#333" />
							<PolarAngleAxis dataKey="metric" stroke="#666" tick={{ fontSize: 11 }} />
							<PolarRadiusAxis stroke="#444" tick={{ fontSize: 10 }} />
							<Radar name="MARK 1" dataKey="mark1" stroke="#0ab7f4" fill="#0ab7f4" fillOpacity={0.15} />
							<Radar name="MARK 2" dataKey="mark2" stroke="#0ef386" fill="#0ef386" fillOpacity={0.15} />
							<Radar name="MARK 3" dataKey="mark3" stroke="#a930ad" fill="#a930ad" fillOpacity={0.15} />
							<Legend wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
							<Tooltip contentStyle={{ backgroundColor: '#000', border: '1px solid #333', color: '#fff', fontSize: '12px' }} />
						</RadarChart>
					</ResponsiveContainer>
				</ChartContainer>
			</Section>

			{/* Insights Footer */}
			<FooterSection>
				<FooterGrid>
					<FooterColumn>
						<FooterTitle>Key Insights</FooterTitle>
						<FooterList>
							<FooterItem>• MARK 3 scores 13.6x more points per session than MARK 1</FooterItem>
							<FooterItem>• MARK 2 achieves 95% intake success rate—most reliable</FooterItem>
							<FooterItem>• MARK 3 has zero drops/jams—best reliability</FooterItem>
							<FooterItem>• MARK 3 cycle time is 38% faster than MARK 2</FooterItem>
						</FooterList>
					</FooterColumn>
					<FooterColumn>
						<FooterTitle>Recommendations</FooterTitle>
						<FooterList>
							<FooterItem>• Deploy MARK 3 for maximum scoring in competition</FooterItem>
							<FooterItem>• Use MARK 2 for consistent, reliable performance</FooterItem>
							<FooterItem>• Optimize MARK 1 intake and shooter mechanisms</FooterItem>
							<FooterItem>• MARK 3's speed enables more match attempts</FooterItem>
						</FooterList>
					</FooterColumn>
				</FooterGrid>
			</FooterSection>

			<Spacer />
		</Container>
	);
}
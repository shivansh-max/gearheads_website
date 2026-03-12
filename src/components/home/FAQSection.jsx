import { createGlobalStyle, keyframes } from 'styled-components';
import styled from 'styled-components';
import { useState } from 'react';
import { IoAdd, IoRemove } from 'react-icons/io5';

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

const FAQContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  animation: ${fadeUp} .6s .25s ease both;
`;

const FAQItem = styled.div`
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, .08);
  padding: 1.5rem 0;
  transition: all .3s ease;

  &:last-child {
    border-bottom: 1px solid rgba(255, 255, 255, .08);
  }
`;

const FAQQuestion = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  border: none;
  color: var(--text);
  font-family: var(--font-body);
  font-size: .95rem;
  font-weight: 400;
  letter-spacing: .02em;
  text-align: left;
  cursor: pointer;
  padding: 0;
  transition: color .25s ease;

  &:hover {
    color: var(--accent-2);
  }

  @media (max-width: 768px) {
    font-size: .85rem;
  }
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  color: var(--accent-2);
  flex-shrink: 0;
  transition: transform .3s ease;
  transform: ${props => props.isOpen ? 'rotate(0deg)' : 'rotate(0deg)'};
`;

const FAQAnswer = styled.div`
  max-height: ${props => props.isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: max-height .3s ease, padding .3s ease;
  padding: ${props => props.isOpen ? '1.2rem 0 0 0' : '0'};
`;

const AnswerText = styled.p`
  color: var(--muted);
  font-size: .85rem;
  line-height: 1.75;
  margin: 0;
`;

const FAQSection = () => {
	const [openIndex, setOpenIndex] = useState(null);

	const faqs = [
		{
			question: 'What is FTC and what does GEarheads 16460 do?',
			answer: 'FTC (FIRST Tech Challenge) is a competitive robotics program for students in grades 7-12. GEarheads 16460 is a student-led team based in Brookfield, Wisconsin that designs, builds, and programs robots to compete in FTC challenges. We use a 100% CAD-based design process with custom-fabricated parts made using CNC milling, 3D printing, and sheet metal manufacturing.'
		},
		{
			question: 'How long has your team been around?',
			answer: 'Our team has been in FIRST for 9 years. We started in FLL and transitioned to FTC in 2019, making the 2025-2026 season our 7th competitive FTC season. Throughout our journey, we\'ve grown from learning the basics to becoming a recognized team in the Wisconsin robotics community.'
		},
		{
			question: 'Do you compete in local, state, and national competitions?',
			answer: 'Yes, we compete at all levels. We participate in local qualifiers, host our own "Skirmish in Brookfield" Rookie Qualifier, compete at Wisconsin state championships, and have been selected to represent Wisconsin at the 2026 FTC National Governor\'s Cup in Washington D.C.'
		},
		{
			question: 'How do you fund your team and robots?',
			answer: 'We\'re funded through a combination of sources: donations from local companies we\'ve built strong partnerships with, grants from the Elmbrook School District, and the Wisconsin DPI grant. We\'ve also actively advocated to help grow grant opportunities for robotics teams statewide.'
		},
		{
			question: 'What have been your team\'s biggest achievements so far?',
			answer: 'Key achievements include: qualifying to represent Wisconsin at the 2026 FTC Governor\'s Cup in Washington D.C., earning the 1st Place Inspire Award at the 2024 Wisconsin State Championship, hosting a Rookie Qualifier, distributing 150+ computers to underserved students and FIRST teams over 5 years, running sustained STEM programs at Milwaukee Children\'s Hospital and the VA Hospital, and supporting the Wisconsin Production Hub initiative.'
		},
		{
			question: 'Do you offer any outreach programs or STEM events for the community?',
			answer: 'Absolutely. We run STEM workshops at Milwaukee Children\'s Hospital for long-term patients, robotics programming at the VA Hospital\'s Spinal Cord Injury Unit, computer refurbishment and donation drives (50+ devices this season), fabrication coaching for other FTC teams, a DIY CNC project helping rookie teams build their own CNCs, and a 5-week webinar series for rookie teams.'
		},
		{
			question: 'How often does the team meet and practice?',
			answer: 'We organize our season into 2-week SPRINTs with weekly plan reviews and sprint recaps. We attend multiple early-season competitions and scrimmages for testing and validation. This structured approach keeps us focused and ensures continuous improvement throughout the competitive season.'
		},
		{
			question: 'How do you decide who does what on the team?',
			answer: 'Members identify and set goals based on their interests, expertise, and willingness to learn. Each member defines individual learning goals aligned with team objectives. We use a structured approach with defined responsibilities, execution lanes, and accountability through our SPRINT planning system to ensure everyone contributes meaningfully.'
		},
		{
			question: 'What does the "GE" in GEarheads stand for?',
			answer: 'The "GE" comes from our partnership with GE Healthcare. We use GE Healthcare\'s professional DHF (Design History File) engineering framework—the same rigorous engineering process used in medical product development for MRI, CT, and X-ray machines. This gives us access to enterprise-grade engineering practices that elevate our robot design and manufacturing.'
		}
	];

	const toggleFAQ = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			<GlobalStyle />
			<Section>
				<Container>
					<Title>Frequently Asked Questions</Title>

					<FAQContainer>
						{faqs.map((faq, index) => (
							<FAQItem key={index}>
								<FAQQuestion onClick={() => toggleFAQ(index)}>
									{faq.question}
									<IconWrapper isOpen={openIndex === index}>
										{openIndex === index ? (
											<IoRemove size={20} />
										) : (
											<IoAdd size={20} />
										)}
									</IconWrapper>
								</FAQQuestion>
								<FAQAnswer isOpen={openIndex === index}>
									<AnswerText>{faq.answer}</AnswerText>
								</FAQAnswer>
							</FAQItem>
						))}
					</FAQContainer>
				</Container>
			</Section>
		</>
	);
};

export default FAQSection;
import { createGlobalStyle, keyframes } from 'styled-components';
import styled from 'styled-components';
import { MdEmail, MdPhone } from 'react-icons/md';
import {FaInstagram, FaTiktok, FaBehance, FaDribbble, FaTwitter, FaMedium, FaPhone, FaMailchimp, FaRobot, FaYoutube} from 'react-icons/fa';
import { IoArrowForward } from 'react-icons/io5';
import {GoMail} from "react-icons/go";

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

const Section = styled.footer`
  position: relative;
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-body);
  padding: 4rem 5vw 2rem;
  border-top: 1px solid rgba(255, 255, 255, .06);

  @media (max-width: 768px) {
    padding: 2rem 6vw 1.5rem;
  }
`;

const Container = styled.div`
  max-width: 100%;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 3rem;
  animation: ${fadeUp} .6s .15s ease both;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Logo = styled.h2`
  font-family: var(--font-display);
  font-size: 2rem;
  line-height: 1.2;
  letter-spacing: .01em;
  color: var(--text);
  text-transform: uppercase;
  margin: 0 0 .5rem 0;
`;

const TeamNumber = styled.p`
  font-family: var(--font-display);
  font-size: 1.6rem;
  color: var(--text);
  margin: 0;
  
  &::before {
    content: '#';
    color: var(--accent-2);
    margin-right: .2em;
  }
`;

const Copyright = styled.p`
  font-size: .7rem;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: var(--muted);
  margin: 1.5rem 0 0 0;
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2rem;

  @media (max-width: 768px) {
    align-items: flex-start;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const ContactBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  padding: .85rem 2rem;
  background: transparent;
  color: var(--text);
  font-family: var(--font-body);
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  border: 1px solid rgba(232, 234, 240, .2);
  border-radius: 100px;
  transition: all .25s ease;
  cursor: pointer;

  &:hover {
    border-color: var(--accent-2);
    color: var(--accent-2);
    transform: translateY(-2px);
  }

  svg {
    transition: transform .2s;
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

const PrimaryBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .55rem;
  padding: .85rem 2rem;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-body);
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  text-decoration: none;
  border: none;
  border-radius: 100px;
  transition: all .25s ease;
  cursor: pointer;

  &:hover {
    background: #1a3de0;
    transform: translateY(-2px);
  }

  svg {
    transition: transform .2s;
  }

  &:hover svg {
    transform: translate(2px, -2px);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: flex-end;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .4rem;
  color: var(--muted);
  text-decoration: none;
  font-size: .85rem;
  letter-spacing: .05em;
  transition: color .25s ease;
  cursor: pointer;

  &:hover {
    color: var(--accent-2);
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, .06);
  margin: 2rem 0;
`;

const ContactInfo = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  animation: ${fadeUp} .6s .2s ease both;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContactItem = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  color: var(--muted);
  text-decoration: none;
  font-size: .85rem;
  transition: color .25s ease;

  &:hover {
    color: var(--accent-2);
  }

  svg {
    font-size: 1.1rem;
    color: var(--accent-2);
  }
`;

const FooterSection = () => {
	const socialLinks = [

		{
			name: 'Instagram',
			url: 'https://instagram.com/ftcgearheads16460',
			icon: FaInstagram
		},
		{
			name: 'TikTok',
			url: 'www.tiktok.com/@gearheads16460',
			icon: FaTiktok
		},
		{
			name: 'FIRST',
			url: 'https://ftc-events.firstinspires.org/team/16460',
			icon: FaRobot
		},
		// {
		// 	name: 'Email',
		// 	url: 'mailto:ftcgearheads@gmail.com',
		// 	icon: GoMail
		// },
		// {
		// 	name: 'Phone',
		// 	url: 'tel:+12624089209',
		// 	icon: FaPhone
		// },
		{
			name: 'Youtube',
			url: 'https://www.youtube.com/@ftcgearheads',
			icon: FaYoutube
		}

	];

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<GlobalStyle />
			<Section>
				<Container>
					<FooterContent>
						<LeftSection>
							<Logo>GEarheads</Logo>
							<TeamNumber>16460</TeamNumber>
							<Copyright>GEarheads © 2025</Copyright>
						</LeftSection>

						<RightSection>
							<ButtonGroup>
								<ContactBtn href="mailto:ftcgearheads@gmail.com">
									Contact VIA Email
									<IoArrowForward size={14} />
								</ContactBtn>
								<PrimaryBtn onClick={scrollToTop}>
									Back to the Top
									<IoArrowForward size={14} />
								</PrimaryBtn>
							</ButtonGroup>

							<SocialLinks>
								{socialLinks.map((social, index) => {
									const IconComponent = social.icon;
									return (
										<SocialLink key={index} href={social.url} target="_blank" rel="noopener noreferrer">
											<IconComponent />
											{social.name}
										</SocialLink>
									);
								})}
							</SocialLinks>
						</RightSection>
					</FooterContent>

					<Divider />

					<ContactInfo>
						<ContactItem href="mailto:ftcgearheads@gmail.com">
							<MdEmail />
							ftcgearheads@gmail.com
						</ContactItem>
						<ContactItem href="tel:+12624089209">
							<MdPhone />
							+1 (262) - 408 - 9209
						</ContactItem>
					</ContactInfo>
				</Container>
			</Section>
		</>
	);
};

export default FooterSection;
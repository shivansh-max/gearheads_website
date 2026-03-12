import { createGlobalStyle, keyframes } from 'styled-components';
import styled from 'styled-components';
import { useState } from 'react';
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { IoArrowForward } from 'react-icons/io5';

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

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  animation: ${fadeUp} .6s .25s ease both;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
`;

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: var(--accent-2);
`;

const ContactText = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContactLabel = styled.span`
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
  margin-bottom: .3rem;
`;

const ContactValue = styled.a`
  font-size: .95rem;
  color: var(--text);
  text-decoration: none;
  transition: color .25s ease;

  &:hover {
    color: var(--accent-2);
  }
`;

const PhoneBox = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem;
  border: 1px solid rgba(38, 80, 245, .3);
  border-radius: 8px;
  background: rgba(38, 80, 245, .05);
  text-decoration: none;
  transition: all .25s ease;

  &:hover {
    border-color: rgba(38, 80, 245, .6);
    background: rgba(38, 80, 245, .1);
  }
`;

const PhoneIcon = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-2);
  flex-shrink: 0;
`;

const PhoneNumber = styled.span`
  font-size: .85rem;
  color: var(--text);
`;

const RightSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4rem;
`;

const Label = styled.label`
  font-size: .75rem;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--muted);
`;

const Input = styled.input`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(232, 234, 240, .2);
  padding: .8rem 0;
  color: var(--text);
  font-family: var(--font-body);
  font-size: .9rem;
  transition: border-color .25s ease;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    outline: none;
    border-bottom-color: var(--accent-2);
  }
`;

const TextArea = styled.textarea`
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(232, 234, 240, .2);
  padding: .8rem 0;
  color: var(--text);
  font-family: var(--font-body);
  font-size: .9rem;
  resize: vertical;
  min-height: 60px;
  transition: border-color .25s ease;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    outline: none;
    border-bottom-color: var(--accent-2);
  }
`;

const SubmitBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: .6rem;
  padding: .95rem 2rem;
  background: var(--accent);
  color: #fff;
  font-family: var(--font-body);
  font-size: .8rem;
  font-weight: 700;
  letter-spacing: .12em;
  text-transform: uppercase;
  border: none;
  border-radius: 100px;
  cursor: pointer;
  transition: all .25s ease;
  margin-top: .5rem;

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

const ContactSection = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: ''
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData(prev => ({
			...prev,
			[name]: value
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const subject = encodeURIComponent('New Contact Form Submission');
		const body = encodeURIComponent(
			`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
		);

		window.location.href = `mailto:ftcgearheads@gmail.com?subject=${subject}&body=${body}`;

		setFormData({ name: '', email: '', message: '' });
	};

	return (
		<>
			<GlobalStyle />
			<Section>
				<Container>
					<Title>Want to Contact Us?</Title>

					<Content>
						<LeftSection>
							<ContactItem>
								<IconWrapper>
									<MdEmail size={20} />
								</IconWrapper>
								<ContactText>
									<ContactLabel>Email</ContactLabel>
									<ContactValue href="mailto:ftcgearheads@gmail.com">ftcgearheads@gmail.com</ContactValue>
								</ContactText>
							</ContactItem>

							<PhoneBox href="tel:+12624089209">
								<PhoneIcon>
									<MdPhone size={20} />
								</PhoneIcon>
								<PhoneNumber>+1 (262) - 408 - 9209</PhoneNumber>
							</PhoneBox>

							<ContactItem>
								<IconWrapper>
									<MdLocationOn size={20} />
								</IconWrapper>
								<ContactText>
									<ContactLabel>Location</ContactLabel>
									<ContactValue as="span">16900 Gebhardt Rd. Brookfield, WI 53005</ContactValue>
								</ContactText>
							</ContactItem>
						</LeftSection>

						<RightSection>
							<Form onSubmit={handleSubmit}>
								<FormGroup>
									<Label htmlFor="name">Your Name</Label>
									<Input
										id="name"
										name="name"
										type="text"
										placeholder="Your name"
										value={formData.name}
										onChange={handleChange}
										required
									/>
								</FormGroup>

								<FormGroup>
									<Label htmlFor="email">Your Email</Label>
									<Input
										id="email"
										name="email"
										type="email"
										placeholder="Your email"
										value={formData.email}
										onChange={handleChange}
										required
									/>
								</FormGroup>

								<FormGroup>
									<Label htmlFor="message">Your Message</Label>
									<TextArea
										id="message"
										name="message"
										placeholder="Your message"
										value={formData.message}
										onChange={handleChange}
										required
									/>
								</FormGroup>

								<SubmitBtn type="submit">
									Send Message
									<IoArrowForward size={14} />
								</SubmitBtn>
							</Form>
						</RightSection>
					</Content>
				</Container>
			</Section>
		</>
	);
};

export default ContactSection;
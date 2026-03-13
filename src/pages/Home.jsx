import HeroSection from "../components/home/HeroSection";
import TEMPIMAGE from "./../assests/temp.png"
import WhoAreWeSection from "../components/home/WhoWeAre";
import TimelineSection from "../components/home/TimelineSection";
import ContactSection from "../components/home/Contact";
import FAQSection from "../components/home/FAQSection";
import ValueSection from "../components/home/ValueSection";
import TeamSection from "../components/home/MeetTheTeam";
import SponsorsSection from "../components/home/SponsorsSection";

export const Home = () => {
	return (
		<>
			<HeroSection robotImage={TEMPIMAGE}/>
			<WhoAreWeSection />
			<TimelineSection />
			<ValueSection />
			<SponsorsSection />
			<TeamSection />
			<ContactSection />
			<FAQSection />
		</>
	)
}

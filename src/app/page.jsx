import { AboutUs } from "@/components/Home/AboutUs/Index";
import { Form } from "@/components/Home/Form";
import { Intro } from "@/components/Home/Intro";
import { OurServices } from "@/components/Home/OurServices";
import { Header } from "@/components/shared/Header";

export default function Home() {
	return (
		<>
			<Header />
			<Intro />
			<AboutUs />
			<OurServices />
			<Form />
		</>
	);
}

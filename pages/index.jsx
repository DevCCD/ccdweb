import { idiomaAtom } from "../src/atoms/idiomAtom";
import MainLayout from "../src/layouts/MainLayout";
import { useAtom } from "jotai";

import Hero from "../src/components/Hero";
import {
	ContactoSection,
	NosotrosSection,
	TestimonialsSection,
	ServiciosSection,
} from "../src/components/Sections/home";

const HomePage = () => {
	const [idioma] = useAtom(idiomaAtom);

	return (
		<MainLayout>
			<Hero idioma={idioma} />
			{/* <NosotrosSection idioma={idioma} /> */}
			<ServiciosSection idioma={idioma} />
			<ContactoSection idioma={idioma} />
			{/* <TestimonialsSection idioma={idioma} /> */}
		</MainLayout>
	);
};

export default HomePage;

import ContactForm from "./components/ContactForm";
import Earnings from "./components/Earnings";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroBlock from "./components/HeroBlock";
import HowItWorks from "./components/HowItWorks";
import Promote from "./components/Promote";

export default function Home() {
  return (
    <>
      <div className="bg-[url('/img/hero-bg.svg')] bg-no-repeat bg-[length:60%] bg-[position:50%_10%]">
        <Header />
        <HeroBlock />
      </div>
      <Promote />
      <HowItWorks />
      <Earnings />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
}

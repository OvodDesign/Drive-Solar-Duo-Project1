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
      <div className="bg-[url('/img/bg-hero.png')] bg-no-repeat bg-[length:800px] bg-[position:50%_70%]">
        <Header />
        <HeroBlock />
      </div>
      <Promote />
      <HowItWorks />
      <Earnings />
      <FAQ />
      <div className="pb-20 px-20 bg-[url('/img/footer-bg.png')] bg-no-repeat bg-[position:50%_50%]">
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}

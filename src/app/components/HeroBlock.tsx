import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function HeroBlock() {
  return (
    <section
      id="hero-block"
      className="container max-w-xl mx-auto flex-col py-20 justify-center items-center"
    >
      <h1 className="w-full font-raleway text-[73.34px] font-bold leading-[73.34px] text-center">
        Drive Solar <br />
        Make Life Easier <br />
        Connect
      </h1>
      <div className="w-full flex justify-center mt-10">
        <Button
          asChild
          className="w-56 h-10 font-raleway text-[16px] font-bold leading-[24px] text-center"
        >
          <Link href="/#contact-us">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
}

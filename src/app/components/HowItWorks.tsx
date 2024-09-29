import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconNumber1, IconNumber2, IconNumber3 } from "./icons/icons";
import Image from "next/image";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="container mx-auto px-4 bg-[url('/img/howItWorks.svg')] bg-no-repeat bg-[length:25%] bg-[position:95%_50%]"
    >
      <h2 className="font-raleway text-[60px] font-bold leading-[72px] text-left mb-8">
        How it Works
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 sm:col-span-3 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <IconNumber1 />
              Connect With People
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
              This renewable energy source is essential for sustainable power
              systems, reducing carbon footprints and promoting eco-friendly
              solutions
            </p>
            <Image
              width={238}
              height={257}
              layout="responsive"
              src="/img/solar-panel.png"
              alt="Image"
              className="w-full h-64 rounded-md object-cover"
            />
          </CardContent>
        </Card>
        <Card className="col-span-12 sm:col-span-3 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <IconNumber2 />
              Connect With People
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
              These stations allow EV owners to recharge their cars quickly and
              conveniently, ensuring efficient transportation
            </p>
            <Image
              width={238}
              height={257}
              layout="responsive"
              src="/img/charger.png"
              alt="Image"
              className="w-full h-64 rounded-md object-cover"
            />
          </CardContent>
        </Card>
        <Card className="col-span-12 sm:col-span-3 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <IconNumber3 />
              Connect With People
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
              Imagine a world where you can manage all your energy and charging
              needs in one place. From solar panel setups to electric vehicle
              charging stations
            </p>
            <Image
              width={238}
              height={257}
              layout="responsive"
              src="/img/man-and-car.png"
              alt="Image"
              className="w-full h-64 rounded-md object-cover"
            />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

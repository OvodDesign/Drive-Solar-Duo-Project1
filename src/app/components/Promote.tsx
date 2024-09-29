import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import {
  ConsoleIcon,
  PCIcon,
  SoulutionIcon,
  StarIcon,
  SunIcon,
  UniqueSolutionIcon,
} from "./icons/icons";

export default function Promote() {
  return (
    <section id="promote" className="container mx-auto px-4 py-20">
      <h2 className="text-[60px] font-bold leading-[72px] text-left mb-8">
        What We Promote
      </h2>
      <div className="grid grid-cols-12 gap-4">
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <SunIcon />
              Use Sun Energy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
              Harness the limitless power of the sun to create sustainable
              energy solutions. Reduce your carbon footprint, lower energy costs
            </p>
          </CardContent>
        </Card>
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <StarIcon />
              Connect With People
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
              We empower communities to embrace solar energy, making it easier
              to share resources and ideas for a better world
            </p>
          </CardContent>
        </Card>
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <PCIcon />
              Share Energy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
              Imagine a world where energy is shared effortlessly. Our solutions
              allow individuals and businesses to distribute and share solar
              power
            </p>
          </CardContent>
        </Card>
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3 row-span-1 lg:row-span-2">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <SoulutionIcon />
              Commercial Solutions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4">
              <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
                You can earn money from solar energy while you are away from
                home, and not only sell it to the government
              </p>
              <Image
                width={238}
                height={257}
                layout="responsive"
                src="/img/man.png"
                alt="man"
                className="hidden lg:block"
              />
            </div>
          </CardContent>
        </Card>
        <Card className="col-span-12 sm:col-span-6 lg:col-span-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 lg:col-span-6">
              <CardHeader>
                <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
                  <UniqueSolutionIcon />
                  Unique Solution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
                  Our unique solar solutions combine cutting-edge technology
                  with user-centric designs, making renewable energy more
                  accessible and efficient
                </p>
              </CardContent>
            </div>
            <div className="hidden lg:flex col-span-6 justify-center items-center my-4">
              <Image
                width={218}
                height={214}
                layout="responsive"
                src="/img/house.png"
                alt="house"
              />
            </div>
          </div>
        </Card>
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-2 font-inter text-[19.77px] font-semibold leading-[23.73px] text-left">
              <ConsoleIcon />
              Useful App
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-6">
              Manage your solar energy system seamlessly with our user-friendly
              app. Track energy production, monitor usage, and control your
              solar setup from anywhere
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

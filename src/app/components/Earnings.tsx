import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TickIcon } from "./icons/icons";

export default function Earnings() {
  return (
    <section
      id="earnings"
      className="container mx-auto px-4 py-20 grid grid-cols-12 gap-4"
    >
      <div className="col-span-12 lg:col-span-4 grid grid-cols-1 gap-6">
        <h2 className="text-[60px] font-bold leading-[72px] text-left">
          Earnings
        </h2>
        <p className="font-inter text-[14px] font-normal leading-[21px] text-left text-[#8987A1] mb-9">
          Take a look at some of our calculation for standard individual
          charging station to see how you can help society and your self.
        </p>
        <Card>
          <CardHeader>
            <CardTitle className="font-raleway text-[34.07px] font-bold leading-[40.88px] text-left">
              Let’s Schedule a Meeting
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-[#F7C33D] font-raleway text-[16px] font-bold leading-[24px] text-center">
              Schedule Meeting
            </Button>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-12 lg:col-span-6">
        <Card className="col-span-12 sm:col-span-6 lg:col-span-3">
          <CardHeader>
            <CardTitle className="grid grid-cols-1 gap-4 font-raleway text-[30px] font-bold leading-[36px] text-left">
              Use Sun Energy
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="font-inter text-[14px] font-normal leading-[21px] text-left">
              Harness the limitless power of the sun to create sustainable
              energy solutions. Reduce your carbon footprint, lower energy costs
            </p>
            <div className="grid grid-cols-12 gap-4 mt-12">
              <ul className="col-span-6 grid gap-2">
                <li className="flex gap-2">
                  <TickIcon />
                  Charge your Car
                </li>
                <li className="flex gap-2">
                  <TickIcon />
                  Share your station
                </li>
                <li className="flex gap-2">
                  <TickIcon />
                  Earn from sharing
                </li>
              </ul>
              <ul className="col-span-6 grid gap-2">
                <li className="flex gap-2">
                  <TickIcon />
                  Control everything
                </li>
                <li className="flex gap-2">
                  <TickIcon />
                  No limits
                </li>
                <li className="flex gap-2">
                  <TickIcon />
                  Become happy
                </li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <div className="p-6 w-full bg-[#F5F8FF]">
              <span className="font-inter text-[60px] font-bold leading-[72px] text-left">
                €150
              </span>
              <span className="font-inter text-[20px] font-normal leading-[30px] text-left">
                /mo
              </span>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div className="col-span-12 sm:col-span-2 lg:col-span-2">
        <div className="h-full rounded-lg bg-[url('/img/car-charger.png')] bg-no-repeat bg-cover"></div>
      </div>
    </section>
  );
}

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Earnings() {
  return (
    <section
      id="earnings"
      className="container mx-auto px-4 py-20 grid grid-cols-12 gap-4"
    >
      <div className="col-span-3 grid grid-cols-1 gap-6">
        <h2 className="font-raleway text-[60px] font-bold leading-[72px] text-left">
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
      <div className="col-span-6">
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
            <div className="grid grid-cols-12 gap-4">
              <ul className="col-span-6">
                <li>Charge your Car</li>
                <li>Share your station</li>
                <li>Earn from sharing</li>
              </ul>
              <ul className="col-span-6">
                <li>Control everything</li>
                <li>No limits</li>
                <li>Become happy</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <div className="p-4 w-full bg-[#F5F8FF]">
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
    </section>
  );
}

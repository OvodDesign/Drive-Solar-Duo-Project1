"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-20 grid grid-cols-12 gap-4 bg-[url('/img/faq.svg')] bg-no-repeat bg-[length:50%] bg-[position:0%_40%]">
      <div className="col-span-4">
        <h2 className="font-raleway text-[60px] font-bold leading-[72px] text-left">
          Frequently <br /> Asked <br /> Questions
        </h2>
      </div>
      <div className="col-span-8">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="font-raleway text-[18px] font-bold leading-[21.6px] text-left">
              How can I contact Drive Solar?
            </AccordionTrigger>
            <AccordionContent className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#8987A1]">
              You can reach us through our contact form on our website or by
              emailing us at hello@drivesolar.com We typically respond within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="font-raleway text-[18px] font-bold leading-[21.6px] text-left">
              What services do you offer?
            </AccordionTrigger>
            <AccordionContent className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#8987A1]">
              You can reach us through our contact form on our website or by
              emailing us at hello@drivesolar.com We typically respond within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="font-raleway text-[18px] font-bold leading-[21.6px] text-left">
              How to connect my solar station?
            </AccordionTrigger>
            <AccordionContent className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#8987A1]">
              You can reach us through our contact form on our website or by
              emailing us at hello@drivesolar.com We typically respond within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="font-raleway text-[18px] font-bold leading-[21.6px] text-left">
              How to earn from it?
            </AccordionTrigger>
            <AccordionContent className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#8987A1]">
              You can reach us through our contact form on our website or by
              emailing us at hello@drivesolar.com We typically respond within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="font-raleway text-[18px] font-bold leading-[21.6px] text-left">
              Is there any fee for connecting my charging station?
            </AccordionTrigger>
            <AccordionContent className="font-inter text-[16px] font-normal leading-[24px] text-left text-[#8987A1]">
              You can reach us through our contact form on our website or by
              emailing us at hello@drivesolar.com We typically respond within 24
              hours.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

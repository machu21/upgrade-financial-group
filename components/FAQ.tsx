"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What are living benefits?",
      answer: "Living benefits let you access a portion of your life insurance death benefit while you're still alive if you're diagnosed with a qualifying critical, chronic, or terminal illness.",
    },
    {
      question: "Do living benefits cost extra?",
      answer: "Some carriers include them at no cost, while others may charge. The earlier you get coverage, the better your options.",
    },
    {
      question: "Will using living benefits reduce my death benefit?",
      answer: "Yes—any amount accessed early is deducted from the death benefit your beneficiaries receive.",
    },
    {
      question: "What illnesses qualify?",
      answer: "Typically includes heart attack, stroke, cancer, major organ failure, ALS, and chronic conditions requiring assistance with daily living.",
    },
    {
      question: "Can I qualify with pre-existing conditions?",
      answer: "It depends on the condition and carrier. Many individuals still qualify depending on their situation.",
    },
    {
      question: "Is the money taxable?",
      answer: "In most cases, living benefits are received tax-free. Always consult a tax professional.",
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden">

      {/* 🌌 Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/question-mark-bg.jpg"
          alt="FAQ Background"
          className="w-full h-full object-cover opacity-20 scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>

      {/* ✨ Glow Effects */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/20 blur-[120px] opacity-30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-primary font-semibold mb-3">
            FAQ
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Everything you need to know
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Clear answers to help you understand how living benefits protect you and your future.
          </p>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-4">

          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/10 data-[state=open]:border-primary/60 data-[state=open]:bg-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.12)]"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground py-6 transition-colors duration-200 group-hover:text-primary">
                {faq.question}
              </AccordionTrigger>

              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6 pr-4 animate-in fade-in-0 slide-in-from-top-2 duration-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}

        </Accordion>
      </div>
    </section>
  );
}
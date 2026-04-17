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
      answer: "Living benefits allow you to access up to 80%–100% of your life insurance policy while you’re still living—if you experience a qualifying condition such as terminal illness, chronic illness (including long-term care needs with 2 ADLs), critical illness, injury, or Alzheimer’s.",
    },
    {
      question: "Do living benefits cost extra?",
      answer: "Some plans include living benefits at no additional cost, while others may have a small fee depending on the coverage. What matters most is getting started early, when you’re younger and healthier…so you can secure better options and more affordable rates.",
    },
    {
      question: "Will using living benefits reduce my death benefit?",
      answer: "With living benefits, the death benefit may be fully exhausted, allowing you to access 80%–100% of your policy’s value while you’re alive.",
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
    {
      question: "Do you do medical assessment? ",
      answer: "NO,  it depends on the carrier if you do not have medical record there is a chance they will ask you to get one",
    }
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

      {/* 💫 Glow Effects */}
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
              /* CHANGED: 
                 1. Normal State: bg-white/5, text-foreground (dark theme)
                 2. Open State: bg-white, border-white, shadow-xl (light theme)
              */
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl px-6 transition-all duration-300 hover:border-primary/40 hover:bg-white/10 data-[state=open]:border-white data-[state=open]:bg-white data-[state=open]:shadow-2xl"
            >
              
              {/* CHANGED: Added data-[state=open]:text-slate-900 so the question turns dark when open */}
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground py-6 transition-colors duration-200 group-hover:text-primary data-[state=open]:text-slate-900 data-[state=open]:hover:text-primary">
                {faq.question}
              </AccordionTrigger>

              {/* CHANGED: Changed text-muted-foreground to text-slate-600 so the answer is dark gray against the white background */}
              <AccordionContent className="text-slate-600 leading-relaxed text-base pb-6 pr-4 animate-in fade-in-0 slide-in-from-top-2 duration-300 font-medium">
                {faq.answer}
              </AccordionContent>
            
            </AccordionItem>
          ))}

        </Accordion>
      </div>
    </section>
  );
}
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
      answer: "With many carriers, living benefits riders are included at no additional cost. We'll help you find policies with built-in living benefits.",
    },
    {
      question: "Will using living benefits reduce my death benefit?",
      answer: "Yes—any amount you access early is deducted from the death benefit your beneficiaries receive. However, it's your money, and it's there to help you when you need it.",
    },
    {
      question: "What illnesses qualify?",
      answer: "Qualifying conditions vary by carrier but typically include heart attack, stroke, cancer, major organ failure, ALS, and others. Chronic illness qualification usually requires inability to perform two or more activities of daily living.",
    },
    {
      question: "Can I still get living benefits if I have a pre-existing condition?",
      answer: "It depends on the condition and carrier. Many people with health histories still qualify. Let's talk through your situation.",
    },
    {
      question: "How much can I access?",
      answer: "Typically up to 90% of your death benefit, depending on the policy and diagnosis. Exact amounts depend on your carrier and policy terms.",
    },
    {
      question: "Is the money taxable?",
      answer: "In most cases, living benefits are received tax-free. Consult a tax professional for your specific situation.",
    },
  ];

  return (
    <section className="py-24 relative z-10 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Everything you need to know about protecting your future with living benefits.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-accent/10 border border-border rounded-xl px-6 data-[state=open]:border-primary/50 data-[state=open]:bg-primary/5 transition-colors"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </div>
    </section>
  );
}
import { Mail, MapPin, Phone, Clock, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
   
    <div className="min-h-screen pt-48 pb-24 relative overflow-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
            Schedule Your <span className="text-primary">Free Consultation</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed font-medium">
            Take the first step toward securing your family's future. Book a time below to discuss your specific needs and learn how living benefits can protect you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="bg-accent/10 border border-border p-8 rounded-3xl space-y-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-foreground border-b border-border/50 pb-4">
                Direct Contact Info
              </h3>
              
              <ul className="space-y-6">
                <li>
                  <a href="tel:7148543451" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-sm">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Call or Text Us</p>
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">(714) 854-3451</p>
                    </div>
                  </a>
                </li>
                
                <li>
                  <a href="mailto:founder@upgradefinancialgroup.com" className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all shadow-sm">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-medium mb-1">Email Us</p>
                      <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors break-all">founder@upgrade<br/>financialgroup.com</p>
                    </div>
                  </a>
                </li>

                <li className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">Location</p>
                    <p className="text-lg font-bold text-foreground">Serving Families Across<br/>USA</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Trust Indicator Card */}
            <div className="bg-primary/5 border border-primary/20 p-6 rounded-3xl flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-primary shrink-0" />
              <div>
                <h4 className="font-bold text-foreground mb-1">No Pressure. Just Answers.</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Our consultations are 100% free and completely educational. We are here to help you understand your options, not to push a sale.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Calendly Embed */}
          <div className="lg:col-span-7 h-full w-full">
            <div className="w-full h-[700px] bg-background border border-border rounded-3xl shadow-2xl shadow-black/50 overflow-hidden relative group">
              
              {/* Subtle top loading bar effect to make it feel integrated */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

              {/* Seamless iFrame Embed */}
              <iframe
                src="https://calendly.com/upgradefinancialgroup"
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title="Schedule a consultation with Upgrade Financial Group"
              ></iframe>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
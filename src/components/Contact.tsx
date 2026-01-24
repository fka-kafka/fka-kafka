import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Coffee,
  PhoneCall,
  Calendar,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [coffeeClicks, setCoffeeClicks] = useState(0);
  const [showCoffeeEaster, setShowCoffeeEaster] = useState(false);

  // Easter egg: click the location enough times
  const handleCoffeeClick = () => {
    setCoffeeClicks((prev) => {
      const newCount = prev + 1;
      if (newCount >= 5) {
        setShowCoffeeEaster(true);
        setTimeout(() => setShowCoffeeEaster(false), 3000);
        return 0;
      }
      return newCount;
    });
  };

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-card/50 relative overflow-hidden"
      ref={ref}
    >
      {/* Easter egg notification */}
      {showCoffeeEaster && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-primary text-primary-foreground px-8 py-4 font-mono text-center"
        >
          <Globe className="w-8 h-8 mx-auto mb-2" />
          <p>Your local engineer 🇰🇪. Providing global results!</p>
        </motion.div>
      )}

      {/* Animated geometric accent */}
      <motion.div
        className="absolute -right-20 -bottom-20 w-80 h-80 border-2 border-primary/10 rotate-12 hidden lg:block"
        animate={{ rotate: [12, 15, 12] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-10 -top-10 w-40 h-40 border border-primary/20 -rotate-12 hidden lg:block"
        animate={{ rotate: [-12, -15, -12] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <div className="w-12 h-px bg-primary" />
          <span className="section-number">/ GET IN TOUCH</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column */}
          <div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
            >
              Let's Build
              <br />
              <span className="text-highlight">Something Awesome</span>
            </motion.h2>
            <motion.p
              className="text-muted-foreground leading-relaxed mb-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Ready to discuss your next project? Whether you need a full-stack
              application, technical consultation, or architecture review—I'm
              here to help through any stage of the software development
              lifecycle.
            </motion.p>

            <div className="space-y-6">
              {/* Email */}
              <motion.a
                href="mailto:kigenbrandon@outlook.com"
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <Mail className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                    Email
                  </span>
                  <span className="font-semibold group-hover:text-primary transition-colors">
                    kigenbrandon@outlook.com
                  </span>
                </div>
              </motion.a>

              {/* WhatsApp/Phone - Fastest Response */}
              <motion.a
                href="https://wa.me/254720053058"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group relative"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.35 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 border border-primary bg-primary/5 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-300"
                  whileHover={{
                    rotate: 10,
                    borderColor: "hsl(var(--primary))",
                  }}
                >
                  <PhoneCall className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                      WhatsApp / Phone
                    </span>
                    {/* Fastest Response Badge - Visible on Hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
                      <span className="text-highlight px-1.5 py-0.5 text-xs font-bold font-mono uppercase tracking-wider rounded-sm">
                        ⚡ Fastest
                      </span>
                    </div>
                  </div>
                  <span className="font-semibold group-hover:text-primary transition-colors">
                    +254 720 053 058
                  </span>
                </div>
              </motion.a>

              {/* Schedule Chat - Calendly */}
              <motion.a
                href="https://calendly.com/brandon-kigen"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
                  whileHover={{ rotate: 10 }}
                >
                  <Calendar className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                    Schedule a Chat
                  </span>
                  <span className="font-semibold group-hover:text-primary transition-colors">
                    Let's get right to it!
                  </span>
                </div>
              </motion.a>

              {/* Location - Easter egg trigger */}
              <motion.div
                className="flex items-center gap-4 cursor-pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
                onClick={handleCoffeeClick}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-12 h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                  animate={coffeeClicks > 0 ? { scale: [1, 1.1, 1] } : {}}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                </motion.div>
                <div>
                  <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-1">
                    Location
                  </span>
                  <span className="font-semibold">Nairobi, KE 🇰🇪</span>
                  {coffeeClicks > 0 && coffeeClicks < 5 && (
                    <span className="ml-2 text-xs text-primary">
                      {5 - coffeeClicks} more...
                    </span>
                  )}
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <motion.div
              className="flex items-center gap-4 mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">
                Connect
              </span>
              <div className="flex gap-4">
                {[
                  { Icon: Github, href: "https://github.com/brandon-kigen" },
                  {
                    Icon: Linkedin,
                    href: "https://www.linkedin.com/in/brandon-kigen/",
                  },
                ].map(({ Icon, href }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-4 h-4 text-foreground" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Contact form */}
          <motion.div
            className="bg-background border border-border p-8 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="font-mono text-xs text-primary uppercase tracking-widest mb-6">
              Tell me more ...
            </h3>
            <form
              className="space-y-6"
              action={import.meta.env.VITE_FORM_SUBMIT_URL}
              method="POST"
            >
              <input type="hidden" name="_captcha" value="false" />
              {/* <input type="hidden" name="_next" value="https://yourdomain.com" /> */}

              <div className="grid md:grid-cols-2 gap-6 py-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    required
                    className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                    placeholder="Your name"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.45 }}
                >
                  <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="Email Address"
                    required
                    className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
                className=" py-2"
              >
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                  Project Type
                </label>
                <select
                  name="Project Type"
                  className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-background">
                    Select project type
                  </option>
                  <option value="new-website" className="bg-background">
                    New Website
                  </option>
                  <option value="website-redesign" className="bg-background">
                    Website Redesign
                  </option>
                  <option value="fullstack" className="bg-background">
                    Full-Stack Development
                  </option>
                  <option value="frontend" className="bg-background">
                    Frontend Architecture
                  </option>
                  <option value="backend" className="bg-background">
                    Backend Systems
                  </option>
                  <option value="cloud-migration" className="bg-background">
                    Cloud Migration
                  </option>
                  <option value="consulting" className="bg-background">
                    Technical Consulting
                  </option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.52 }}
                className=" py-2"
              >
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                  Project Budget
                </label>
                <select
                  name="Budget"
                  className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-background">
                    Select budget range
                  </option>
                  <option value="below-100k" className="bg-background">
                    Below KES 100k
                  </option>
                  <option value="100k-250k" className="bg-background">
                    KES 100k - 250k
                  </option>
                  <option value="250k-500k" className="bg-background">
                    KES 250k - 500k
                  </option>
                  <option value="500k-1m" className="bg-background">
                    KES 500k - 1M
                  </option>
                  <option value="above-1m" className="bg-background">
                    Above KES 1M
                  </option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.55 }}
                className=" py-2"
              >
                <label className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2">
                  Message
                </label>
                <textarea
                  name="Details"
                  rows={4}
                  className="w-full bg-transparent border-b border-border  focus:border-primary outline-none transition-colors resize-none text-sm"
                  placeholder="Be as detailed as you desire..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="flex justify-end"
              >
                <Button
                  type="submit"
                  variant="hero"
                  size="sm"
                  className="w-1/2"
                >
                  Send
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

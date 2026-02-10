import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  PhoneCall,
  Calendar,
  Globe,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { profile } from "@/data/profile";
import ContactOption from "@/components/ui/ContactOption";
import ContactForm from "@/components/ui/ContactForm";

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

  const socialLinks = [
    { Icon: Github, href: profile.social.github, label: "GitHub Profile" },
    {
      Icon: Linkedin,
      href: profile.social.linkedin,
      label: "LinkedIn Profile",
    },
  ];

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
          <p>
            Your local engineer {profile.location.flag}. Providing global
            results!
          </p>
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
              <ContactOption
                icon={Mail}
                label="Email"
                value={profile.contact.email}
                href={`mailto:${profile.contact.email}`}
                delay={0.3}
                isInView={isInView}
              />

              <ContactOption
                icon={PhoneCall}
                label="WhatsApp / Phone"
                value={profile.contact.phone}
                href={profile.contact.whatsapp}
                delay={0.35}
                isInView={isInView}
                badge={
                  <span className="text-highlight px-1.5 py-0.5 text-xs font-bold font-mono uppercase tracking-wider rounded-sm">
                    ⚡ Fastest
                  </span>
                }
              />

              <ContactOption
                icon={Calendar}
                label="Schedule a Chat"
                value="Let's get right to it!"
                href={profile.contact.calendly}
                delay={0.4}
                isInView={isInView}
              />

              <ContactOption
                icon={MapPin}
                label="Location"
                value={`${profile.location.city}, ${profile.location.countryCode} ${profile.location.flag}`}
                onClick={handleCoffeeClick}
                delay={0.4}
                isInView={isInView}
              >
                {coffeeClicks > 0 && coffeeClicks < 5 && (
                  <span className="ml-2 text-xs text-primary">
                    {5 - coffeeClicks} more...
                  </span>
                )}
              </ContactOption>
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
                {socialLinks.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={label}
                  >
                    <Icon className="w-4 h-4 text-foreground" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right column - Contact form */}
          <ContactForm isInView={isInView} />
        </div>
      </div>
    </section>
  );
};

export default Contact;

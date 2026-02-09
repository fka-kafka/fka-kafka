import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { projectTypes, budgetRanges } from "@/data/contactFormOptions";

interface ContactFormProps {
  isInView: boolean;
}

const ContactForm = ({ isInView }: ContactFormProps) => {
  return (
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
        
        <div className="grid md:grid-cols-2 gap-6 py-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            <label
              htmlFor="name"
              className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              name="Name"
              required
              autoComplete="name"
              className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors"
              placeholder="Your name"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.45 }}
          >
            <label
              htmlFor="email"
              className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="Email Address"
              required
              autoComplete="email"
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
          <label
            htmlFor="project-type"
            className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2"
          >
            Project Type
          </label>
          <select
            id="project-type"
            name="Project Type"
            className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
          >
            {projectTypes.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-background"
              >
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.52 }}
          className=" py-2"
        >
          <label
            htmlFor="budget"
            className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2"
          >
            Project Budget
          </label>
          <select
            id="budget"
            name="Budget"
            className="w-full bg-transparent border-b border-border py-3 focus:border-primary outline-none transition-colors appearance-none cursor-pointer"
          >
            {budgetRanges.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="bg-background"
              >
                {option.label}
              </option>
            ))}
          </select>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.55 }}
          className=" py-2"
        >
          <label
            htmlFor="details"
            className="font-mono text-xs text-muted-foreground uppercase tracking-widest block mb-2"
          >
            Message
          </label>
          <textarea
            id="details"
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
  );
};

export default ContactForm;

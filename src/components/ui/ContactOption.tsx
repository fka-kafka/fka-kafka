import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface ContactOptionProps {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
  onClick?: () => void;
  delay: number;
  isInView: boolean;
  badge?: ReactNode;
  children?: ReactNode;
}

const ContactOption = ({
  icon: Icon,
  label,
  value,
  href,
  onClick,
  delay,
  isInView,
  badge,
  children,
}: ContactOptionProps) => {
  const content = (
    <>
      <motion.div
        className="w-12 h-12 border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
        whileHover={{ rotate: 10 }}
        // Specific styling for WhatsApp/Phone highlighted option
        style={
          label === "WhatsApp / Phone"
            ? {
                borderColor: "hsl(var(--primary))",
                backgroundColor: "hsl(var(--primary) / 0.05)",
              }
            : undefined
        }
      >
        <Icon className="w-5 h-5 text-primary" />
      </motion.div>
      <div>
        <div className="flex items-center gap-2 mb-1">
          <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest block">
            {label}
          </span>
          {badge && (
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-[-10px] group-hover:translate-x-0">
              {badge}
            </div>
          )}
        </div>
        <span className="font-semibold group-hover:text-primary transition-colors">
          {value}
        </span>
        {children}
      </div>
    </>
  );

  const containerAnimations = {
    initial: { opacity: 0, x: -20 },
    animate: isInView ? { opacity: 1, x: 0 } : {},
    transition: { delay },
    whileHover: { x: 10 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={href.startsWith("mailto") ? undefined : "_blank"}
        rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
        className="flex items-center gap-4 group cursor-pointer"
        {...containerAnimations}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      className="flex items-center gap-4 group cursor-pointer"
      onClick={onClick}
      {...containerAnimations}
    >
      {content}
    </motion.div>
  );
};

export default ContactOption;

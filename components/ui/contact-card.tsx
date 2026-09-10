import { type LucideIcon, PlusIcon } from "lucide-react";
import type React from "react";
import { cn } from "@/lib/utils";

export interface ContactInfoItem {
  className?: string;
  icon: LucideIcon;
  label: string;
  value: string;
}

export type ContactCardProps = React.ComponentProps<"div"> & {
  // Content props
  eyebrow?: string;
  title?: string;
  description?: string;
  contactInfo?: ContactInfoItem[];
  formSectionClassName?: string;
};

export function ContactCard({
  eyebrow,
  title = "Contact With Us",
  description = "If you have any questions regarding our Services or need help, please fill out the form here. We do our best to respond within 1 business day.",
  contactInfo,
  className,
  formSectionClassName,
  children,
  ...props
}: ContactCardProps) {
  return (
    <div
      className={cn(
        "relative grid h-full w-full rounded-2xl md:grid-cols-12",
        className
      )}
      {...props}
    >
      {/* Corner Crosshair Plus Marks */}
      <PlusIcon className="pointer-events-none absolute -top-2.5 -left-2.5 z-10 hidden h-5 w-5 select-none text-sky-500/70 sm:block" />
      <PlusIcon className="pointer-events-none absolute -top-2.5 -right-2.5 z-10 hidden h-5 w-5 select-none text-sky-500/70 sm:block" />
      <PlusIcon className="pointer-events-none absolute -bottom-2.5 -left-2.5 z-10 hidden h-5 w-5 select-none text-sky-500/70 sm:block" />
      <PlusIcon className="pointer-events-none absolute -right-2.5 -bottom-2.5 z-10 hidden h-5 w-5 select-none text-sky-500/70 sm:block" />

      {/* Left Content / Info Section */}
      <div className="flex flex-col justify-center p-4 sm:p-7 md:col-span-7 lg:p-9">
        <div className="relative space-y-3 sm:space-y-4">
          {eyebrow && (
            <span className="inline-block font-accent font-semibold text-[10.5px] text-sky-600 uppercase tracking-widest sm:text-xs">
              {eyebrow}
            </span>
          )}
          <h2 className="font-bold font-heading text-slate-900 text-xl leading-snug tracking-tight sm:text-2xl md:text-3xl">
            {title}
          </h2>
          <p className="font-sans text-slate-600 text-xs leading-relaxed sm:text-sm md:text-base">
            {description}
          </p>

          {contactInfo && contactInfo.length > 0 && (
            <div className="grid gap-4 pt-4 sm:grid-cols-2 lg:grid-cols-3">
              {contactInfo.map((info, index) => (
                <ContactInfo key={index} {...info} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right Form Section */}
      <div
        className={cn(
          "flex h-full w-full items-center border-white/60 border-t p-4 sm:p-6 md:col-span-5 md:border-t-0 md:border-l",
          formSectionClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

export function ContactInfo({
  icon: Icon,
  label,
  value,
  className,
  ...props
}: ContactInfoItem & React.ComponentProps<"div">) {
  return (
    <div className={cn("flex items-center gap-3 py-2", className)} {...props}>
      <div className="flex-shrink-0 rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 text-sky-600 shadow-sm">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <p className="font-accent font-semibold text-slate-500 text-xs uppercase tracking-wider">
          {label}
        </p>
        <p className="font-sans font-semibold text-slate-800 text-sm">
          {value}
        </p>
      </div>
    </div>
  );
}

// src/components/ui/accordion.tsx
import React, { useState, ReactNode, ReactElement, cloneElement, isValidElement } from "react";

interface AccordionProps {
  type?: "single" | "multiple";
  children: ReactNode;
  className?: string;
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
  openItems?: string[];
  handleToggle?: (value: string) => void;
}

interface AccordionTriggerProps {
  value: string;
  openItems?: string[];
  handleToggle?: (value: string) => void;
  children: ReactNode;
  className?: string;
}

interface AccordionContentProps {
  value: string;
  openItems?: string[];
  children: ReactNode;
}

export function Accordion({ type = "single", children, className }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    if (type === "multiple") {
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      );
    } else {
      setOpenItems((prev) => (prev[0] === value ? [] : [value]));
    }
  };

  // Pass state and handlers to children
  return (
    <div className={`w-full ${className ?? ""}`}>
      {React.Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<any>, { openItems, handleToggle })
          : child
      )}
    </div>
  );
}

export function AccordionItem({ value, children, openItems, handleToggle }: AccordionItemProps) {
  return (
    <div className="border rounded-xl bg-white shadow transition-all">
      {React.Children.map(children, (child) =>
        isValidElement(child)
          ? cloneElement(child as ReactElement<any>, { value, openItems, handleToggle })
          : child
      )}
    </div>
  );
}

export function AccordionTrigger({ value, openItems, handleToggle, children, className }: AccordionTriggerProps) {
  const isOpen = openItems?.includes(value);
  return (
    <button
      className={`w-full text-left flex items-center justify-between gap-2 p-4 font-semibold rounded-xl transition hover:bg-[#f5f5f5] focus:outline-none ${className ?? ""}`}
      aria-expanded={isOpen}
      type="button"
      onClick={() => handleToggle?.(value)}
    >
      {children}
      <span className={`ml-2 transition-transform ${isOpen ? "rotate-90" : ""}`}>▶</span>
    </button>
  );
}

export function AccordionContent({ value, openItems, children }: AccordionContentProps) {
  const isOpen = openItems?.includes(value);
  return (
    <div
      className={`px-4 pb-4 transition-all overflow-hidden ${
        isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
      }`}
      style={{ transition: "all 0.3s cubic-bezier(.4,0,.2,1)" }}
    >
      {isOpen && children}
    </div>
  );
}

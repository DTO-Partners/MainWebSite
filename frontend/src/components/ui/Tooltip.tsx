// src/components/ui/Tooltip.tsx
import { ReactNode } from "react";

interface TooltipProviderProps {
  children: ReactNode;
}
export const TooltipProvider = ({ children }: TooltipProviderProps) => <>{children}</>;

interface TooltipProps {
  children: ReactNode;
}
export const Tooltip = ({ children }: TooltipProps) => <>{children}</>;

interface TooltipTriggerProps {
  children: ReactNode;
  setShow?: (show: boolean) => void; // Not required now!
}
export const TooltipTrigger = ({ children }: TooltipTriggerProps) => <>{children}</>;

interface TooltipContentProps {
  children: ReactNode;
  className?: string;
  show: boolean;
}
export const TooltipContent = ({ children, className, show }: TooltipContentProps) =>
  show ? (
    <div
      className={`absolute z-50 mt-2 bg-[#1a1a2e] text-white text-xs rounded-lg px-3 py-2 shadow-lg ${className ?? ""}`}
      role="tooltip"
    >
      {children}
    </div>
  ) : null;

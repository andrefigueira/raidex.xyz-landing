import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Info } from "lucide-react";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  tooltip?: string;
}

export function FeatureCard({ icon, title, description, tooltip }: FeatureCardProps) {
  return (
    <div className="group p-6 rounded-2xl glass-card">
      <div className="flex items-start justify-between mb-4">
        <div className="w-10 h-10 rounded-xl bg-white/[0.05] flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:bg-white/[0.08] transition-all">
          {icon}
        </div>
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="text-zinc-600 hover:text-zinc-400 transition-colors">
                  <Info className="w-4 h-4" />
                </button>
              </TooltipTrigger>
              <TooltipContent className="max-w-xs bg-zinc-900 border-zinc-800">
                <p className="text-sm">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
      <h3 className="text-base font-medium text-white mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed">{description}</p>
    </div>
  );
}

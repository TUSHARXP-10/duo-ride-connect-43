
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  iconSize?: number;
}

export function ThemeToggle({ className, iconSize = 20 }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn(
            "h-9 w-9 rounded-full bg-white/10 backdrop-blur-sm", 
            theme === "dark" && "hover:bg-white/20",
            theme === "light" && "hover:bg-slate-200",
            className
          )}
        >
          <Sun className={cn("h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all", 
              theme !== "dark" ? "text-yellow-500" : "text-slate-400 opacity-0")} 
              size={iconSize} />
          <Moon className={cn("absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all", 
              theme === "dark" ? "rotate-0 scale-100 text-slate-200 opacity-100" : "opacity-0")} 
              size={iconSize} />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-lg border-white/20 dark:border-slate-700/50">
        <DropdownMenuItem onClick={() => setTheme("light")} className="cursor-pointer">
          <Sun className="mr-2 h-4 w-4 text-yellow-500" />
          <span className={theme === "light" ? "font-semibold" : ""}>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="cursor-pointer">
          <Moon className="mr-2 h-4 w-4 text-slate-400" />
          <span className={theme === "dark" ? "font-semibold" : ""}>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="cursor-pointer">
          <span className="mr-2 h-4 w-4 flex items-center justify-center">
            <Sun className="h-3 w-3 rotate-0 scale-100 transition-all text-yellow-500" />
          </span>
          <span className={theme === "system" ? "font-semibold" : ""}>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

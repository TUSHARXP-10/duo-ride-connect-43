
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

interface MobileSidebarProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const MobileSidebar: React.FC<MobileSidebarProps> = ({ activeSection, scrollToSection }) => {
  const navItems = [
    { label: "Welcome", href: "welcome" },
    { label: "Register", href: "register" },
    { label: "Book", href: "book" },
    { label: "Mitre", href: "mitre" },
    { label: "Wallet", href: "wallet" },
    { label: "Admin", href: "admin" },
  ];

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden fixed top-4 left-4 z-30 bg-white/80 dark:bg-slate-800/80 backdrop-blur shadow-md">
          <Menu />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[240px] p-0 border-r border-white/20 dark:border-slate-700/50 bg-white/95 dark:bg-slate-900/95 backdrop-blur">
        <div className="flex flex-col h-full">
          <div className="px-5 py-6 flex items-center justify-between border-b border-white/20 dark:border-slate-700/50">
            <h2 className="text-xl font-bold bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] bg-clip-text text-transparent">DUO</h2>
            <ThemeToggle />
          </div>
          <nav className="flex-1 py-4">
            <ul className="space-y-1 px-3">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <button
                      onClick={() => {
                        scrollToSection(item.href);
                      }}
                      className={`
                        w-full text-left px-4 py-3 rounded-lg transition-all duration-200 font-medium
                        ${isActive 
                          ? "bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB] text-white" 
                          : "hover:bg-white/50 dark:hover:bg-slate-800/50 text-gray-700 dark:text-gray-300"}
                      `}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="p-4 border-t border-white/20 dark:border-slate-700/50 text-xs text-center text-gray-500">
            © 2025 Duo · Built for India
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;

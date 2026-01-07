import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";


interface Props {
    links: { name: string, onClick: () => void }[]
    visible?: boolean
}

const Navbar: React.FC<Props> = ({ links, visible = true }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = (clickFn: () => void) => {
        clickFn();
        setIsOpen(false);
    };

    return (
        <nav
            className={`transform will-change-transform w-full bg-background/95 border-b-2 shadow-md transition-transform duration-300`}
            style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12 md:h-16">

                <div className="font-title text-xl text-light-pink tracking-tight cursor-pointer" onClick={links[0]?.onClick}>
                    ㅇㅎ &hearts; ㅇㅎ
                </div>

                <div className="hidden md:flex items-center space-x-8">
                    {links.map((link) => (
                        <button
                            key={link.name}
                            onClick={link.onClick}
                            className="font-title font-medium text-sm hover:text-light-pink transition-colors cursor-pointer"
                        >
                            {link.name}
                        </button>
                    ))}
                </div>

                <div className="md:hidden flex items-center gap-4">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 [&_svg]:h-5 [&_svg]:w-5">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="w-1/2 sm:max-w-sm">
                            <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                            <div className="flex flex-col space-y-4 mt-8">
                                {links.map((link, index) => (
                                    <button
                                        key={link.name}
                                        onClick={() => handleLinkClick(link.onClick)}
                                        className={`text-left transition-transform font-body text-md font-medium animate-fly-from-right animation-delay-${index * 100 + 100} 
                                        hover:text-light-pink hover:transition-colors `}
                                    >
                                        {link.name}
                                    </button>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};

export default Navbar
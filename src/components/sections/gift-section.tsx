import React, { useState } from 'react';
import Section from "@/components/wrapper/section";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import ScrollAnim from '../wrapper/scroll-anim';


const AccountRow = ({ name, bank, account }: { name: string, bank: string, account: string }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(`${bank} ${account}`);
            toast(`계좌번호가 복사되었습니다.`, {
                description: `${bank} ${account}`,
            });
            setCopied(true);
            setTimeout(() => setCopied(false), 1000);
        } catch (err) {
            const textarea = document.createElement('textarea');
            textarea.value = `${bank} ${account}`;
            textarea.style.position = 'fixed';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand('copy');
                toast(`계좌번호가 복사되었습니다.`, {
                    description: `${bank} ${account}`,
                });
                setCopied(true);
                setTimeout(() => setCopied(false), 1000);
            } catch (err) {
                console.error('Fallback copy failed', err);
            } finally {
                document.body.removeChild(textarea);
            }
        }
    };

    return (
        <div className="flex items-center justify-between py-3 border-b last:border-0 border-gray-100">
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                <span className="font-medium min-w-16">{name}</span>
                <span className="text-sm text-gray-600">{bank} {account}</span>
            </div>
            <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-gray-500 hover:text-primary"
                onClick={handleCopy}
            >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                <span className="sr-only">Copy account number</span>
            </Button>
        </div>
    );
};

const GiftSection = React.forwardRef<HTMLElement>((props, ref) => {
    return (
        <Section id="gift" ref={ref}>
            <div className="w-full space-y-8 py-12">
                <ScrollAnim>
                    <div className="text-center space-y-4">
                        <h2 className="text-2xl font-title font-bold text-light-pink pb-12">마음 전하실 곳</h2>
                        <p className='text-center mx-auto leading-10 break-keep'>
                            멀리서도 축하의 마음을<br />
                            전하고 싶으신 분들을 위해<br />
                            계좌번호를 안내드립니다.<br />
                            <br />
                            소중한 축하를 보내주셔서 감사드리며,<br />
                            따듯한 마음에 깊이 감사드립니다.
                        </p>
                    </div>
                </ScrollAnim>
                <Accordion collapsible type="single" className="w-full space-y-4 px-2">
                    <AccordionItem value="groom" className="bg-white/80 backdrop-blur-sm rounded-sm px-2 border border-stone-100 shadow-sm">
                        <AccordionTrigger className="text-lg text-blue font-medium no-underline px-4">
                            신랑측
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                            <div className="space-y-1">
                                <AccountRow name="최우혁" bank="OO은행" account="000-000-000000" />
                                <AccountRow name="아버지" bank="OO은행" account="000-000-000000" />
                                <AccountRow name="어머니" bank="OO은행" account="000-000-000000" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="bride" className="bg-white/80 backdrop-blur-sm rounded-sm px-2 border border-stone-100 shadow-sm">
                        <AccordionTrigger className="text-lg text-gray-pink font-medium px-4">
                            신부측
                        </AccordionTrigger>
                        <AccordionContent className="px-4 pb-4">
                            <div className="space-y-1">
                                <AccountRow name="강은하" bank="OO은행" account="000-000-000000" />
                                <AccountRow name="아버지" bank="OO은행" account="000-000-000000" />
                                <AccountRow name="어머니" bank="OO은행" account="000-000-000000" />
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </Section >
    );
});

GiftSection.displayName = "GiftSection";

export default GiftSection;

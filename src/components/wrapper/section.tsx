import { PaperTexture } from '@paper-design/shaders-react';
import React from 'react';

interface SectionProps {
    id: string;
    children: React.ReactNode;
    className?: string;
    ref?: React.Ref<HTMLElement>;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(({ id, children, className = "" }, ref) => {
    return (
        <section id={id} ref={ref} className={`px-1 scroll-mt-32 ${className}`}>
            {children}
        </section>
    );
});

Section.displayName = "Section";

export default Section;

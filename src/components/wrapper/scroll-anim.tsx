import React, { useEffect, useRef, useState } from 'react';


interface Props {
    children: React.ReactNode,
    direction?: 'up' | 'down' | 'left' | 'right',
    className?: string,
    threshold?: number
}

const ScrollAnim: React.FC<Props> = ({ children, direction = 'up', className = '', threshold = 0.2 }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const directionToClasses = {
        up: ['translate-y-10', 'translate-y-0'],
        down: ['-translate-y-10', 'translate-y-0'],
        left: ['-translate-x-10', 'translate-x-0'],
        right: ['translate-x-10', 'translate-x-0']
    }

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        }, {
            threshold: threshold
        });

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const [from, to] = directionToClasses[direction] || directionToClasses.up;
    const classes = `transition duration-1000 ease-in-out transform-gpu ${isVisible ? `opacity-100 ${to}` : `opacity-0 ${from}`} ${className}`;

    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};

export default ScrollAnim
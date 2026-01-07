import React from 'react';

interface Props {
    children: React.ReactNode;
}

import ReactDOM from 'react-dom';

const FixedOverlay: React.FC<Props> = ({ children }) => {
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    if (!mounted) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 z-50 pointer-events-none h-[100vh] w-screen overflow-hidden">
            {children}
        </div>,
        document.body
    );
};

export default FixedOverlay;

import { useState, useEffect } from 'react'

/**
 * Not actually lazy loading, just setting intersection observer...
 * For actual lazy loading App.js can (and probably will) use Lazy and Suspense from React
 */
const LazyLoad = (ref) => {
    const [visible, setVisible] = useState(false);
    const options = {
        threshold: .25
    }

    useEffect(() => {
        const handler = (entries, observer) => {
            if (entries[0].isIntersecting) {
                setVisible(true);
                observer.unobserve(entries[0].target);
                observer.disconnect();
            }
        }

        const observer = new IntersectionObserver(handler, options);

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [ref])

    return visible;
}

export default LazyLoad;
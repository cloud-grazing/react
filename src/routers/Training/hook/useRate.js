import { useState, useEffect, useRef } from 'react';

const useRate = (value) => {
    const [rate, setRate] = useState(0);
    const mounted = useRef();
    const tm = useRef();
    const tmTwo = useRef();

    useEffect(() => {
        if (!mounted.current) { // componentDidMount
            setRate(+value);
            mounted.current = true;
        } else { // componentDidUpdate
            if (rate === +value) {
                if (tm.current) { clearTimeout(tm.current); }
                if (tmTwo.current) { clearTimeout(tmTwo.current); }
                return;
            }
            if (rate >= +value) {
                if (tm.current) { clearTimeout(tm.current); }
                // eslint-disable-next-line no-shadow
                tmTwo.current = setTimeout(() => { setRate(rate - 1); }, 20);
                return;
            }
            if (tmTwo.current) { clearTimeout(tmTwo.current); }
            // eslint-disable-next-line no-shadow
            tm.current = setTimeout(() => { setRate(rate + 1); }, 20);
        }
    }, [value, rate]);

    return rate;
};

export default useRate;
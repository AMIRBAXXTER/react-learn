import { useState } from "react";
function useCounter() {
    const [count, setCount] = useState(0);
    const plus = () => setCount((pervCount) => pervCount + 1);
    const minus = () => setCount((pervCount) => pervCount - 1);
    return [count, plus, minus];
}
export default useCounter;
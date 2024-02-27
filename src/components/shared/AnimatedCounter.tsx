"use client";
import React, { useState, useEffect } from "react";

interface IProps {
  target: number;
}
function AnimatedCounter({ target }: IProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Calculate the step size based on the target value to ensure
    // the animation completes in a reasonable amount of time
    const step = target / 100;

    // Set up an interval to update the count
    const interval = setInterval(() => {
      setCount((prevCount) => {
        const updatedCount = prevCount + step;
        // Stop the interval when the target is reached or exceeded
        if (updatedCount >= target) {
          clearInterval(interval);
          return target; // Ensure the final value is exactly the target
        }
        return updatedCount;
      });
    }, 10); // Adjust interval time (in milliseconds) as needed

    return () => clearInterval(interval); // Cleanup on unmount
  }, [target]); // Depend on target to reset animation if the prop changes

  return <span>{count.toFixed(0)}</span>;
}

export default AnimatedCounter;

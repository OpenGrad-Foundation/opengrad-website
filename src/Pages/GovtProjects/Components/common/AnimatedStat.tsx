import { useEffect, useState } from "react";

type Props = {
  limit: number;
  label: string;
  suffix?: string;
  speed: number;
  start?: number;
  numberClassName: string;
  labelClassName: string;
};

export const AnimatedStat = ({
  limit,
  label,
  suffix = "",
  speed,
  start = 0,
  numberClassName,
  labelClassName,
}: Props) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => {
        if (currentCount < limit) {
          return currentCount + 1;
        } else {
          clearInterval(interval);
          return currentCount;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [limit, speed, start]);

  return (
    <div>
      <div className={numberClassName}>{count}{suffix}</div>
      <div className={labelClassName}>{label}</div>
    </div>
  );
};
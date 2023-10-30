import { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimerProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimerProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  const startTimer = () => {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTimer
        : decrementBlackTimer;
    timer.current = setInterval(callback, 1000);
  };

  const decrementBlackTimer = () => {
    setBlackTime((prev) => prev - 1);
  };
  const decrementWhiteTimer = () => {
    setWhiteTime((prev) => prev - 1);
  };

  const handleRestar = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div className="flex gap-[10px] w-[20%] mx-auto">
      <div className="">
        <button
          className="p-[5px] bg-lime-600 text-white rounded-[5px]"
          onClick={() => handleRestar()}
        >
          Restart game
        </button>
      </div>

      <h2>Black-{blackTime}</h2>
      <h2>White-{whiteTime}</h2>
    </div>
  );
};

export default Timer;

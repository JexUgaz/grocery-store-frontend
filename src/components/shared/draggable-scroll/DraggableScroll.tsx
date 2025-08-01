"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";
import { RefObject, useEffect, useRef, useState } from "react";
import useDraggableScroll from "use-draggable-scroll";

interface Props {
  children: React.ReactNode;
}

const DraggableScroll: React.FC<Props> = ({ children }) => {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const { onMouseDown } = useDraggableScroll(ref, { direction: "horizontal" });

  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const updateButtons = () => {
      const scrollLeft = el.scrollLeft;
      const maxScroll = el.scrollWidth - el.clientWidth;

      setShowPrev(scrollLeft > 10);
      setShowNext(scrollLeft < maxScroll - 10);
    };

    updateButtons();

    el.addEventListener("scroll", updateButtons);
    window.addEventListener("resize", updateButtons);

    return () => {
      el.removeEventListener("scroll", updateButtons);
      window.removeEventListener("resize", updateButtons);
    };
  }, []);

  const scrollByAmount = 800;

  const onNextButton = () => {
    ref.current?.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  const onPrevButton = () => {
    ref.current?.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="group/draggable relative w-full">
      <div
        ref={ref}
        onMouseDown={onMouseDown}
        className="w-full overflow-x-scroll [&::-webkit-scrollbar]:hidden scrollbar-hide cursor-grab active:cursor-grabbing"
      >
        {children}
      </div>

      {showPrev && (
        <button
          onClick={onPrevButton}
          className="hidden absolute left-0 top-1/2 -translate-y-1/2 bg-secondary rounded-r-3xl text-white group-hover/draggable:flex items-center justify-start px-3 py-8"
        >
          <ArrowIcon className="size-10 -rotate-90" />
        </button>
      )}

      {showNext && (
        <button
          onClick={onNextButton}
          className="hidden absolute right-0 top-1/2 -translate-y-1/2 bg-secondary rounded-l-3xl text-white group-hover/draggable:flex items-center justify-end px-3 py-8"
        >
          <ArrowIcon className="size-10 rotate-90" />
        </button>
      )}
    </div>
  );
};

export default DraggableScroll;

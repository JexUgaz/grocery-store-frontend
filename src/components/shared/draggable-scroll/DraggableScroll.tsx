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
        <>
          <span className="absolute left-0 top-[50%] -translate-y-[50%] h-[95%] bg-gradient-to-r from-black/20 to-transparent w-20 hidden sm:block lg:hidden group-hover/draggable:block"></span>
          <button
            onClick={onPrevButton}
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 bg-secondary rounded-2xl text-white lg:hidden group-hover/draggable:flex items-center justify-start p-3"
          >
            <ArrowIcon className="size-8 -rotate-90" />
          </button>
        </>
      )}

      {showNext && (
        <>
          <span className="absolute right-0 top-[50%] -translate-y-[50%] h-[95%] bg-gradient-to-l from-black/20 to-transparent w-20 hidden sm:block lg:hidden group-hover/draggable:block"></span>
          <button
            onClick={onNextButton}
            className="absolute hidden sm:flex lg:hidden group-hover/draggable:flex right-0 top-1/2 -translate-y-1/2 bg-secondary rounded-2xl text-white items-center justify-end p-3"
          >
            <ArrowIcon className="size-8 rotate-90" />
          </button>
        </>
      )}
    </div>
  );
};

export default DraggableScroll;

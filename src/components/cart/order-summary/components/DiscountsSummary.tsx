"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  discounts: {
    name: string;
    discount: number;
  }[];
  totalDiscount: number;
}

const DiscountsSummary: React.FC<Props> = ({ discounts, totalDiscount }) => {
  const [showDiscountDetails, setShowDiscountDetails] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex justify-between items-center text-secondary font-semibold cursor-pointer"
        onClick={() => setShowDiscountDetails((prev) => !prev)}
      >
        <p className="text-sm lg:text-base">Discounts</p>
        <div className="flex items-center gap-2 text-secondary">
          <p className="text-accent font-bold text-base">
            - $ {totalDiscount.toFixed(2)}
          </p>
          <ArrowIcon
            className={`size-3 transform transition-transform duration-300 ${
              showDiscountDetails ? "" : "rotate-180"
            }`}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {showDiscountDetails && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden mt-2 text-sm text-muted-foreground space-y-1"
          >
            {discounts.map(({ name, discount }) => (
              <li key={name} className="flex justify-between">
                <span>{name}</span>
                <span className="text-accent font-bold">
                  - $ {discount.toFixed(2)}
                </span>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};
export default DiscountsSummary;

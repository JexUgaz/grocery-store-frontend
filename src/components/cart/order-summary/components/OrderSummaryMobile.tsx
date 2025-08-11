"use client";

import ArrowIcon from "@/components/icons/ArrowIcon";
import CheckoutButton from "./CheckoutButton";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/utils";
import DiscountsSummary from "./DiscountsSummary";

interface Props {
  totalItems: number;
  totalOriginalPrice: number;
  totalPrice: number;
  discounts: {
    name: string;
    discount: number;
  }[];
  totalDiscount: number;
}

const OrderSummaryMobile: React.FC<Props> = ({
  totalPrice,
  discounts,
  totalDiscount,
  totalItems,
  totalOriginalPrice,
}) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <div className="fixed w-full bottom-0 block lg:hidden bg-white max-w-180 rounded-t-4xl shadow-black shadow-2xl text-secondary">
      <button
        onClick={() => setShowMoreInfo((prev) => !prev)}
        className="absolute top-0 left-[50%] -translate-y-[30%] -translate-x-[50%] rounded-full bg-white p-3"
      >
        <ArrowIcon
          className={cn(
            "size-5 transform transition-transform duration-300 ",
            showMoreInfo && "rotate-180"
          )}
        />
      </button>
      <div className="flex flex-col gap-2 items-center py-5 xs:py-6 px-10">
        <AnimatePresence>
          {showMoreInfo && (
            <motion.div
              className="w-full flex flex-col gap-2 overflow-hidden"
              initial={{ height: 0, opacity: 0, y: 20 }}
              animate={{ height: "auto", opacity: 1, y: 0 }}
              exit={{ height: 0, opacity: 0, y: 20 }}
              transition={{
                height: { duration: 0.3 },
                opacity: { duration: 0.2 },
                y: { duration: 0.3 },
              }}
            >
              <div className="flex justify-between">
                <p className="text-sm">Products ({totalItems})</p>
                <p className="text-base">$ {totalOriginalPrice.toFixed(2)}</p>
              </div>
              <span className="w-full h-[1px] bg-secondary opacity-20"></span>

              <DiscountsSummary
                discounts={discounts}
                totalDiscount={totalDiscount}
              />

              <span className="w-full h-[1px] bg-secondary opacity-20"></span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full flex justify-between font-bold">
          <p className="text-base">Total:</p>
          <p className="text-xl">$ {totalPrice.toFixed(2)}</p>
        </div>
        <CheckoutButton />
      </div>
    </div>
  );
};

export default OrderSummaryMobile;

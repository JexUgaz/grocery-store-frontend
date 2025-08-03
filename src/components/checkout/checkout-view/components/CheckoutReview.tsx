import CalendarIcon from "@/components/icons/CalendarIcon";
import CreditCardIcon from "@/components/icons/CreditCardIcon";
import EditIcon from "@/components/icons/EditIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import HashIcon from "@/components/icons/HashIcon";
import LoadingSpinnerIcon from "@/components/icons/LoadingSpinnerIcon";
import MapPinIcon from "@/components/icons/MapPinIcon";
import PadlockIcon from "@/components/icons/PadlockIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import UserIcon from "@/components/icons/UserIcon";
import { Card } from "@/types/Card";
import { Client } from "@/types/Client";
import { useState } from "react";
import PaymentSuccessfully from "./PaymentSuccessfully";
import { shoppingCartService } from "@/services";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

type PaymentStatus = "idle" | "processing" | "succeeded" | "failed";

interface Props {
  totalAmount: number;
  card: Card;
  client: Client;
  goBack: () => void;
}

const CheckoutReview: React.FC<Props> = ({
  totalAmount,
  card,
  client,
  goBack,
}) => {
  const router = useRouter();
  const { cardName, expiry, number } = card;
  const { address, city, email, name, phone, reference } = client;

  const [status, setStatus] = useState<PaymentStatus>("idle");

  const finalizeOrder = async () => {
    setStatus("processing");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    await shoppingCartService.cleanCart();

    toast.custom(() => <PaymentSuccessfully client={client} />, {
      duration: 5000,
    });

    router.replace("/");
    setStatus("succeeded");
  };

  const isProcessing = status === "processing";

  return (
    <div className="w-full max-w-5xl bg-white p-8 rounded-4xl">
      <h2 className="text-2xl font-semibold text-secondary mb-10 border-b border-gray-300">
        Review Your Order
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="space-y-4">
          <div className="pb-2 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Customer Information
            </h3>
          </div>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4 text-gray-400" />
              <p className="font-medium">{name}</p>
            </div>
            <div className="flex items-center gap-2">
              <EmailIcon className="w-4 h-4 text-gray-400" />
              <p>{email}</p>
            </div>
            <div className="flex items-center gap-2">
              <PhoneIcon className="w-4 h-4 text-gray-400" />
              <p>{phone}</p>
            </div>
            <div className="flex items-center gap-2">
              <MapPinIcon className="w-4 h-4 text-gray-400" />
              <p>
                {address}, {city}
              </p>
            </div>
            {reference && (
              <div className="flex items-center gap-2">
                <HashIcon className="w-4 h-4 text-gray-400" />
                <p className="text-sm text-gray-500">Reference: {reference}</p>
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="pb-2 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-800">
              Payment Details
            </h3>
          </div>
          <div className="space-y-3 text-gray-600">
            <div className="flex items-center gap-2">
              <CreditCardIcon className="w-4 h-4 text-gray-400" />
              <p>•••• •••• •••• {number.slice(-4)}</p>
            </div>
            <div className="flex items-center gap-2">
              <UserIcon className="w-4 h-4 text-gray-400" />
              <p>{cardName}</p>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="w-4 h-4 text-gray-400" />
              <p>Expires: {expiry}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2 text-secondary font-bold items-end text-4xl">
        <span className="text-sm">Total:</span> ${totalAmount.toFixed(2)}
      </div>

      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6">
        <button
          onClick={goBack}
          disabled={isProcessing}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-3xl hover:bg-gray-50 disabled:bg-black/5 disabled:cursor-auto transition-colors duration-200 flex gap-1 items-center"
        >
          <EditIcon className="size-5" /> Edit Information
        </button>
        <button
          onClick={finalizeOrder}
          disabled={isProcessing}
          className="px-6 py-2 bg-accent hover:bg-accent/80 disabled:bg-accent/50 disabled:cursor-auto text-white font-bold rounded-3xl transition-colors duration-200 shadow-sm flex gap-1 items-center"
        >
          {isProcessing && (
            <>
              <LoadingSpinnerIcon className="size-5" /> Processing Payment...
            </>
          )}
          {!isProcessing && (
            <>
              <PadlockIcon className="size-5" /> Confirm Payment
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default CheckoutReview;

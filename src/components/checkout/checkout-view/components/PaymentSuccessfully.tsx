import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import { Client } from "@/types/Client";

interface Props {
  client: Client;
  orderId: string;
}

const PaymentSuccessfully: React.FC<Props> = ({
  client: { name, email },
  orderId,
}) => (
  <div className="w-[400px] rounded-3xl border border-gray-200 p-2 bg-white shadow-lg">
    <div className="flex items-center gap-3">
      <CheckCircleIcon className="text-accent size-30" />
      <div className="flex flex-col gap-1 justify-center">
        <span className="font-bold text-xl text-gray-900">
          Purchase completed 🎉
        </span>
        <span className="text-base text-gray-600">
          Thanks, {name}. Confirmation sent to{" "}
          <span className="underline">{email}</span>
        </span>
        <span className="text-sm text-gray-500">
          Order ID: <code>{orderId}</code>
        </span>
      </div>
    </div>
  </div>
);

export default PaymentSuccessfully;

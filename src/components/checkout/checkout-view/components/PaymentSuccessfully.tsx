import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import { Client } from "@/types/Client";

interface Props {
  client: Client;
}

const PaymentSuccessfully: React.FC<Props> = ({ client: { name, email } }) => (
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
      </div>
    </div>
  </div>
);

export default PaymentSuccessfully;

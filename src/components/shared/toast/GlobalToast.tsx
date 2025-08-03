import CheckCircleIcon from "@/components/icons/CheckCircleIcon";
import CloseCircleIcon from "@/components/icons/CloseCircleIcon";
import InfoCircleIcon from "@/components/icons/InfoCircleIcon";
import WarningCircleIcon from "@/components/icons/WarningCircleIcon";

const iconMap = {
  success: <CheckCircleIcon className="text-green-500" />,
  info: <InfoCircleIcon className="text-blue-500" />,
  error: <CloseCircleIcon className="text-red-500" />,
  warning: <WarningCircleIcon className="text-yellow-500" />,
} as const;

interface Props {
  title: string;
  message: string;
  type?: keyof typeof iconMap;
}

const colorMap = {
  success: "border-green-100 bg-green-50",
  error: "border-red-100 bg-red-50",
  warning: "border-yellow-100 bg-yellow-50",
  info: "border-blue-100 bg-blue-50",
};

export const GlobalToast: React.FC<Props> = ({
  title,
  message,
  type = "success",
}) => {
  return (
    <div
      className={`w-[400px] rounded-2xl border p-4 shadow-lg flex items-start gap-4 ${colorMap[type]}`}
    >
      <div className="mt-1 size-6">{iconMap[type]}</div>
      <div className="flex flex-col">
        <span className="font-semibold text-gray-800">{title}</span>
        <span className="text-sm text-gray-600">{message}</span>
      </div>
    </div>
  );
};

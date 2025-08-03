import { GlobalToast } from "@/components/shared/toast/GlobalToast";
import { toast } from "sonner";

export class ToastHelper {
  static success(message: string, title = "Success", duration = 4000) {
    toast.custom(
      () => <GlobalToast type="success" title={title} message={message} />,
      { duration }
    );
  }

  static error(message: string, title = "Ups!", duration = 5000) {
    toast.custom(
      () => <GlobalToast type="error" title={title} message={message} />,
      { duration }
    );
  }

  static info(message: string, title = "Info", duration = 4000) {
    toast.custom(
      () => <GlobalToast type="info" title={title} message={message} />,
      { duration }
    );
  }

  static warning(message: string, title = "Warning", duration = 4000) {
    toast.custom(
      () => <GlobalToast type="warning" title={title} message={message} />,
      { duration }
    );
  }
}

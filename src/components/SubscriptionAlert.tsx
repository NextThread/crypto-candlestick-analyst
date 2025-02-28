
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface SubscriptionAlertProps {
  isOpen: boolean;
  onClose?: () => void;
  hasSubscription?: boolean;
}

const SubscriptionAlert = ({ isOpen, onClose, hasSubscription = false }: SubscriptionAlertProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-gray-900 border border-gray-200/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-white">
            {hasSubscription ? "Daily Limit Reached" : "Analysis Limit Reached"}
          </AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">
            {hasSubscription 
              ? "You have reached your daily analysis limit for your current subscription. Your limit will reset tomorrow."
              : "You have reached your limit of 3 free analyses. Please subscribe to one of our plans to continue analyzing charts."}
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-4 flex gap-2">
          {onClose && (
            <Button
              variant="outline"
              onClick={onClose}
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
            >
              Close
            </Button>
          )}
          <a
            href="#pricing"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md"
          >
            {hasSubscription ? "Upgrade Plan" : "View Pricing Plans"}
          </a>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubscriptionAlert;

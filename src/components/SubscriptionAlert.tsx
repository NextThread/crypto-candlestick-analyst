
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

const SubscriptionAlert = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-gray-900 border border-gray-200/20">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl text-white">Analysis Limit Reached</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300">
            You have reached your limit of 3 free analyses. Please subscribe to one of our plans to continue analyzing charts.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-4">
          <a
            href="#pricing"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary/90 rounded-md"
          >
            View Pricing Plans
          </a>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubscriptionAlert;


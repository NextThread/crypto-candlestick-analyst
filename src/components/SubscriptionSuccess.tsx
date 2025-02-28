
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

interface SubscriptionSuccessProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
}

const SubscriptionSuccess = ({ isOpen, onClose, planName }: SubscriptionSuccessProps) => {
  return (
    <AlertDialog open={isOpen}>
      <AlertDialogContent className="bg-gray-900 border border-gray-200/20">
        <AlertDialogHeader>
          <div className="flex justify-center mb-4">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <AlertDialogTitle className="text-xl text-white text-center">Subscription Successful!</AlertDialogTitle>
          <AlertDialogDescription className="text-gray-300 text-center">
            You have successfully subscribed to the {planName} plan. Your account has been upgraded and you now have access to all features included in this plan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="mt-4 flex justify-center">
          <Button onClick={onClose} className="bg-primary hover:bg-primary/90">
            Got it
          </Button>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default SubscriptionSuccess;

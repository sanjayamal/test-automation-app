import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock, MessageSquare } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import SocialMediaLinks from "@/components/shared/SocialMediaLinks";
import Logo from "@/components/shared/Logo";

function Alerts() {
  const [isDelayActive, setIsDelayActive] = useState(false);
  const [countdown, setCountdown] = useState(0);

  const handleDelayedPopup = () => {
    setIsDelayActive(true);
    setCountdown(10);
  };

  useEffect(() => {
    let interval;
    if (isDelayActive && countdown > 0) {
      interval = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (countdown === 0 && isDelayActive) {
      alert("This is a timing alert!");
      setIsDelayActive(false);
    }

    return () => clearInterval(interval);
  }, [isDelayActive, countdown]);

  const handleConfirmPopup = () => {
    confirm("Press a button!");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50 flex-col ">
      <Card className="w-full max-w-md mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="text-center pb-6">
          <Logo />
          <CardTitle className="text-2xl font-bold text-gray-800">
            Browser Popup Demo
          </CardTitle>
          <p className="text-gray-600 mt-2">
            Click the buttons below to trigger different browser popups
          </p>
        </CardHeader>

        <CardContent className="space-y-4">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button
                className="w-full h-12 text-base font-medium flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 transition-colors"
                size="lg"
                id="btnAlertDialog"
                name="alertDialog"
              >
                <AlertCircle className="w-5 h-5" />
                Alert
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel asChild>
                  <Button
                    variant="secondary"
                    id="btnAlertDialogCancel"
                    name="alertDialogCancel"
                  >
                    Cancel
                  </Button>
                </AlertDialogCancel>
                <AlertDialogAction>
                  <Button id="btnAlertDialogOk" name="alertDialogOk">
                    Continue
                  </Button>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          <Button
            onClick={handleConfirmPopup}
            variant="outline"
            className="w-full h-12 text-base font-medium flex items-center justify-center gap-2 border-2 hover:bg-gray-50 transition-colors"
            size="lg"
            id="btnConfirmation"
            name="confirmation"
          >
            <MessageSquare className="w-5 h-5" />
            Confirmation
          </Button>

          <Button
            onClick={handleDelayedPopup}
            disabled={isDelayActive}
            className="w-full h-12 text-base font-medium flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            size="lg"
            id="btnTimingAlert"
            name="timingAlert"
          >
            <Clock className="w-5 h-5" />
            Timing Alert
          </Button>

          {isDelayActive && (
            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-sm text-gray-600 bg-yellow-50 px-3 py-2 rounded-full border border-yellow-200">
                <Clock className="w-4 h-4 animate-spin" />
                {`${countdown} seconds`}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <SocialMediaLinks className="mt-6" />
    </div>
  );
}

export default Alerts;

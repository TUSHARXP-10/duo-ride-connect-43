
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

const Verify = () => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(30);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!otp || otp.length < 4) {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid OTP",
        variant: "destructive"
      });
      return;
    }
    
    // Mock verification
    toast({
      title: "Phone number verified",
      description: "Your account has been created successfully"
    });
    
    // In a real app, we'd register the user properly here
    navigate("/role-select");
  };

  const resendOTP = () => {
    setTimer(30);
    toast({
      title: "OTP Sent",
      description: "A new OTP has been sent to your phone"
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF] dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md border border-white/30 dark:border-slate-700/30 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Verify Your Phone</CardTitle>
          <p className="text-center text-gray-600 dark:text-gray-400">
            We've sent a verification code to your phone
          </p>
        </CardHeader>
        <form onSubmit={handleVerify}>
          <CardContent className="space-y-4">
            <div className="flex flex-col gap-3 items-center">
              <Input 
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter OTP"
                className="text-center text-xl tracking-widest"
                maxLength={6}
              />
              <div className="text-sm text-gray-500">
                {timer > 0 ? (
                  <span>Resend OTP in {timer}s</span>
                ) : (
                  <button 
                    type="button"
                    onClick={resendOTP} 
                    className="text-[#8B5CF6] hover:underline"
                  >
                    Resend OTP
                  </button>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB]">
              Verify & Continue
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Verify;

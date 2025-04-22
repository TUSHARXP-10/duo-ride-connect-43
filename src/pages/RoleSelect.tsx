
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Car, Users } from "lucide-react";

const RoleSelect = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF] dark:from-slate-900 dark:to-slate-800 p-4">
      <Card className="w-full max-w-md border border-white/30 dark:border-slate-700/30 shadow-xl bg-white/80 dark:bg-slate-900/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">Choose Your Role</CardTitle>
          <p className="text-center text-gray-600 dark:text-gray-400">
            How would you like to use Duo?
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Card 
              className="border border-white/20 dark:border-slate-700/20 cursor-pointer hover:scale-105 transition-all"
              onClick={() => navigate("/rider")}
            >
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-[#6fcf97]/10 p-4">
                  <Users className="h-8 w-8 text-[#6fcf97]" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium">Book a Ride</h3>
                  <p className="text-sm text-gray-500">Find affordable rides</p>
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="border border-white/20 dark:border-slate-700/20 cursor-pointer hover:scale-105 transition-all"
              onClick={() => navigate("/host")}
            >
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <div className="rounded-full bg-[#FFD600]/10 p-4">
                  <Car className="h-8 w-8 text-[#FFD600]" />
                </div>
                <div className="text-center">
                  <h3 className="font-medium">Host a Ride</h3>
                  <p className="text-sm text-gray-500">Earn by sharing rides</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-gray-500">
            You can change this later in your settings
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default RoleSelect;

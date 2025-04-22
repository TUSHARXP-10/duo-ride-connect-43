
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, CalendarClock, MapPin, Phone, MessageSquare, Star } from "lucide-react";
import RiderNavbar from "@/components/RiderNavbar";
import { Separator } from "@/components/ui/separator";

const BookingSuccess = () => {
  const navigate = useNavigate();
  
  // Mock booking data
  const booking = {
    id: "BK8372",
    date: "22 Apr 2025",
    time: "10:30 AM",
    from: "Koramangala",
    to: "Indiranagar",
    driver: {
      name: "Amit Singh",
      phone: "+91 98765-43210",
      vehicle: "Honda City (White)",
      number: "KA 01 AB 1234"
    },
    price: 350,
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF] dark:from-slate-900 dark:to-slate-800">
      <RiderNavbar />
      
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB] mb-4">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl font-bold mb-2 bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] bg-clip-text text-transparent">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Your ride has been booked successfully. Details are below.
            </p>
          </div>
          
          <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-lg">
            <CardContent className="p-6">
              <div className="bg-[#8B5CF6]/10 dark:bg-[#8B5CF6]/20 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 dark:text-gray-400">Booking ID</span>
                  <span className="font-medium">{booking.id}</span>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-1/2 space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                        <CalendarClock className="h-4 w-4" /> Date & Time
                      </h3>
                      <p className="font-medium">{booking.date}, {booking.time}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2 flex items-center gap-2">
                        <MapPin className="h-4 w-4" /> Ride Details
                      </h3>
                      <div className="mt-1 space-y-3">
                        <div className="flex gap-3">
                          <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="absolute top-3 left-1.5 bottom-0 w-[1px] h-6 bg-gray-300 dark:bg-gray-700"></div>
                          </div>
                          <div>
                            <p className="font-medium">{booking.from}</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div>
                            <p className="font-medium">{booking.to}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2 space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Driver & Vehicle</h3>
                      <p className="font-medium">{booking.driver.name}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{booking.driver.vehicle}</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{booking.driver.number}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">Payment</h3>
                      <p className="font-medium">₹{booking.price}</p>
                      <p className="text-green-600 dark:text-green-400 text-sm">Paid via Duo Wallet</p>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
                  <div className="flex gap-2">
                    <Button variant="outline" className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      Message Driver
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Call Driver
                    </Button>
                  </div>
                  
                  <Button onClick={() => navigate("/rider")} className="bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB]">
                    Back to Home
                  </Button>
                </div>
                
                <Separator />
                
                <div className="text-center">
                  <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3 flex items-center justify-center gap-2">
                    <Star className="h-4 w-4" /> After your ride, don't forget to rate your experience
                  </h3>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        className="h-8 w-8 cursor-pointer text-gray-300 dark:text-gray-700 hover:text-yellow-500 dark:hover:text-yellow-500 hover:fill-yellow-500 transition-colors"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;

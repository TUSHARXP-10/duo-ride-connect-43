
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CarFront, MapPin, Calendar, Clock, CreditCard, Wallet, Star, Award, ArrowRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import RiderNavbar from "@/components/RiderNavbar";

const RideBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [paymentMethod, setPaymentMethod] = useState("wallet");
  
  // Mock ride data based on ID
  const ride = {
    id: id || "r1",
    driver: {
      name: "Amit Singh",
      rating: 4.8,
      rides: 482,
      phone: "+91 98765-43210",
      image: "https://i.pravatar.cc/150?img=68"
    },
    price: 350,
    distance: 12.3,
    duration: "35 min",
    departureTime: "10:30 AM",
    date: "22 Apr 2025",
    from: "Koramangala",
    to: "Indiranagar",
    pickupPoint: "Koramangala 5th Block, near Coffee Day",
    dropPoint: "Indiranagar 12th Main, near Metro Station",
    vehicle: {
      type: "car",
      model: "Honda City",
      color: "White",
      number: "KA 01 AB 1234"
    }
  };
  
  const handlePaymentMethodChange = (value: string) => {
    setPaymentMethod(value);
  };
  
  const handleConfirmBooking = () => {
    toast({
      title: "Booking Confirmed!",
      description: "Your ride has been booked successfully"
    });
    
    // In a real app, would process payment and confirm booking
    setTimeout(() => {
      navigate("/rider/booking-success");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF] dark:from-slate-900 dark:to-slate-800">
      <RiderNavbar />
      
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] bg-clip-text text-transparent">
          Confirm Your Booking
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md">
              <CardHeader>
                <CardTitle>Ride Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex flex-col gap-4 md:w-1/2">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Ride Route</h3>
                      <div className="mt-1 space-y-3">
                        <div className="flex gap-3">
                          <div className="relative">
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="absolute top-3 left-1.5 bottom-0 w-[1px] h-10 bg-gray-300 dark:bg-gray-700"></div>
                          </div>
                          <div>
                            <p className="font-medium">{ride.from}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{ride.pickupPoint}</p>
                          </div>
                        </div>
                        <div className="flex gap-3">
                          <div className="w-3 h-3 rounded-full bg-red-500"></div>
                          <div>
                            <p className="font-medium">{ride.to}</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{ride.dropPoint}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Date</h3>
                        <div className="mt-1 flex items-center">
                          <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{ride.date}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Time</h3>
                        <div className="mt-1 flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-500" />
                          <span>{ride.departureTime}</span>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Distance</h3>
                        <p className="mt-1">{ride.distance} km</p>
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">Duration</h3>
                        <p className="mt-1">{ride.duration}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="md:w-1/2">
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Vehicle Details</h3>
                    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                      <div className="flex gap-4 items-start">
                        <div className="p-3 rounded-full bg-[#8B5CF6]/10">
                          <CarFront className="h-6 w-6 text-[#8B5CF6]" />
                        </div>
                        <div>
                          <p className="font-medium">{ride.vehicle.model}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">{ride.vehicle.color} • {ride.vehicle.number}</p>
                        </div>
                      </div>
                    </div>
                    
                    <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mt-6 mb-3">Driver</h3>
                    <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                      <div className="flex gap-4 items-center">
                        <Avatar className="h-12 w-12">
                          {ride.driver.image ? (
                            <AvatarImage src={ride.driver.image} alt={ride.driver.name} />
                          ) : (
                            <AvatarFallback className="bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] text-white">
                              {ride.driver.name.charAt(0)}
                            </AvatarFallback>
                          )}
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <p className="font-medium">{ride.driver.name}</p>
                            {ride.driver.rating >= 4.8 && (
                              <div className="ml-2 flex items-center text-[#FFD600] text-xs">
                                <Award className="h-3 w-3 mr-1" />
                                Top Driver
                              </div>
                            )}
                          </div>
                          <div className="flex items-center mt-1 text-sm">
                            <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                            <span>{ride.driver.rating}</span>
                            <span className="mx-1 text-gray-400">•</span>
                            <span>{ride.driver.rides} rides</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <Separator className="my-6" />
                
                <div>
                  <h3 className="font-medium mb-3">Payment Method</h3>
                  <RadioGroup 
                    value={paymentMethod} 
                    onValueChange={handlePaymentMethodChange}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between space-x-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="wallet" id="wallet" />
                        <Label htmlFor="wallet" className="flex items-center gap-2 cursor-pointer">
                          <Wallet className="h-5 w-5 text-[#8B5CF6]" />
                          <div>
                            <span className="font-medium">Duo Wallet</span>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Balance: ₹650</p>
                          </div>
                        </Label>
                      </div>
                      <Badge className="bg-[#8B5CF6]">Recommended</Badge>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <RadioGroupItem value="upi" id="upi" />
                      <Label htmlFor="upi" className="flex items-center gap-2 cursor-pointer">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/2560px-UPI-Logo-vector.svg.png" alt="UPI" className="h-6" />
                        <span className="font-medium">UPI</span>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
                        <CreditCard className="h-5 w-5" />
                        <span className="font-medium">Credit / Debit Card</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md sticky top-24">
              <CardHeader>
                <CardTitle>Price Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Base fare</span>
                  <span>₹{ride.price - 25}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Platform fee</span>
                  <span>₹25</span>
                </div>
                <Separator />
                <div className="flex justify-between items-center font-medium">
                  <span>Total</span>
                  <span className="text-lg">₹{ride.price}</span>
                </div>
                
                <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-3 rounded-lg text-sm">
                  You're saving approximately ₹150 compared to other ride services.
                </div>
              </CardContent>
              <CardFooter className="flex-col space-y-4">
                <Button 
                  onClick={handleConfirmBooking}
                  className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB] flex items-center gap-2"
                >
                  Confirm Booking
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <div className="text-center text-xs text-gray-500">
                  By confirming, you agree to our <a href="#" className="text-[#8B5CF6] hover:underline">Terms</a> and <a href="#" className="text-[#8B5CF6] hover:underline">Policies</a>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Custom Badge component
const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`px-2 py-1 text-xs font-medium rounded-full text-white ${className}`}>
      {children}
    </div>
  );
};

export default RideBooking;


import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { MapPin, Calendar, Clock, Users, Car, Search } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import RideResults from "@/components/RideResults";
import RiderNavbar from "@/components/RiderNavbar";

const Rider = () => {
  const [bookingType, setBookingType] = useState<"direct" | "shared">("direct");
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropLocation, setDropLocation] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("1");
  const [vehicleType, setVehicleType] = useState("car");
  const [searched, setSearched] = useState(false);
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!pickupLocation || !dropLocation) {
      toast({
        title: "Missing information",
        description: "Please provide pickup and drop locations",
        variant: "destructive"
      });
      return;
    }
    
    // In a real app, would fetch available rides here
    toast({
      title: "Searching rides",
      description: "Finding the best options for you"
    });
    
    setSearched(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF] dark:from-slate-900 dark:to-slate-800">
      <RiderNavbar />
      
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] bg-clip-text text-transparent">
          Book Your Ride
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md">
              <CardHeader>
                <CardTitle>Find a Ride</CardTitle>
                <CardDescription>Enter your journey details</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSearch} className="space-y-4">
                  <Tabs 
                    defaultValue="direct" 
                    value={bookingType}
                    onValueChange={(value) => setBookingType(value as "direct" | "shared")}
                    className="w-full"
                  >
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="direct">Direct Ride</TabsTrigger>
                      <TabsTrigger value="shared">Shared Ride</TabsTrigger>
                    </TabsList>
                    <TabsContent value="direct" className="space-y-4 mt-4">
                      <p className="text-sm text-muted-foreground">
                        Book a private ride just for yourself
                      </p>
                    </TabsContent>
                    <TabsContent value="shared" className="space-y-4 mt-4">
                      <p className="text-sm text-muted-foreground">
                        Share your ride with others and save up to 40%
                      </p>
                      <div className="space-y-2">
                        <Label htmlFor="seats">Number of Seats</Label>
                        <Select 
                          value={seats} 
                          onValueChange={setSeats}
                        >
                          <SelectTrigger id="seats">
                            <SelectValue placeholder="Select seats" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Seat</SelectItem>
                            <SelectItem value="2">2 Seats</SelectItem>
                            <SelectItem value="3">3 Seats</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </TabsContent>
                  </Tabs>
                  
                  <div className="space-y-2">
                    <Label htmlFor="pickup">Pickup Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="pickup" 
                        placeholder="Enter pickup location" 
                        className="pl-10"
                        value={pickupLocation}
                        onChange={(e) => setPickupLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="drop">Drop Location</Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input 
                        id="drop" 
                        placeholder="Enter drop location" 
                        className="pl-10"
                        value={dropLocation}
                        onChange={(e) => setDropLocation(e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="date" 
                          type="date" 
                          className="pl-10"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="time">Time</Label>
                      <div className="relative">
                        <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input 
                          id="time" 
                          type="time" 
                          className="pl-10"
                          value={time}
                          onChange={(e) => setTime(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label>Vehicle Type</Label>
                    <RadioGroup 
                      defaultValue="car" 
                      value={vehicleType}
                      onValueChange={setVehicleType}
                      className="flex space-x-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="bike" id="bike" />
                        <Label htmlFor="bike" className="cursor-pointer">Bike</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="car" id="car" />
                        <Label htmlFor="car" className="cursor-pointer">Car</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="auto" id="auto" />
                        <Label htmlFor="auto" className="cursor-pointer">Auto</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB]">
                    <Search className="h-4 w-4 mr-2" />
                    Search Rides
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2">
            {searched ? (
              <RideResults 
                bookingType={bookingType}
                vehicleType={vehicleType}
                pickupLocation={pickupLocation}
                dropLocation={dropLocation}
              />
            ) : (
              <div className="h-full flex flex-col items-center justify-center bg-white/40 dark:bg-slate-800/40 backdrop-blur rounded-lg border border-white/20 dark:border-slate-700/20 p-8">
                <div className="text-8xl mb-6">🚗</div>
                <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mb-2">Ready to ride?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-center max-w-md">
                  Enter your journey details and find the perfect ride for your needs
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rider;

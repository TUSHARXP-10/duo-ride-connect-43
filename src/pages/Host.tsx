
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Car, Calendar, Clock, MapPin, Users, Plus, FileImage } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import HostNavbar from "@/components/HostNavbar";
import ActiveRides from "@/components/ActiveRides";

const Host = () => {
  const [activeTab, setActiveTab] = useState("offer");
  const [vehicleType, setVehicleType] = useState("car");
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    source: "",
    destination: "",
    date: "",
    time: "",
    seats: "2",
    price: "",
    description: "",
    allowPets: false,
    allowSmoking: false,
    vehicleModel: "",
    vehicleNumber: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSwitchChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }));
  };
  
  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (
      !formData.source || 
      !formData.destination || 
      !formData.date || 
      !formData.time || 
      !formData.price ||
      !formData.vehicleModel ||
      !formData.vehicleNumber
    ) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Ride created",
      description: "Your ride has been published successfully"
    });
    
    // In a real app, would submit the form data to backend
    setActiveTab("active");
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF] dark:from-slate-900 dark:to-slate-800">
      <HostNavbar />
      
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-br from-[#FFD600] to-[#FFAB00] bg-clip-text text-transparent">
          Host Dashboard
        </h1>
        
        <Tabs 
          defaultValue="offer" 
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="offer">Offer Ride</TabsTrigger>
            <TabsTrigger value="active">Active Rides</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="offer">
            <div className="max-w-3xl mx-auto">
              <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md">
                <CardHeader>
                  <CardTitle>Offer a Ride</CardTitle>
                  <CardDescription>Share your journey and earn</CardDescription>
                </CardHeader>
                
                <form onSubmit={handleSubmit}>
                  <CardContent className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg flex items-center gap-2">
                        <MapPin className="h-5 w-5 text-[#FFAB00]" />
                        Route Information
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label htmlFor="source">Pickup Location</Label>
                          <Input 
                            id="source" 
                            name="source"
                            placeholder="Enter pickup location" 
                            value={formData.source}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="destination">Drop Location</Label>
                          <Input 
                            id="destination" 
                            name="destination"
                            placeholder="Enter drop location" 
                            value={formData.destination}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="date">Date</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              id="date" 
                              name="date"
                              type="date" 
                              className="pl-10"
                              value={formData.date}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="time">Time</Label>
                          <div className="relative">
                            <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              id="time" 
                              name="time"
                              type="time" 
                              className="pl-10"
                              value={formData.time}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg flex items-center gap-2">
                        <Car className="h-5 w-5 text-[#FFAB00]" />
                        Vehicle Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label>Vehicle Type</Label>
                          <Select 
                            value={vehicleType} 
                            onValueChange={setVehicleType}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select vehicle" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="car">Car</SelectItem>
                              <SelectItem value="bike">Bike</SelectItem>
                              <SelectItem value="auto">Auto</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="vehicleModel">Vehicle Model</Label>
                          <Input 
                            id="vehicleModel" 
                            name="vehicleModel"
                            placeholder="E.g., Honda City" 
                            value={formData.vehicleModel}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="vehicleNumber">License Plate</Label>
                          <Input 
                            id="vehicleNumber" 
                            name="vehicleNumber"
                            placeholder="E.g., KA 01 AB 1234" 
                            value={formData.vehicleNumber}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="flex flex-col md:flex-row gap-4">
                        <Button type="button" variant="outline" className="flex items-center gap-2">
                          <FileImage className="h-4 w-4" />
                          Upload Vehicle Image
                        </Button>
                        <p className="text-sm text-muted-foreground">
                          A clear photo of your vehicle helps build trust with riders
                        </p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-medium text-lg flex items-center gap-2">
                        <Users className="h-5 w-5 text-[#FFAB00]" />
                        Ride Details
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="seats">Available Seats</Label>
                          <Select 
                            value={formData.seats} 
                            onValueChange={(value) => handleSelectChange("seats", value)}
                          >
                            <SelectTrigger id="seats">
                              <SelectValue placeholder="Select seats" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="1">1 Seat</SelectItem>
                              <SelectItem value="2">2 Seats</SelectItem>
                              <SelectItem value="3">3 Seats</SelectItem>
                              <SelectItem value="4">4 Seats</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="price">Price per Seat (₹)</Label>
                          <Input 
                            id="price" 
                            name="price"
                            type="number" 
                            placeholder="Enter price per seat" 
                            value={formData.price}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Description (Optional)</Label>
                        <Textarea 
                          id="description"
                          name="description" 
                          placeholder="Add any additional information about the ride"
                          value={formData.description}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="flex flex-col space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="allowPets" className="cursor-pointer">Allow Pets</Label>
                          <Switch 
                            id="allowPets" 
                            checked={formData.allowPets}
                            onCheckedChange={(checked) => handleSwitchChange("allowPets", checked)}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="allowSmoking" className="cursor-pointer">Allow Smoking</Label>
                          <Switch 
                            id="allowSmoking" 
                            checked={formData.allowSmoking}
                            onCheckedChange={(checked) => handleSwitchChange("allowSmoking", checked)}
                          />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  
                  <CardFooter>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#FFD600] to-[#FFAB00] text-black hover:text-black hover:opacity-90"
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Publish Ride
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="active">
            <ActiveRides />
          </TabsContent>
          
          <TabsContent value="earnings">
            <div className="max-w-3xl mx-auto">
              <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md">
                <CardHeader>
                  <CardTitle>Your Earnings</CardTitle>
                  <CardDescription>Track your income and payment history</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <Card className="bg-gradient-to-br from-[#FFD600]/10 to-[#FFAB00]/10 border-[#FFAB00]/30">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-700 dark:text-gray-300">Total Earnings</p>
                          <h3 className="text-3xl font-bold text-[#FFAB00]">₹8,450</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Lifetime</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-[#6fcf97]/10 to-[#6fcf97]/10 border-[#6fcf97]/30">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-700 dark:text-gray-300">This Month</p>
                          <h3 className="text-3xl font-bold text-[#6fcf97]">₹2,150</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Apr 2025</p>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card className="bg-gradient-to-br from-[#8B5CF6]/10 to-[#7E69AB]/10 border-[#7E69AB]/30">
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <p className="text-sm text-gray-700 dark:text-gray-300">Available Balance</p>
                          <h3 className="text-3xl font-bold text-[#8B5CF6]">₹950</h3>
                          <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">Ready to withdraw</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-medium">Recent Transactions</h3>
                    <div className="border border-gray-200 dark:border-gray-800 rounded-md">
                      <div className="grid grid-cols-5 gap-2 px-4 py-3 font-medium text-sm bg-gray-50 dark:bg-gray-800/50 rounded-t-md">
                        <div>Date</div>
                        <div className="col-span-2">Ride</div>
                        <div className="text-right">Amount</div>
                        <div className="text-right">Status</div>
                      </div>
                      
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="grid grid-cols-5 gap-2 px-4 py-3 border-t border-gray-200 dark:border-gray-800 text-sm">
                          <div className="text-gray-600 dark:text-gray-400">
                            {`${20 - item}/04/2025`}
                          </div>
                          <div className="col-span-2">
                            Koramangala to Indiranagar
                          </div>
                          <div className="text-right">₹{340 - item * 20}</div>
                          <div className="text-right">
                            <Badge variant="outline" className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800/50">
                              Paid
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Withdraw to Bank</Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Host;

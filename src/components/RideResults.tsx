
import React, { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, Users, Star, Award, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

interface RideResultsProps {
  bookingType: "direct" | "shared";
  vehicleType: string;
  pickupLocation: string;
  dropLocation: string;
}

interface Ride {
  id: string;
  driver: {
    name: string;
    rating: number;
    rides: number;
    image?: string;
  };
  price: number;
  distance: number;
  duration: string;
  departureTime: string;
  seats: number;
  vehicle: {
    type: string;
    model: string;
  };
}

const RideResults: React.FC<RideResultsProps> = ({
  bookingType,
  vehicleType,
  pickupLocation,
  dropLocation,
}) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  // Generate some mock ride data based on the filters
  const mockRides: Ride[] = [
    {
      id: "r1",
      driver: {
        name: "Amit Singh",
        rating: 4.8,
        rides: 482,
        image: "https://i.pravatar.cc/150?img=68"
      },
      price: bookingType === "direct" ? 350 : 210,
      distance: 12.3,
      duration: "35 min",
      departureTime: "In 10 min",
      seats: 4,
      vehicle: {
        type: "car",
        model: "Honda City"
      }
    },
    {
      id: "r2",
      driver: {
        name: "Priya Sharma",
        rating: 4.9,
        rides: 649,
        image: "https://i.pravatar.cc/150?img=47"
      },
      price: bookingType === "direct" ? 280 : 180,
      distance: 10.5,
      duration: "28 min",
      departureTime: "In 5 min",
      seats: 2,
      vehicle: {
        type: vehicleType === "bike" ? "bike" : "auto",
        model: vehicleType === "bike" ? "Royal Enfield" : "Bajaj Auto"
      }
    },
    {
      id: "r3",
      driver: {
        name: "Rajesh Kumar",
        rating: 4.7,
        rides: 319,
      },
      price: bookingType === "direct" ? 400 : 250,
      distance: 14.2,
      duration: "42 min",
      departureTime: "In 15 min",
      seats: 3,
      vehicle: {
        type: "car",
        model: "Maruti Swift"
      }
    }
  ].filter(ride => {
    // Filter based on vehicle type
    if (vehicleType === "bike" && ride.vehicle.type === "bike") return true;
    if (vehicleType === "auto" && ride.vehicle.type === "auto") return true;
    if (vehicleType === "car" && ride.vehicle.type === "car") return true;
    return false;
  });
  
  // If no rides match the filter, show all
  const rides = mockRides.length > 0 ? mockRides : [
    {
      id: "r4",
      driver: {
        name: "Vijay Verma",
        rating: 4.6,
        rides: 215,
      },
      price: bookingType === "direct" ? 330 : 200,
      distance: 11.8,
      duration: "32 min",
      departureTime: "In 8 min",
      seats: 1,
      vehicle: {
        type: vehicleType,
        model: vehicleType === "bike" ? "Hero Splendor" : 
               vehicleType === "auto" ? "Bajaj Auto" : "Hyundai i10"
      }
    }
  ];
  
  const handleBookRide = (rideId: string) => {
    toast({
      title: "Booking Ride",
      description: "Processing your booking..."
    });
    
    // In a real app, would handle the booking process
    setTimeout(() => {
      navigate(`/rider/booking/${rideId}`);
    }, 1500);
  };
  
  return (
    <div className="space-y-4">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur p-4 rounded-lg border border-white/20 dark:border-slate-700/20 shadow-md">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Available Rides</h2>
          <Badge variant="outline" className="font-normal">
            {rides.length} rides found
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate max-w-[150px]">{pickupLocation}</span>
          </div>
          <span className="mx-1">→</span>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="truncate max-w-[150px]">{dropLocation}</span>
          </div>
        </div>
      </div>
      
      {rides.map((ride) => (
        <Card key={ride.id} className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur hover:shadow-lg transition-shadow">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14">
                  {ride.driver.image ? (
                    <AvatarImage src={ride.driver.image} alt={ride.driver.name} />
                  ) : (
                    <AvatarFallback className="bg-gradient-to-br from-[#8B5CF6] to-[#7E69AB] text-white">
                      {ride.driver.name.charAt(0)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <div>
                  <h3 className="font-medium flex items-center">
                    {ride.driver.name}
                    {ride.driver.rating >= 4.8 && (
                      <Badge variant="outline" className="ml-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800/50">
                        <Award className="h-3 w-3 mr-1" />
                        Top Rated
                      </Badge>
                    )}
                  </h3>
                  <div className="flex items-center mt-1">
                    <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                    <span className="text-sm">{ride.driver.rating}</span>
                    <span className="mx-1 text-gray-400">•</span>
                    <span className="text-sm">{ride.driver.rides} rides</span>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-4">
                  <div className="bg-[#E5DEFF] dark:bg-purple-900/20 text-[#8B5CF6] px-3 py-1 rounded-full font-medium">
                    ₹{ride.price}
                  </div>
                  <div className="flex flex-col text-sm">
                    <span>
                      {ride.distance} km
                      <span className="text-gray-500 dark:text-gray-400 mx-1">•</span>
                      {ride.duration}
                    </span>
                    <span className="text-[#6fcf97]">{ride.departureTime}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <Separator className="my-4" />
            
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                <span>Today</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2 text-gray-500" />
                <span>{ride.departureTime}</span>
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2 text-gray-500" />
                <span>
                  {bookingType === "shared" ? 
                    `${ride.seats} ${ride.seats === 1 ? "seat" : "seats"} available` : 
                    "Private ride"}
                </span>
              </div>
              <div className="flex-grow text-right text-sm text-gray-600 dark:text-gray-400">
                {ride.vehicle.model}
              </div>
            </div>
          </CardContent>
          
          <CardFooter className="px-6 pb-6 pt-0">
            <Button 
              className="w-full bg-gradient-to-r from-[#8B5CF6] to-[#7E69AB] hover:opacity-90"
              onClick={() => handleBookRide(ride.id)}
            >
              Book Now
            </Button>
          </CardFooter>
        </Card>
      ))}
      
      {rides.length === 0 && (
        <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-8">
          <div className="text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-medium mb-2">No rides found</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Try adjusting your filters or try again later
            </p>
            <Button variant="outline">Modify Search</Button>
          </div>
        </Card>
      )}
    </div>
  );
};

export default RideResults;

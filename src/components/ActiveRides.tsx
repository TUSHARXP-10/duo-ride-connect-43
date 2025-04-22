
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, Clock, MapPin, Users, Car, Phone, 
  MessageSquare, X, Check, AlertCircle
} from "lucide-react";
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const mockRides = [
  {
    id: "r1",
    from: "Koramangala",
    to: "Indiranagar",
    date: "22 Apr 2025",
    time: "10:00 AM",
    status: "active",
    price: 280,
    passengers: [
      {
        id: "p1",
        name: "Raj Sharma",
        image: "https://i.pravatar.cc/150?img=51",
        rating: 4.8,
        pickup: "Koramangala 5th Block",
        drop: "Indiranagar Metro Station"
      }
    ],
    vehicle: {
      type: "car",
      model: "Honda City",
      color: "White",
      plate: "KA 01 AB 1234"
    },
    maxSeats: 3,
    bookedSeats: 1
  },
  {
    id: "r2",
    from: "Whitefield",
    to: "Electronic City",
    date: "23 Apr 2025",
    time: "9:30 AM",
    status: "upcoming",
    price: 350,
    passengers: [],
    vehicle: {
      type: "car",
      model: "Honda City",
      color: "White",
      plate: "KA 01 AB 1234"
    },
    maxSeats: 3,
    bookedSeats: 0
  },
  {
    id: "r3",
    from: "HSR Layout",
    to: "Marathahalli",
    date: "20 Apr 2025",
    time: "6:15 PM",
    status: "completed",
    price: 220,
    passengers: [
      {
        id: "p2",
        name: "Anita Desai",
        image: "https://i.pravatar.cc/150?img=44",
        rating: 4.7,
        pickup: "HSR BDA Complex",
        drop: "Innovative Multiplex"
      },
      {
        id: "p3",
        name: "Vikram Singh",
        rating: 4.5,
        pickup: "HSR Sector 2",
        drop: "Marathahalli Bridge"
      }
    ],
    vehicle: {
      type: "car",
      model: "Honda City",
      color: "White",
      plate: "KA 01 AB 1234"
    },
    maxSeats: 3,
    bookedSeats: 2
  }
];

const ActiveRides = () => {
  return (
    <div className="max-w-3xl mx-auto">
      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="completed">Completed</TabsTrigger>
        </TabsList>
        
        <TabsContent value="active">
          {mockRides.filter(ride => ride.status === "active").length > 0 ? (
            <div className="space-y-6">
              {mockRides
                .filter(ride => ride.status === "active")
                .map(ride => (
                  <RideCard key={ride.id} ride={ride} />
                ))}
            </div>
          ) : (
            <EmptyState
              title="No active rides"
              description="You don't have any active rides at the moment"
              icon="🚗"
            />
          )}
        </TabsContent>
        
        <TabsContent value="upcoming">
          {mockRides.filter(ride => ride.status === "upcoming").length > 0 ? (
            <div className="space-y-6">
              {mockRides
                .filter(ride => ride.status === "upcoming")
                .map(ride => (
                  <RideCard key={ride.id} ride={ride} />
                ))}
            </div>
          ) : (
            <EmptyState
              title="No upcoming rides"
              description="You don't have any upcoming rides scheduled"
              icon="📅"
            />
          )}
        </TabsContent>
        
        <TabsContent value="completed">
          {mockRides.filter(ride => ride.status === "completed").length > 0 ? (
            <div className="space-y-6">
              {mockRides
                .filter(ride => ride.status === "completed")
                .map(ride => (
                  <RideCard key={ride.id} ride={ride} />
                ))}
            </div>
          ) : (
            <EmptyState
              title="No completed rides"
              description="You haven't completed any rides yet"
              icon="🏁"
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

interface RideCardProps {
  ride: any;
}

const RideCard: React.FC<RideCardProps> = ({ ride }) => {
  const statusColors: Record<string, string> = {
    active: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 border-green-200 dark:border-green-800/50",
    upcoming: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400 border-blue-200 dark:border-blue-800/50",
    completed: "bg-gray-100 dark:bg-gray-800/50 text-gray-800 dark:text-gray-400 border-gray-200 dark:border-gray-700/50"
  };
  
  const statusText: Record<string, string> = {
    active: "In Progress",
    upcoming: "Upcoming",
    completed: "Completed"
  };

  return (
    <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <h3 className="font-medium text-lg">
                {ride.from} to {ride.to}
              </h3>
              <Badge 
                variant="outline" 
                className={statusColors[ride.status]}
              >
                {statusText[ride.status]}
              </Badge>
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {ride.date}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                {ride.time}
              </div>
              <div className="flex items-center">
                <Car className="h-4 w-4 mr-2" />
                {ride.vehicle.model}
              </div>
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                {ride.bookedSeats}/{ride.maxSeats} seats booked
              </div>
            </div>
          </div>
          
          <div className="text-lg font-medium text-[#FFD600] dark:text-[#FFD600]">
            ₹{ride.price}
            <span className="text-xs text-gray-500 dark:text-gray-400 block text-right">per seat</span>
          </div>
        </div>
        
        {ride.passengers.length > 0 ? (
          <div className="mt-6">
            <h4 className="text-sm font-medium mb-3">Passengers ({ride.passengers.length})</h4>
            <div className="space-y-3">
              {ride.passengers.map((passenger: any) => (
                <div 
                  key={passenger.id} 
                  className="flex items-center justify-between bg-gray-50 dark:bg-slate-800/50 p-3 rounded-md"
                >
                  <div className="flex items-center gap-3">
                    <Avatar>
                      {passenger.image ? (
                        <AvatarImage src={passenger.image} alt={passenger.name} />
                      ) : (
                        <AvatarFallback className="bg-[#FFD600] text-black">
                          {passenger.name.charAt(0)}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div>
                      <p className="font-medium">{passenger.name}</p>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        <MapPin className="inline-block h-3 w-3 mr-1" />
                        {passenger.pickup} → {passenger.drop}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex gap-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button size="icon" variant="ghost" className="h-8 w-8">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Chat with {passenger.name}</DialogTitle>
                        </DialogHeader>
                        <ScrollArea className="h-[300px] border rounded-md p-4">
                          <div className="space-y-4">
                            <div className="flex justify-start">
                              <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg max-w-[80%]">
                                <p className="text-sm">Hi there! I'll be at the pickup point on time.</p>
                                <p className="text-xs text-gray-500 text-right mt-1">10:20 AM</p>
                              </div>
                            </div>
                            <div className="flex justify-end">
                              <div className="bg-[#FFD600]/10 dark:bg-[#FFD600]/20 p-3 rounded-lg max-w-[80%]">
                                <p className="text-sm">Great! See you soon. I'm wearing a blue shirt.</p>
                                <p className="text-xs text-gray-500 text-right mt-1">10:21 AM</p>
                              </div>
                            </div>
                          </div>
                        </ScrollArea>
                      </DialogContent>
                    </Dialog>
                    
                    <Button size="icon" variant="ghost" className="h-8 w-8">
                      <Phone className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4 mt-4 border border-dashed rounded-md border-gray-300 dark:border-gray-700">
            <div className="text-4xl mb-2">👤</div>
            <p className="text-gray-600 dark:text-gray-400 text-center">
              No passengers yet. They'll appear here once someone books your ride.
            </p>
          </div>
        )}
        
        <div className="flex justify-end mt-6 gap-3">
          {ride.status === "active" && (
            <Button variant="destructive" className="gap-2">
              <AlertCircle className="h-4 w-4" />
              Report Issue
            </Button>
          )}
          
          {ride.status === "upcoming" && (
            <Button variant="destructive" className="gap-2">
              <X className="h-4 w-4" />
              Cancel Ride
            </Button>
          )}
          
          {ride.status === "active" && (
            <Button className="gap-2 bg-gradient-to-r from-[#FFD600] to-[#FFAB00] text-black hover:text-black hover:opacity-90">
              <Check className="h-4 w-4" />
              Complete Ride
            </Button>
          )}
          
          {ride.status === "completed" && (
            <Button variant="outline" className="gap-2">
              View Details
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

interface EmptyStateProps {
  title: string;
  description: string;
  icon: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description, icon }) => {
  return (
    <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur p-8">
      <div className="text-center">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="text-xl font-medium mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {description}
        </p>
        <Button>Offer a Ride</Button>
      </div>
    </Card>
  );
};

export default ActiveRides;

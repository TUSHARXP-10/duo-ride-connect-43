
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, Edit, Trash, Plus, FileCog, Users, CarFront, Wallet } from "lucide-react";
import AdminNavbar from "@/components/AdminNavbar";

const Admin = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FDF6F3] to-[#E5DEFF] dark:from-slate-900 dark:to-slate-800">
      <AdminNavbar />
      
      <div className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-8 text-center bg-gradient-to-br from-[#0EA5E9] to-[#60A5FA] bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <DashboardCard
            title="Total Users"
            value="8,837"
            change="+124"
            isPositive={true}
            icon={<Users className="h-8 w-8 text-[#8B5CF6]" />}
          />
          <DashboardCard
            title="Total Rides"
            value="27,153"
            change="+856"
            isPositive={true}
            icon={<CarFront className="h-8 w-8 text-[#F97316]" />}
          />
          <DashboardCard
            title="Today's Rides"
            value="342"
            change="+28"
            isPositive={true}
            icon={<Calendar className="h-8 w-8 text-[#6fcf97]" />}
          />
          <DashboardCard
            title="Revenue (₹)"
            value="₹98,546"
            change="+₹12,540"
            isPositive={true}
            icon={<Wallet className="h-8 w-8 text-[#FFAB00]" />}
          />
        </div>
        
        <Tabs defaultValue="users" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-8">
            <TabsTrigger value="users">Manage Users</TabsTrigger>
            <TabsTrigger value="rides">Manage Rides</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>
          
          <TabsContent value="users">
            <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md">
              <CardHeader className="flex flex-col md:flex-row justify-between md:items-center space-y-2 md:space-y-0">
                <div>
                  <CardTitle>User Management</CardTitle>
                  <CardDescription>Manage all registered users</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Search users..." 
                      className="pl-10 w-full md:w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button className="gap-2 bg-gradient-to-r from-[#0EA5E9] to-[#60A5FA]">
                    <Plus className="h-4 w-4" />
                    Add User
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>User ID</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getMockUsers().map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-mono text-sm text-gray-600 dark:text-gray-400">
                            {user.id}
                          </TableCell>
                          <TableCell className="font-medium">
                            {user.name}
                          </TableCell>
                          <TableCell>{user.phone}</TableCell>
                          <TableCell>
                            <Badge variant={user.role === "Host" ? "outline" : "secondary"} className={
                              user.role === "Host" 
                                ? "bg-[#FFD600]/10 text-[#B36A09] dark:text-[#FFD600]" 
                                : "bg-[#6fcf97]/10 text-[#2F7947] dark:text-[#6fcf97]"
                            }>
                              {user.role}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant={user.status === "Active" ? "default" : "destructive"} className={
                              user.status === "Active" ? "bg-green-500" : ""
                            }>
                              {user.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="ghost" size="icon" className="h-8 w-8">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                
                <div className="flex items-center justify-between mt-4">
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Showing 5 of 8,837 users
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rides">
            <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md">
              <CardHeader className="flex flex-col md:flex-row justify-between md:items-center space-y-2 md:space-y-0">
                <div>
                  <CardTitle>Ride Management</CardTitle>
                  <CardDescription>Manage all rides on the platform</CardDescription>
                </div>
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search rides..." 
                    className="pl-10 w-full md:w-[250px]" 
                  />
                </div>
              </CardHeader>
              <CardContent>
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Ride ID</TableHead>
                        <TableHead>Route</TableHead>
                        <TableHead>Host</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {getMockRides().map((ride) => (
                        <TableRow key={ride.id}>
                          <TableCell className="font-mono text-sm text-gray-600 dark:text-gray-400">
                            {ride.id}
                          </TableCell>
                          <TableCell className="font-medium">
                            {ride.from} → {ride.to}
                          </TableCell>
                          <TableCell>{ride.host}</TableCell>
                          <TableCell>{ride.date}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={
                              ride.status === "Active" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" :
                              ride.status === "Completed" ? "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-400" :
                              "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                            }>
                              {ride.status}
                            </Badge>
                          </TableCell>
                          <TableCell className="text-right">
                            <div className="flex justify-end gap-2">
                              <Button variant="outline" size="sm">
                                View Details
                              </Button>
                              <Button variant="ghost" size="icon" className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
                                <Trash className="h-4 w-4" />
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="reports">
            <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md">
              <CardHeader>
                <CardTitle>System Reports</CardTitle>
                <CardDescription>View and export system reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { 
                      title: "User Growth Report",
                      description: "Monthly user registration statistics",
                      icon: <Users className="h-6 w-6" />,
                      lastUpdated: "Today"
                    },
                    { 
                      title: "Ride Completion Report",
                      description: "Ride completion rates and statistics",
                      icon: <CarFront className="h-6 w-6" />,
                      lastUpdated: "Yesterday"
                    },
                    { 
                      title: "Revenue Report",
                      description: "Financial report with earnings breakdown",
                      icon: <Wallet className="h-6 w-6" />,
                      lastUpdated: "3 days ago"
                    },
                    { 
                      title: "System Performance",
                      description: "Platform performance metrics",
                      icon: <FileCog className="h-6 w-6" />,
                      lastUpdated: "1 week ago"
                    }
                  ].map((report, index) => (
                    <Card key={index} className="flex flex-col">
                      <CardHeader className="pb-2">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{report.title}</CardTitle>
                          <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
                            {report.icon}
                          </div>
                        </div>
                        <CardDescription>{report.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                          Last updated: {report.lastUpdated}
                        </div>
                      </CardContent>
                      <div className="p-4 pt-0 mt-auto">
                        <Button className="w-full">Generate Report</Button>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  value,
  change,
  isPositive,
  icon
}) => {
  return (
    <Card className="border border-white/20 dark:border-slate-700/20 bg-white/80 dark:bg-slate-900/80 backdrop-blur shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <h3 className="text-3xl font-bold mt-1">{value}</h3>
            <div className={`mt-2 text-sm ${isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
              {change} this month
            </div>
          </div>
          <div className="rounded-full p-3 bg-gray-100 dark:bg-gray-800">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Mock data functions
const getMockUsers = () => [
  { 
    id: "USR001", 
    name: "Rahul Kumar", 
    phone: "+91 98765 43210", 
    role: "Rider", 
    status: "Active" 
  },
  { 
    id: "USR002", 
    name: "Priya Sharma", 
    phone: "+91 87654 32109", 
    role: "Host", 
    status: "Active" 
  },
  { 
    id: "USR003", 
    name: "Amit Singh", 
    phone: "+91 76543 21098", 
    role: "Host", 
    status: "Active" 
  },
  { 
    id: "USR004", 
    name: "Deepika Patel", 
    phone: "+91 65432 10987", 
    role: "Rider", 
    status: "Inactive" 
  },
  { 
    id: "USR005", 
    name: "Vikram Verma", 
    phone: "+91 54321 09876", 
    role: "Rider", 
    status: "Active" 
  }
];

const getMockRides = () => [
  {
    id: "RD001",
    from: "Koramangala",
    to: "Indiranagar",
    host: "Priya Sharma",
    date: "22 Apr 2025",
    status: "Active"
  },
  {
    id: "RD002",
    from: "HSR Layout",
    to: "Whitefield",
    host: "Amit Singh",
    date: "22 Apr 2025",
    status: "Upcoming"
  },
  {
    id: "RD003",
    from: "Jayanagar",
    to: "MG Road",
    host: "Vikram Verma",
    date: "21 Apr 2025",
    status: "Completed"
  },
  {
    id: "RD004",
    from: "Electronic City",
    to: "Marathahalli",
    host: "Amit Singh",
    date: "21 Apr 2025",
    status: "Completed"
  }
];

export default Admin;

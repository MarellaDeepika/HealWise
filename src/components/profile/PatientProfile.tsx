
import { useState } from "react";
import { User, Mail, Phone, Calendar, MapPin, Edit2, Shield, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { format } from "date-fns";

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: Date;
  time: string;
  type: "video" | "clinic";
  status: "upcoming" | "completed" | "cancelled";
}

const appointments: Appointment[] = [
  {
    id: "1",
    doctorName: "Dr. Emily Chen",
    specialty: "Cardiology",
    date: new Date(2023, 5, 5),
    time: "10:00 AM",
    type: "video",
    status: "upcoming",
  },
  {
    id: "2",
    doctorName: "Dr. James Wilson",
    specialty: "Neurology",
    date: new Date(2023, 4, 20),
    time: "3:30 PM",
    type: "clinic",
    status: "completed",
  },
  {
    id: "3",
    doctorName: "Dr. Sarah Johnson",
    specialty: "Dermatology",
    date: new Date(2023, 4, 15),
    time: "11:00 AM",
    type: "video",
    status: "completed",
  },
];

const PatientProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [dob, setDob] = useState<string>("1990-05-15");
  const [address, setAddress] = useState("123 Main St, Anytown, CA 94123");

  const handleSaveProfile = () => {
    setIsEditing(false);
    // In a real app, we would save the data to the backend here
    console.log("Saving profile:", { name, email, phone, dob, address });
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">My Profile</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src="/placeholder.svg" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                
                <h2 className="text-xl font-semibold">{name}</h2>
                <p className="text-gray-500">{email}</p>
                
                <Button variant="outline" size="sm" className="mt-4">
                  <Edit2 className="mr-2 h-4 w-4" />
                  Change Photo
                </Button>
              </div>
              
              <div className="border-t border-gray-200 my-6"></div>
              
              <div className="text-left">
                <ul className="space-y-2">
                  <li className="flex items-center text-primary-600">
                    <User className="h-5 w-5 mr-2" />
                    <span className="font-medium">Personal Information</span>
                  </li>
                  <li className="flex items-center text-gray-600 hover:text-primary-600">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>Appointments</span>
                  </li>
                  <li className="flex items-center text-gray-600 hover:text-primary-600">
                    <Shield className="h-5 w-5 mr-2" />
                    <span>Privacy & Security</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Tabs defaultValue="personal" className="w-full">
            <TabsList className="w-full justify-start mb-6 bg-transparent p-0 border-b">
              <TabsTrigger
                value="personal"
                className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
              >
                Personal Information
              </TabsTrigger>
              <TabsTrigger
                value="appointments"
                className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
              >
                Appointments
              </TabsTrigger>
              <TabsTrigger
                value="medical"
                className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
              >
                Medical Records
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="personal" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Personal Information</h3>
                    {!isEditing && (
                      <Button variant="outline" onClick={() => setIsEditing(true)}>
                        <Edit2 className="h-4 w-4 mr-2" />
                        Edit
                      </Button>
                    )}
                  </div>
                  
                  {isEditing ? (
                    <form className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="name"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="pl-9"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="email"
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="pl-9"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="phone"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              className="pl-9"
                            />
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="dob">Date of Birth</Label>
                          <div className="relative">
                            <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input
                              id="dob"
                              type="date"
                              value={dob}
                              onChange={(e) => setDob(e.target.value)}
                              className="pl-9"
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="address">Address</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="pl-9"
                          />
                        </div>
                      </div>
                      
                      <div className="flex gap-2 pt-2">
                        <Button onClick={handleSaveProfile}>Save Changes</Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>Cancel</Button>
                      </div>
                    </form>
                  ) : (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Full Name</h4>
                          <p className="flex items-center">
                            <User className="h-4 w-4 mr-2 text-gray-400" />
                            {name}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                          <p className="flex items-center">
                            <Mail className="h-4 w-4 mr-2 text-gray-400" />
                            {email}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Phone Number</h4>
                          <p className="flex items-center">
                            <Phone className="h-4 w-4 mr-2 text-gray-400" />
                            {phone}
                          </p>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-medium text-gray-500 mb-1">Date of Birth</h4>
                          <p className="flex items-center">
                            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                            {new Date(dob).toLocaleDateString("en-US", {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Address</h4>
                        <p className="flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                          {address}
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="appointments" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">My Appointments</h3>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Book New Appointment
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {appointments.map((appointment) => (
                      <Card key={appointment.id} className="overflow-hidden">
                        <CardContent className="p-0">
                          <div className="flex flex-col sm:flex-row">
                            <div className={`w-full sm:w-1/4 ${
                              appointment.status === "upcoming" 
                                ? "bg-green-50" 
                                : appointment.status === "completed"
                                ? "bg-blue-50"
                                : "bg-gray-50"
                            } p-4 flex flex-col justify-center items-center sm:items-start`}>
                              <p className="text-sm font-medium text-gray-500">
                                {format(appointment.date, "EEEE")}
                              </p>
                              <p className="text-2xl font-semibold">
                                {format(appointment.date, "d")}
                              </p>
                              <p className="text-sm">
                                {format(appointment.date, "MMMM yyyy")}
                              </p>
                              <p className="text-sm font-medium mt-1">
                                {appointment.time}
                              </p>
                            </div>
                            
                            <div className="w-full sm:w-3/4 p-4">
                              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                                <div>
                                  <h4 className="font-semibold">{appointment.doctorName}</h4>
                                  <p className="text-gray-500">{appointment.specialty}</p>
                                  
                                  <div className="flex items-center mt-2">
                                    <Badge variant="outline" className={
                                      appointment.type === "video"
                                        ? "bg-blue-50 text-blue-700"
                                        : "bg-purple-50 text-purple-700"
                                    }>
                                      {appointment.type === "video" ? "Video Consultation" : "In-Clinic Visit"}
                                    </Badge>
                                    
                                    <Badge variant="outline" className={`ml-2 ${
                                      appointment.status === "upcoming"
                                        ? "bg-green-50 text-green-700"
                                        : appointment.status === "completed"
                                        ? "bg-blue-50 text-blue-700"
                                        : "bg-red-50 text-red-700"
                                    }`}>
                                      {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                                    </Badge>
                                  </div>
                                </div>
                                
                                <div className="mt-4 sm:mt-0 flex gap-2">
                                  {appointment.status === "upcoming" ? (
                                    <>
                                      <Button variant="outline" size="sm">Reschedule</Button>
                                      <Button size="sm">Join Call</Button>
                                    </>
                                  ) : appointment.status === "completed" ? (
                                    <Button variant="outline" size="sm">View Details</Button>
                                  ) : null}
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="medical" className="mt-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-xl font-semibold">Medical Records</h3>
                    <Button>
                      <Plus className="h-4 w-4 mr-2" />
                      Add Record
                    </Button>
                  </div>
                  
                  <div className="text-center py-8">
                    <p className="text-gray-500">No medical records available yet.</p>
                    <p className="text-sm text-gray-400 mt-2">
                      Medical records will appear here after your consultations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;

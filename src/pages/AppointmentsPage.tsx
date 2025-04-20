
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock, MapPin, Video, FileText } from "lucide-react";
import { format } from "date-fns";

interface Appointment {
  id: string;
  doctorName: string;
  doctorImage: string;
  specialty: string;
  date: Date;
  time: string;
  location: string;
  type: "video" | "clinic";
  status: "upcoming" | "completed" | "cancelled";
}

const appointments: Appointment[] = [
  {
    id: "1",
    doctorName: "Dr. Emily Chen",
    doctorImage: "https://randomuser.me/api/portraits/women/68.jpg",
    specialty: "Cardiology",
    date: new Date(2023, 5, 15),
    time: "10:00 AM",
    location: "HeartCare Medical Center",
    type: "video",
    status: "upcoming",
  },
  {
    id: "2",
    doctorName: "Dr. James Wilson",
    doctorImage: "https://randomuser.me/api/portraits/men/32.jpg",
    specialty: "Neurology",
    date: new Date(2023, 5, 18),
    time: "3:30 PM",
    location: "Neuroscience Institute",
    type: "clinic",
    status: "upcoming",
  },
  {
    id: "3",
    doctorName: "Dr. Sarah Johnson",
    doctorImage: "https://randomuser.me/api/portraits/women/44.jpg",
    specialty: "Dermatology",
    date: new Date(2023, 4, 25),
    time: "11:00 AM",
    location: "SkinCare Clinic",
    type: "video",
    status: "completed",
  },
  {
    id: "4",
    doctorName: "Dr. Robert Davis",
    doctorImage: "https://randomuser.me/api/portraits/men/46.jpg",
    specialty: "Orthopedics",
    date: new Date(2023, 4, 20),
    time: "2:00 PM",
    location: "Orthopedic Specialists",
    type: "clinic",
    status: "completed",
  },
  {
    id: "5",
    doctorName: "Dr. Michelle Lee",
    doctorImage: "https://randomuser.me/api/portraits/women/45.jpg",
    specialty: "Pediatrics",
    date: new Date(2023, 4, 10),
    time: "9:30 AM",
    location: "Children's Medical Center",
    type: "clinic",
    status: "cancelled",
  },
];

const AppointmentsPage = () => {
  const [activeTab, setActiveTab] = useState("upcoming");
  
  const filteredAppointments = appointments.filter(
    (appointment) => appointment.status === activeTab
  );
  
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2">My Appointments</h1>
        <p className="text-gray-600 mb-6">
          Manage your scheduled consultations and past visits
        </p>
        
        <Tabs defaultValue="upcoming" value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="w-full justify-start mb-6 bg-transparent p-0 border-b">
            <TabsTrigger
              value="upcoming"
              className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
            >
              Upcoming
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
            >
              Past
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
            >
              Cancelled
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="upcoming" className="mt-0">
            {filteredAppointments.length > 0 ? (
              <div className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 bg-blue-50 p-6 flex flex-col items-center md:items-start justify-center">
                          <p className="text-sm font-medium text-gray-500">
                            {format(appointment.date, "EEEE")}
                          </p>
                          <p className="text-3xl font-bold my-1">
                            {format(appointment.date, "d")}
                          </p>
                          <p className="text-sm">
                            {format(appointment.date, "MMMM yyyy")}
                          </p>
                          <div className="flex items-center mt-2 text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                        
                        <div className="w-full md:w-3/4 p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                              <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage src={appointment.doctorImage} alt={appointment.doctorName} />
                                <AvatarFallback>{appointment.doctorName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-lg">{appointment.doctorName}</h3>
                                <p className="text-gray-500">{appointment.specialty}</p>
                              </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-2">
                              {appointment.type === "video" ? (
                                <Button>
                                  <Video className="h-4 w-4 mr-2" />
                                  Join Call
                                </Button>
                              ) : (
                                <Button>
                                  <MapPin className="h-4 w-4 mr-2" />
                                  Get Directions
                                </Button>
                              )}
                              <Button variant="outline">Reschedule</Button>
                            </div>
                          </div>
                          
                          <div className="border-t mt-4 pt-4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                              <div className="flex flex-col md:flex-row md:items-center gap-4">
                                <div className="flex items-center">
                                  <Badge variant="outline" className={
                                    appointment.type === "video"
                                      ? "bg-blue-50 text-blue-700"
                                      : "bg-purple-50 text-purple-700"
                                  }>
                                    {appointment.type === "video" ? "Video Consultation" : "In-Clinic Visit"}
                                  </Badge>
                                </div>
                                
                                <div className="flex items-center">
                                  {appointment.type === "clinic" && (
                                    <div className="flex items-center text-gray-600 text-sm">
                                      <MapPin className="h-4 w-4 mr-1" />
                                      <span>{appointment.location}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              
                              <div>
                                <Button variant="ghost" size="sm" className="text-gray-500">
                                  <FileText className="h-4 w-4 mr-1" />
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Upcoming Appointments</h3>
                <p className="text-gray-500 mb-6">
                  You don't have any upcoming appointments scheduled.
                </p>
                <Button>Book an Appointment</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            {filteredAppointments.length > 0 ? (
              <div className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 bg-gray-50 p-6 flex flex-col items-center md:items-start justify-center">
                          <p className="text-sm font-medium text-gray-500">
                            {format(appointment.date, "EEEE")}
                          </p>
                          <p className="text-3xl font-bold my-1">
                            {format(appointment.date, "d")}
                          </p>
                          <p className="text-sm">
                            {format(appointment.date, "MMMM yyyy")}
                          </p>
                          <div className="flex items-center mt-2 text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                        
                        <div className="w-full md:w-3/4 p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                              <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage src={appointment.doctorImage} alt={appointment.doctorName} />
                                <AvatarFallback>{appointment.doctorName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-lg">{appointment.doctorName}</h3>
                                <p className="text-gray-500">{appointment.specialty}</p>
                              </div>
                            </div>
                            
                            <div className="flex gap-2">
                              <Button>
                                <FileText className="h-4 w-4 mr-2" />
                                View Prescription
                              </Button>
                              <Button variant="outline">Book Again</Button>
                            </div>
                          </div>
                          
                          <div className="border-t mt-4 pt-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Badge variant="outline" className={
                                  appointment.type === "video"
                                    ? "bg-blue-50 text-blue-700"
                                    : "bg-purple-50 text-purple-700"
                                }>
                                  {appointment.type === "video" ? "Video Consultation" : "In-Clinic Visit"}
                                </Badge>
                                <Badge variant="outline" className="ml-2 bg-green-50 text-green-700">
                                  Completed
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Past Appointments</h3>
                <p className="text-gray-500 mb-6">
                  You don't have any past appointments.
                </p>
                <Button>Book an Appointment</Button>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="cancelled" className="mt-0">
            {filteredAppointments.length > 0 ? (
              <div className="space-y-4">
                {filteredAppointments.map((appointment) => (
                  <Card key={appointment.id} className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="flex flex-col md:flex-row">
                        <div className="w-full md:w-1/4 bg-red-50 p-6 flex flex-col items-center md:items-start justify-center">
                          <p className="text-sm font-medium text-gray-500">
                            {format(appointment.date, "EEEE")}
                          </p>
                          <p className="text-3xl font-bold my-1">
                            {format(appointment.date, "d")}
                          </p>
                          <p className="text-sm">
                            {format(appointment.date, "MMMM yyyy")}
                          </p>
                          <div className="flex items-center mt-2 text-gray-600">
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{appointment.time}</span>
                          </div>
                        </div>
                        
                        <div className="w-full md:w-3/4 p-6">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                            <div className="flex items-center mb-4 md:mb-0">
                              <Avatar className="h-12 w-12 mr-4">
                                <AvatarImage src={appointment.doctorImage} alt={appointment.doctorName} />
                                <AvatarFallback>{appointment.doctorName.charAt(0)}</AvatarFallback>
                              </Avatar>
                              <div>
                                <h3 className="font-semibold text-lg">{appointment.doctorName}</h3>
                                <p className="text-gray-500">{appointment.specialty}</p>
                              </div>
                            </div>
                            
                            <div>
                              <Button>
                                Reschedule
                              </Button>
                            </div>
                          </div>
                          
                          <div className="border-t mt-4 pt-4">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <Badge variant="outline" className={
                                  appointment.type === "video"
                                    ? "bg-blue-50 text-blue-700"
                                    : "bg-purple-50 text-purple-700"
                                }>
                                  {appointment.type === "video" ? "Video Consultation" : "In-Clinic Visit"}
                                </Badge>
                                <Badge variant="outline" className="ml-2 bg-red-50 text-red-700">
                                  Cancelled
                                </Badge>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">No Cancelled Appointments</h3>
                <p className="text-gray-500 mb-6">
                  You don't have any cancelled appointments.
                </p>
                <Button>Book an Appointment</Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default AppointmentsPage;

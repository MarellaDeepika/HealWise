
import { useState } from "react";
import { format, isToday, addDays, isSameDay } from "date-fns";
import { Calendar as CalendarIcon, Clock, Video, MapPin, CreditCard, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { toast } from "@/hooks/use-toast";

interface AppointmentBookingProps {
  doctorId: string;
  doctorName: string;
  fee: string;
  phoneNumber?: string;
  videoLink?: string;
}

const timeSlots = [
  { id: "1", time: "9:00 AM", available: true },
  { id: "2", time: "10:00 AM", available: true },
  { id: "3", time: "11:00 AM", available: false },
  { id: "4", time: "12:00 PM", available: false },
  { id: "5", time: "2:00 PM", available: true },
  { id: "6", time: "3:00 PM", available: true },
  { id: "7", time: "4:00 PM", available: true },
  { id: "8", time: "5:00 PM", available: false },
];

const AppointmentBooking = ({ 
  doctorId, 
  doctorName, 
  fee,
  phoneNumber = "9999999999",
  videoLink = "https://meet.google.com/abc-defg-hij"
}: AppointmentBookingProps) => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<"video" | "clinic" | "phone">("video");
  
  const availableDates = Array.from({ length: 15 }, (_, i) => addDays(new Date(), i));
  
  const handleDateSelect = (newDate: Date | undefined) => {
    setDate(newDate);
    setSelectedSlot(null);
  };

  const handleProceedToPay = () => {
    if (!date || !selectedSlot) {
      toast({
        title: "Appointment Incomplete",
        description: "Please select a date and time slot for your appointment.",
        variant: "destructive"
      });
      return;
    }

    const selectedTime = timeSlots.find(slot => slot.id === selectedSlot)?.time;
    
    toast({
      title: "Appointment Booked",
      description: `Your ${consultationType} consultation with ${doctorName} is scheduled for ${format(date, "PPP")} at ${selectedTime}.`,
    });

    // In a real app, this would send data to the backend
    console.log("Booking appointment:", {
      doctorId,
      doctorName,
      consultationType,
      date: format(date, "yyyy-MM-dd"),
      time: selectedTime,
      contactInfo: consultationType === "phone" ? phoneNumber : 
                  consultationType === "video" ? videoLink : null
    });
  };
  
  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold mb-6">Book an Appointment</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Select Consultation Type</CardTitle>
              <CardDescription>Choose how you want to consult with {doctorName}</CardDescription>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={consultationType}
                onValueChange={(value) => setConsultationType(value as "video" | "clinic" | "phone")}
                className="flex flex-col sm:flex-row gap-4"
              >
                <div className={cn(
                  "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                  consultationType === "video" ? "border-primary-500 bg-primary-50" : "border-gray-200"
                )}>
                  <RadioGroupItem value="video" id="video" />
                  <Label htmlFor="video" className="flex items-center cursor-pointer">
                    <Video className="h-5 w-5 mr-2 text-primary-600" />
                    <div>
                      <span className="font-medium block">Video Consultation</span>
                      <span className="text-sm text-gray-500">Consult from the comfort of your home</span>
                    </div>
                  </Label>
                </div>
                
                <div className={cn(
                  "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                  consultationType === "phone" ? "border-primary-500 bg-primary-50" : "border-gray-200"
                )}>
                  <RadioGroupItem value="phone" id="phone" />
                  <Label htmlFor="phone" className="flex items-center cursor-pointer">
                    <Phone className="h-5 w-5 mr-2 text-primary-600" />
                    <div>
                      <span className="font-medium block">Phone Consultation</span>
                      <span className="text-sm text-gray-500">Talk to the doctor via phone</span>
                    </div>
                  </Label>
                </div>
                
                <div className={cn(
                  "flex items-center space-x-2 border rounded-lg p-4 cursor-pointer transition-all",
                  consultationType === "clinic" ? "border-primary-500 bg-primary-50" : "border-gray-200"
                )}>
                  <RadioGroupItem value="clinic" id="clinic" />
                  <Label htmlFor="clinic" className="flex items-center cursor-pointer">
                    <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                    <div>
                      <span className="font-medium block">In-Clinic Appointment</span>
                      <span className="text-sm text-gray-500">Visit the doctor at their clinic</span>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
          
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Select Date & Time</CardTitle>
              <CardDescription>Choose your preferred appointment slot</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-3">Select Date</h3>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {availableDates.slice(0, 5).map((d, i) => (
                      <button
                        key={i}
                        className={cn(
                          "flex flex-col items-center rounded-lg p-2 min-w-[70px] border",
                          date && isSameDay(d, date)
                            ? "bg-primary-50 border-primary-500 text-primary-700"
                            : "border-gray-200 hover:border-gray-300"
                        )}
                        onClick={() => handleDateSelect(d)}
                      >
                        <span className="text-xs text-gray-500">{format(d, "EEE")}</span>
                        <span className="text-lg font-medium">{format(d, "d")}</span>
                        <span className="text-xs text-gray-500">{format(d, "MMM")}</span>
                        {isToday(d) && (
                          <Badge variant="outline" className="mt-1 text-[10px] py-0 h-4">
                            Today
                          </Badge>
                        )}
                      </button>
                    ))}
                  </div>
                  
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant="outline" className="w-full">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                
                <div className="md:w-1/2">
                  <h3 className="font-medium mb-3">Select Time</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {timeSlots.map((slot) => (
                      <button
                        key={slot.id}
                        disabled={!slot.available}
                        className={cn(
                          "py-2 px-3 rounded-md border text-center flex items-center justify-center gap-1",
                          slot.available
                            ? selectedSlot === slot.id
                              ? "bg-primary-50 border-primary-500 text-primary-700"
                              : "border-gray-200 hover:border-gray-300"
                            : "bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed"
                        )}
                        onClick={() => slot.available && setSelectedSlot(slot.id)}
                      >
                        <Clock className="h-3.5 w-3.5" />
                        {slot.time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div>
          <Card className="sticky top-20">
            <CardHeader>
              <CardTitle>Appointment Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Doctor</h3>
                <p className="font-medium">{doctorName}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Consultation Type</h3>
                <div className="flex items-center gap-2">
                  {consultationType === "video" ? (
                    <>
                      <Video className="h-4 w-4 text-primary-600" />
                      <span>Video Consultation</span>
                    </>
                  ) : consultationType === "phone" ? (
                    <>
                      <Phone className="h-4 w-4 text-primary-600" />
                      <span>Phone Consultation</span>
                    </>
                  ) : (
                    <>
                      <MapPin className="h-4 w-4 text-primary-600" />
                      <span>In-Clinic Appointment</span>
                    </>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">Date & Time</h3>
                <p>
                  {date ? format(date, "PPP") : "Select a date"} 
                  {selectedSlot ? ` at ${timeSlots.find(slot => slot.id === selectedSlot)?.time}` : ""}
                </p>
              </div>

              {consultationType === "video" && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Video Link</h3>
                  <p className="text-sm break-all">{videoLink}</p>
                  <p className="text-xs text-gray-500 mt-1">(Available after payment)</p>
                </div>
              )}

              {consultationType === "phone" && (
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Phone Number</h3>
                  <p className="text-sm">{phoneNumber}</p>
                  <p className="text-xs text-gray-500 mt-1">(Doctor will call you at this number)</p>
                </div>
              )}
              
              <div className="border-t pt-4">
                <div className="flex justify-between font-medium">
                  <span>Consultation Fee</span>
                  <span>{fee}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  {consultationType === "video" 
                    ? "Additional charges may apply for prescription delivery." 
                    : consultationType === "phone"
                    ? "Standard call rates may apply."
                    : "Additional charges may apply for tests and medications."}
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                className="w-full" 
                disabled={!date || !selectedSlot}
                onClick={handleProceedToPay}
              >
                <CreditCard className="mr-2 h-4 w-4" />
                Proceed to Pay
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;

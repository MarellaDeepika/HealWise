
import { useState } from "react";
import { Search, Filter, MapPin, Calendar, Clock, Sliders } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

const specialties = [
  "All Specialties",
  "Cardiology",
  "Dermatology",
  "Gastroenterology",
  "Neurology",
  "Orthopedics",
  "Pediatrics",
  "Psychiatry",
  "Urology",
];

const SearchFilters = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-4 relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search doctors, specialties..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        
        <div className="lg:col-span-3">
          <Select value={specialty} onValueChange={setSpecialty}>
            <SelectTrigger>
              <SelectValue placeholder="Select Specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Specialties</SelectLabel>
                {specialties.map((spec) => (
                  <SelectItem key={spec} value={spec.toLowerCase()}>
                    {spec}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        
        <div className="lg:col-span-3 relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Location"
            className="pl-9"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        
        <div className="lg:col-span-2 flex">
          <Button className="w-full">Search</Button>
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-3 border-t">
        <div className="text-sm text-gray-500">Advanced Filters:</div>
        <div className="flex gap-2 flex-wrap">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                <Calendar className="h-4 w-4" />
                <span>Availability</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter by Availability</SheetTitle>
                <SheetDescription>
                  Choose your preferred appointment slots
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Days</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Today", "Tomorrow", "This Week", "This Weekend", "Next Week"].map((day) => (
                        <div className="flex items-center space-x-2" key={day}>
                          <Checkbox id={day.toLowerCase().replace(" ", "-")} />
                          <Label htmlFor={day.toLowerCase().replace(" ", "-")}>{day}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Time of day</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["Morning", "Afternoon", "Evening"].map((time) => (
                        <div className="flex items-center space-x-2" key={time}>
                          <Checkbox id={time.toLowerCase()} />
                          <Label htmlFor={time.toLowerCase()}>{time}</Label>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <Button variant="outline">Reset</Button>
                <Button>Apply</Button>
              </div>
            </SheetContent>
          </Sheet>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                <Filter className="h-4 w-4" />
                <span>Consultation Type</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Consultation Type</SheetTitle>
                <SheetDescription>
                  Choose how you want to consult with the doctor
                </SheetDescription>
              </SheetHeader>
              <div className="py-4">
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="video" />
                    <Label htmlFor="video">Video Consultation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="in-clinic" />
                    <Label htmlFor="in-clinic">In-Clinic Appointment</Label>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <Button variant="outline">Reset</Button>
                <Button>Apply</Button>
              </div>
            </SheetContent>
          </Sheet>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="sm" className="flex gap-1 items-center">
                <Sliders className="h-4 w-4" />
                <span>More Filters</span>
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>More Filters</SheetTitle>
                <SheetDescription>
                  Refine your search with additional filters
                </SheetDescription>
              </SheetHeader>
              <div className="py-4 space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Gender</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="male" />
                      <Label htmlFor="male">Male</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="female" />
                      <Label htmlFor="female">Female</Label>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Experience (years)</h4>
                  <Slider defaultValue={[5]} max={30} step={1} />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span>15</span>
                    <span>30+</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Consultation Fee</h4>
                  <Slider defaultValue={[500]} max={2000} step={100} />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$0</span>
                    <span>$1000</span>
                    <span>$2000+</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2].map((rating) => (
                      <div className="flex items-center space-x-2" key={rating}>
                        <Checkbox id={`rating-${rating}`} />
                        <Label htmlFor={`rating-${rating}`}>{rating}+ Stars</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-2 mt-2">
                <Button variant="outline">Reset</Button>
                <Button>Apply</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;

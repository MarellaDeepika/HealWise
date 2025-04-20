
import { Star, MapPin, Clock, Award, CheckCircle, Video, Calendar, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface DoctorHeaderProps {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  experience: string;  // This stays as a string
  rating: number;
  reviewCount: number;
  location: string;
  clinic: string;
  fee: string;
  imageUrl: string;
}

const DoctorHeader = ({
  id,
  name,
  specialty,
  qualifications,
  experience,
  rating,
  reviewCount,
  location,
  clinic,
  fee,
  imageUrl,
}: DoctorHeaderProps) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/4">
            <div className="relative rounded-lg overflow-hidden border shadow">
              <img
                src={imageUrl}
                alt={`Dr. ${name}`}
                className="w-full aspect-square object-cover"
              />
              <Button variant="outline" size="icon" className="absolute top-3 right-3 bg-white rounded-full">
                <Heart className="h-5 w-5 text-gray-500" />
              </Button>
            </div>
          </div>
          
          <div className="md:w-3/4">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold mb-1">{name}</h1>
                <p className="text-gray-600 mb-3">{specialty} • {qualifications}</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center bg-green-50 text-green-700 rounded px-2 py-0.5">
                    <Star className="h-3.5 w-3.5 fill-current mr-1" />
                    <span className="font-medium">{rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({reviewCount} reviews)</span>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2">
                    <Clock className="h-5 w-5 text-gray-400 mt-0.5" />
                    <p className="text-gray-700">{experience} years of experience</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                    <div>
                      <p className="text-gray-700">{clinic}</p>
                      <p className="text-sm text-gray-500">{location}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-gray-400 mt-0.5" />
                    <p className="text-gray-700">Consultation fee: <span className="font-semibold">{fee}</span></p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    <Video className="h-3.5 w-3.5 mr-1" /> 
                    Video Consultation
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    <Calendar className="h-3.5 w-3.5 mr-1" /> 
                    In-clinic Appointment
                  </Badge>
                </div>
              </div>
              
              <div className="flex flex-col gap-2 mt-4 md:mt-0">
                <Button size="lg" className="flex gap-2">
                  <Calendar className="h-5 w-5" />
                  Book Appointment
                </Button>
                <Button variant="outline" size="lg" className="flex gap-2">
                  <Video className="h-5 w-5" />
                  Video Consult
                </Button>
              </div>
            </div>
            
            <div className="mt-4 border-t pt-4">
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1.5" />
                  <span className="text-sm">Medical Registration Verified</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1.5" />
                  <span className="text-sm">Timely Response</span>
                </div>
                <div className="flex items-center text-green-600">
                  <CheckCircle className="h-4 w-4 mr-1.5" />
                  <span className="text-sm">Highly Recommended</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorHeader;

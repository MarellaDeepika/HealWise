
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface DoctorCardProps {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  reviewCount: number;
  location: string;
  imageUrl: string;
  fee: string;
  availability: string;
}

const DoctorCard = ({
  id,
  name,
  specialty,
  experience,
  rating,
  reviewCount,
  location,
  imageUrl,
  fee,
  availability,
}: DoctorCardProps) => {
  return (
    <Card className="overflow-hidden card-hover">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <Link to={`/doctor/${id}`}>
              <img
                src={imageUrl}
                alt={`Dr. ${name}`}
                className="w-full h-48 md:h-full object-cover"
              />
            </Link>
          </div>
          <div className="w-full md:w-2/3 lg:w-3/4 p-4 md:p-6">
            <div className="flex flex-wrap items-start justify-between">
              <div>
                <Link to={`/doctor/${id}`} className="hover:text-primary-600">
                  <h3 className="text-xl font-semibold mb-1">{name}</h3>
                </Link>
                <p className="text-gray-500 mb-2">{specialty}</p>
                <p className="text-sm text-gray-600 mb-1">{experience} years of experience</p>
                
                <div className="flex items-center mb-3">
                  <div className="flex items-center bg-green-50 text-green-700 rounded px-2 py-0.5">
                    <Star className="h-3.5 w-3.5 fill-current mr-1" />
                    <span className="font-medium">{rating}</span>
                  </div>
                  <span className="text-sm text-gray-500 ml-2">({reviewCount} reviews)</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Location:</span> {location}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-100">
                    Video Consultation
                  </Badge>
                  <Badge variant="outline" className="bg-purple-50 text-purple-700 hover:bg-purple-100">
                    In-clinic
                  </Badge>
                </div>
              </div>
              
              <div className="mt-3 md:mt-0 md:text-right">
                <p className="text-sm text-gray-600 mb-1">Fee: <span className="font-semibold text-gray-900">{fee}</span></p>
                <p className="text-sm text-green-600 mb-3">Available {availability}</p>
                <Link to={`/doctor/${id}`}>
                  <Button>Book Appointment</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;

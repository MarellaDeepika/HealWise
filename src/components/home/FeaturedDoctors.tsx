
import { Link } from "react-router-dom";
import { Star, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const doctors = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    specialty: "Cardiology",
    experience: "12 years",
    rating: 4.9,
    reviews: 120,
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    availability: "Today",
  },
  {
    id: "2",
    name: "Dr. James Wilson",
    specialty: "Neurology",
    experience: "15 years",
    rating: 4.8,
    reviews: 95,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    availability: "Tomorrow",
  },
  {
    id: "3",
    name: "Dr. Sarah Johnson",
    specialty: "Dermatology",
    experience: "10 years",
    rating: 4.7,
    reviews: 78,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    availability: "Today",
  },
  {
    id: "4",
    name: "Dr. Robert Davis",
    specialty: "Orthopedics",
    experience: "18 years",
    rating: 4.9,
    reviews: 150,
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    availability: "Thursday",
  },
];

const FeaturedDoctors = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Doctors</h2>
            <p className="text-gray-600">Highly rated specialists ready to help you</p>
          </div>
          <Link to="/doctors" className="text-primary-600 hover:text-primary-700 hover:underline font-medium">
            View All Doctors →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <Card key={doctor.id} className="overflow-hidden h-full card-hover">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
                  </div>
                </div>
                <div className="p-4">
                  <Link to={`/doctor/${doctor.id}`} className="hover:text-primary-600">
                    <h3 className="font-semibold text-lg mb-1">{doctor.name}</h3>
                  </Link>
                  <p className="text-gray-500 mb-2">{doctor.specialty}</p>
                  <p className="text-sm text-gray-600 mb-2">{doctor.experience} experience</p>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center text-yellow-500">
                      <Star className="h-4 w-4 fill-current" />
                      <span className="ml-1 font-medium">{doctor.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500 ml-2">({doctor.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-green-600 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      Available {doctor.availability}
                    </div>
                    <Link to={`/doctor/${doctor.id}`}>
                      <Button variant="outline" size="sm">Book Now</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;

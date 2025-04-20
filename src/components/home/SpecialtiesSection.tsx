
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Stethoscope, Eye, Bone, Baby, Thermometer, Pill } from "lucide-react";

const specialties = [
  {
    id: "cardiology",
    name: "Cardiology",
    description: "Heart & Cardiovascular Care",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "neurology",
    name: "Neurology",
    description: "Brain & Nervous System",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    id: "internal-medicine",
    name: "Internal Medicine",
    description: "General Adult Care",
    icon: Stethoscope,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "ophthalmology",
    name: "Ophthalmology",
    description: "Eye Care & Surgery",
    icon: Eye,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "orthopedics",
    name: "Orthopedics",
    description: "Bone & Joint Care",
    icon: Bone,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: "pediatrics",
    name: "Pediatrics",
    description: "Child Healthcare",
    icon: Baby,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    id: "family-medicine",
    name: "Family Medicine",
    description: "Primary Healthcare",
    icon: Thermometer,
    color: "text-teal-500",
    bgColor: "bg-teal-50",
  },
  {
    id: "dermatology",
    name: "Dermatology",
    description: "Skin Treatments",
    icon: Pill,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Medical Specialties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find the right specialist for your health needs. Our network includes experts across all major medical fields.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {specialties.map((specialty) => (
            <Link key={specialty.id} to={`/speciality/${specialty.id}`}>
              <Card className="h-full hover:shadow-md transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className={`p-3 rounded-full ${specialty.bgColor} ${specialty.color} mb-4`}>
                    <specialty.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{specialty.name}</h3>
                  <p className="text-gray-500 text-sm">{specialty.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/specialities"
            className="text-primary-600 font-medium hover:text-primary-700 hover:underline inline-flex items-center"
          >
            View All Specialties
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;


import Layout from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Brain, Stethoscope, Eye, Bone, Baby, Thermometer, Pill, 
  Droplet, Microscope, Scissors, Wind, Leaf, Zap, Smile, Loader } from "lucide-react";
import { Link } from "react-router-dom";

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
  {
    id: "hematology",
    name: "Hematology",
    description: "Blood Disorders",
    icon: Droplet,
    color: "text-red-500",
    bgColor: "bg-red-50",
  },
  {
    id: "pathology",
    name: "Pathology",
    description: "Disease Diagnosis",
    icon: Microscope,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
  },
  {
    id: "surgery",
    name: "General Surgery",
    description: "Surgical Procedures",
    icon: Scissors,
    color: "text-gray-500",
    bgColor: "bg-gray-50",
  },
  {
    id: "pulmonology",
    name: "Pulmonology",
    description: "Respiratory Care",
    icon: Wind,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    id: "ayurveda",
    name: "Ayurveda",
    description: "Traditional Medicine",
    icon: Leaf,
    color: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    id: "physiotherapy",
    name: "Physiotherapy",
    description: "Physical Rehabilitation",
    icon: Zap,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    id: "dentistry",
    name: "Dentistry",
    description: "Dental Care",
    icon: Smile,
    color: "text-cyan-500",
    bgColor: "bg-cyan-50",
  },
  {
    id: "rheumatology",
    name: "Rheumatology",
    description: "Joint & Autoimmune Disorders",
    icon: Loader,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
  },
];

const SpecialtiesPage = () => {
  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2">Medical Specialties</h1>
        <p className="text-gray-600 mb-8">
          Explore our wide range of medical specialties and find the right specialist for your health needs
        </p>
        
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
      </div>
    </Layout>
  );
};

export default SpecialtiesPage;

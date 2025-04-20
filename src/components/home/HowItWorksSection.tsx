
import { Search, Calendar, Video, FileText } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Find Your Doctor",
    description: "Search for specialists by symptom, specialty, or doctor name",
    icon: Search,
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Book an Appointment",
    description: "Select a time slot that's convenient for you",
    icon: Calendar,
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    title: "Consult Online or Visit",
    description: "Get care through video or in-person visits",
    icon: Video,
    color: "bg-purple-100 text-purple-600",
  },
  {
    id: 4,
    title: "Digital Prescriptions",
    description: "Receive prescriptions and follow-ups digitally",
    icon: FileText,
    color: "bg-orange-100 text-orange-600",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How Healwise Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Getting the healthcare you need is simple and straightforward with our platform.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div key={step.id} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className={`${step.color} p-4 rounded-full mb-4`}>
                  <step.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
              
              {step.id < steps.length && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-200 transform -translate-x-8">
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 border-t-2 border-r-2 border-gray-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

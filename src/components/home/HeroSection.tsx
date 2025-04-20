
import { Link } from "react-router-dom";
import { Search, Calendar, Video, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2880&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Your Health, <span className="text-coral-300">Our Priority</span>
            </h1>
            <p className="text-xl mb-6 text-blue-50">
              Find and book appointments with top doctors near you. Consult online or visit in-clinic.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <Search className="h-6 w-6 mx-auto mb-2" />
                <p className="font-medium">Find Doctors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <Calendar className="h-6 w-6 mx-auto mb-2" />
                <p className="font-medium">Book Appointments</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg text-center">
                <Video className="h-6 w-6 mx-auto mb-2" />
                <p className="font-medium">Video Consult</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Link to="/doctors">
                <Button size="lg" className="bg-coral-500 hover:bg-coral-600">
                  Find a Doctor
                </Button>
              </Link>
              <Link to="/specialities">
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/20">
                  Explore Specialties
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
                alt="Doctor"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-lg p-4 max-w-[80%]">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-medium text-sm">Next Available Slot</h3>
                    <p className="text-gray-600 text-sm">Today, 2:00 PM</p>
                    <Link to="/doctors" className="text-primary-600 text-sm flex items-center mt-1 hover:underline">
                      Book now <ArrowRight className="h-3 w-3 ml-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

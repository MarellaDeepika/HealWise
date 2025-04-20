
import { useParams, Navigate } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import DoctorHeader from "@/components/doctor/DoctorHeader";
import DoctorDetails from "@/components/doctor/DoctorDetails";
import AppointmentBooking from "@/components/doctor/AppointmentBooking";
import { useDoctor } from "@/hooks/useDoctors";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";

const DoctorDetailPage = () => {
  const { id } = useParams();
  
  if (!id) return <Navigate to="/doctors" />;
  
  const { data: doctor, isLoading, error } = useDoctor(id);
  
  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to load doctor details. Please try again later."
    });
    
    return (
      <Layout>
        <div className="container py-8 text-center text-red-600">
          Error loading doctor details. Please try again later.
        </div>
      </Layout>
    );
  }
  
  if (isLoading) {
    return (
      <Layout>
        <div className="space-y-4 p-8">
          <Skeleton className="h-[400px]" />
          <Skeleton className="h-[600px]" />
        </div>
      </Layout>
    );
  }
  
  if (!doctor) {
    return (
      <Layout>
        <div className="container py-8 text-center text-gray-600">
          Doctor not found.
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <DoctorHeader 
        id={doctor.id}
        name={doctor.name}
        specialty={doctor.specialty}
        qualifications={doctor.qualifications}
        experience={doctor.experience_years.toString()}
        rating={doctor.rating}
        reviewCount={doctor.review_count}
        location={doctor.location}
        clinic={doctor.clinic}
        fee={doctor.fee}
        imageUrl={doctor.image_url}
      />
      <DoctorDetails 
        id={doctor.id}
        about={doctor.about}
        specializations={doctor.specializations || []}
        education={doctor.education || []}
        experience={doctor.experience || []}
        awards={doctor.awards || []}
        reviews={doctor.reviews || []}
      />
      <AppointmentBooking 
        doctorId={doctor.id} 
        doctorName={doctor.name} 
        fee={doctor.fee}
        phoneNumber={doctor.phone || "9999999999"} 
        videoLink={doctor.video_link || "https://meet.google.com/abc-defg-hij"}
      />
    </Layout>
  );
};

export default DoctorDetailPage;

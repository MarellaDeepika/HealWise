
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SearchFilters from "@/components/doctors/SearchFilters";
import DoctorCard from "@/components/doctors/DoctorCard";
import { useDoctors } from "@/hooks/useDoctors";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "@/hooks/use-toast";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const DoctorsPage = () => {
  const { data: doctors, isLoading, error } = useDoctors();

  if (error) {
    toast({
      variant: "destructive",
      title: "Error",
      description: "Failed to load doctors. Using fallback data."
    });
  }

  return (
    <Layout>
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-2">Find the Best Doctors</h1>
        <p className="text-gray-600 mb-6">
          Book appointments with top doctors, specialists, and surgeons in your area
        </p>
        
        <SearchFilters />
        
        {error && (
          <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              There was an error loading the doctor data from our database. 
              You're currently viewing fallback data.
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-6">
          {isLoading && (
            <>
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
              <Skeleton className="h-48" />
            </>
          )}

          {!isLoading && doctors?.length === 0 && (
            <div className="text-center py-8 text-gray-600">
              No doctors found.
            </div>
          )}

          {doctors?.map((doctor) => (
            <DoctorCard 
              key={doctor.id}
              id={doctor.id}
              name={doctor.name}
              specialty={doctor.specialty}
              experience={doctor.experience_years.toString()}
              rating={doctor.rating}
              reviewCount={doctor.review_count}
              location={doctor.location}
              imageUrl={doctor.image_url}
              fee={doctor.fee}
              availability={doctor.availability}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DoctorsPage;

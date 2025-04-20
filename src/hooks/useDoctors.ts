
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export type Doctor = {
  id: string;
  name: string;
  specialty: string;
  qualifications: string;
  experience_years: number;
  rating: number;
  review_count: number;
  location: string;
  clinic: string;
  fee: string;
  image_url: string;
  availability: string;
  about: string;
  specializations: string[];
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  experience: Array<{
    position: string;
    hospital: string;
    duration: string;
  }>;
  awards: Array<{
    title: string;
    year: string;
  }>;
  reviews: Array<{
    id: string;
    name: string;
    date: string;
    rating: number;
    comment: string;
    avatar?: string;
  }>;
  phone?: string;
  video_link?: string;
};

// Fallback data in case the API request fails
const fallbackDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Emily Chen",
    specialty: "Cardiology",
    qualifications: "MD, FACC",
    experience_years: 12,
    rating: 4.9,
    review_count: 120,
    location: "New York Medical Center",
    clinic: "Heart Care Clinic",
    fee: "$150",
    image_url: "https://randomuser.me/api/portraits/women/68.jpg",
    availability: "Today",
    about: "Dr. Chen is a board-certified cardiologist with over 12 years of experience in treating cardiovascular diseases.",
    specializations: ["Interventional Cardiology", "Heart Failure", "Cardiac Imaging"],
    education: [
      { degree: "MD", institution: "Harvard Medical School", year: "2008" },
      { degree: "Residency", institution: "Mayo Clinic", year: "2012" }
    ],
    experience: [
      { position: "Senior Cardiologist", hospital: "New York Medical Center", duration: "2015-Present" },
      { position: "Cardiologist", hospital: "Boston General Hospital", duration: "2012-2015" }
    ],
    awards: [
      { title: "Excellence in Cardiac Care", year: "2019" },
      { title: "Clinical Research Award", year: "2016" }
    ],
    reviews: [
      { id: "r1", name: "John D.", date: "2023-10-15", rating: 5, comment: "Dr. Chen is incredibly knowledgeable and caring.", avatar: "https://randomuser.me/api/portraits/men/1.jpg" },
      { id: "r2", name: "Sarah M.", date: "2023-09-20", rating: 4.8, comment: "Very professional and thorough.", avatar: "https://randomuser.me/api/portraits/women/2.jpg" }
    ],
    phone: "9999999999",
    video_link: "https://meet.google.com/abc-defg-hij"
  },
  {
    id: "2",
    name: "Dr. James Wilson",
    specialty: "Neurology",
    qualifications: "MD, PhD",
    experience_years: 15,
    rating: 4.8,
    review_count: 95,
    location: "Central Neurological Institute",
    clinic: "Brain & Spine Center",
    fee: "$200",
    image_url: "https://randomuser.me/api/portraits/men/32.jpg",
    availability: "Tomorrow",
    about: "Dr. Wilson specializes in neurological disorders and has pioneered several treatment protocols for complex conditions.",
    specializations: ["Movement Disorders", "Neurodegenerative Diseases", "Headache Medicine"],
    education: [
      { degree: "MD", institution: "Johns Hopkins University", year: "2005" },
      { degree: "PhD", institution: "University of California", year: "2008" }
    ],
    experience: [
      { position: "Chief Neurologist", hospital: "Central Neurological Institute", duration: "2018-Present" },
      { position: "Neurologist", hospital: "Washington Medical Center", duration: "2010-2018" }
    ],
    awards: [
      { title: "Neurological Research Excellence", year: "2020" },
      { title: "Physician of the Year", year: "2017" }
    ],
    reviews: [
      { id: "r3", name: "Michael P.", date: "2023-11-02", rating: 5, comment: "Dr. Wilson's expertise is unmatched.", avatar: "https://randomuser.me/api/portraits/men/3.jpg" },
      { id: "r4", name: "Elizabeth K.", date: "2023-10-10", rating: 4.7, comment: "Very thorough and explains everything clearly.", avatar: "https://randomuser.me/api/portraits/women/4.jpg" }
    ],
    phone: "9999999999",
    video_link: "https://meet.google.com/jkl-mnop-qrs"
  }
];

export const useDoctors = () => {
  return useQuery<Doctor[]>({
    queryKey: ["doctors"],
    queryFn: async () => {
      try {
        console.log("Fetching doctors from Supabase...");
        
        // Simple query first to check if the table exists
        const { data: simpleData, error: simpleError } = await supabase
          .from("doctors")
          .select("*");
        
        if (simpleError) {
          console.error("Error with simple doctors query:", simpleError);
          throw simpleError;
        }
        
        console.log("Simple doctors query successful:", simpleData);
        
        // Now try the more complex query with relations
        try {
          const { data, error } = await supabase
            .from("doctors")
            .select("*");

          if (error) {
            console.error("Error fetching doctors:", error);
            throw error;
          }

          console.log("Successfully fetched doctors:", data);
          
          // For now, we're returning the data directly since we don't have related tables yet
          // We'll enhance this once the database schema is properly set up
          return data.map(doctor => ({
            id: doctor.id,
            name: doctor.full_name || "Unknown",
            specialty: doctor.specialization || "General Practice",
            qualifications: doctor.qualification || "MD",
            experience_years: doctor.years_of_experience || 0,
            rating: 4.5, // Placeholder
            review_count: 0, // Placeholder
            location: "Medical Center", // Placeholder
            clinic: "Health Clinic", // Placeholder
            fee: `$${doctor.consultation_fee || 100}`,
            image_url: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder
            availability: "Available",
            about: doctor.about || "No information available",
            specializations: ["General Practice"], // Placeholder
            education: [], // Placeholder
            experience: [], // Placeholder
            awards: [], // Placeholder
            reviews: [], // Placeholder
            phone: "9999999999", // As requested
            video_link: "https://meet.google.com/abc-defg-hij" // As requested
          })) as Doctor[];
        } catch (relatedError) {
          console.error("Error with related tables query:", relatedError);
          throw relatedError;
        }
      } catch (error) {
        console.error("Falling back to dummy data due to error:", error);
        return fallbackDoctors;
      }
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useDoctor = (id: string) => {
  return useQuery<Doctor>({
    queryKey: ["doctor", id],
    queryFn: async () => {
      try {
        console.log(`Fetching doctor with ID ${id} from Supabase...`);
        
        const { data: doctor, error } = await supabase
          .from("doctors")
          .select("*")
          .eq("id", id)
          .single();

        if (error) {
          console.error(`Error fetching doctor with ID ${id}:`, error);
          throw error;
        }

        console.log(`Successfully fetched doctor with ID ${id}:`, doctor);

        // For now, we're returning the data directly since we don't have related tables yet
        // We'll enhance this once the database schema is properly set up
        return {
          id: doctor.id,
          name: doctor.full_name || "Unknown",
          specialty: doctor.specialization || "General Practice",
          qualifications: doctor.qualification || "MD",
          experience_years: doctor.years_of_experience || 0,
          rating: 4.5, // Placeholder
          review_count: 0, // Placeholder
          location: "Medical Center", // Placeholder
          clinic: "Health Clinic", // Placeholder
          fee: `$${doctor.consultation_fee || 100}`,
          image_url: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder
          availability: "Available",
          about: doctor.about || "No information available",
          specializations: ["General Practice"], // Placeholder
          education: [], // Placeholder
          experience: [], // Placeholder
          awards: [], // Placeholder
          reviews: [], // Placeholder
          phone: "9999999999", // As requested
          video_link: "https://meet.google.com/abc-defg-hij" // As requested
        } as Doctor;
      } catch (error) {
        console.error(`Falling back to dummy data for doctor ${id} due to error:`, error);
        
        // Find the doctor in fallback data or return the first one
        const fallbackDoctor = fallbackDoctors.find(doc => doc.id === id) || fallbackDoctors[0];
        return fallbackDoctor;
      }
    },
    retry: 1,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

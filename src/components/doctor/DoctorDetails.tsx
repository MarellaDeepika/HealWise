
import { useState } from "react";
import { Stethoscope, Award, Briefcase, GraduationCap, Star, MessageCircle } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

interface DoctorDetailsProps {
  id: string;
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
}

const DoctorDetails = ({
  id,
  about,
  specializations,
  education,
  experience,
  awards,
  reviews,
}: DoctorDetailsProps) => {
  const [activeTab, setActiveTab] = useState("about");
  
  // Calculate rating distribution
  const totalReviews = reviews.length;
  const ratingDistribution = {
    5: reviews.filter((r) => r.rating === 5).length,
    4: reviews.filter((r) => r.rating === 4).length,
    3: reviews.filter((r) => r.rating === 3).length,
    2: reviews.filter((r) => r.rating === 2).length,
    1: reviews.filter((r) => r.rating === 1).length,
  };
  
  // Calculate average rating
  const averageRating = reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews;
  
  return (
    <div className="container py-8">
      <Tabs defaultValue="about" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="w-full justify-start border-b mb-6 bg-transparent p-0">
          <TabsTrigger
            value="about"
            className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
          >
            About
          </TabsTrigger>
          <TabsTrigger
            value="reviews"
            className="px-6 py-3 data-[state=active]:border-b-2 data-[state=active]:border-primary-600 rounded-none data-[state=active]:shadow-none bg-transparent"
          >
            Reviews
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="about" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2 space-y-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Stethoscope className="mr-2 h-5 w-5 text-primary-600" />
                    About Doctor
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">{about}</p>
                  
                  {specializations.length > 0 && (
                    <div className="mt-6">
                      <h4 className="font-medium mb-2">Specializations</h4>
                      <ul className="list-disc pl-5 text-gray-700">
                        {specializations.map((spec, index) => (
                          <li key={index}>{spec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <GraduationCap className="mr-2 h-5 w-5 text-primary-600" />
                    Education
                  </h3>
                  <div className="space-y-4">
                    {education.map((edu, index) => (
                      <div key={index} className="border-l-2 border-primary-100 pl-4 py-1">
                        <p className="font-medium">{edu.degree}</p>
                        <p className="text-gray-600">{edu.institution}</p>
                        <p className="text-gray-500 text-sm">{edu.year}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Briefcase className="mr-2 h-5 w-5 text-primary-600" />
                    Work Experience
                  </h3>
                  <div className="space-y-4">
                    {experience.map((exp, index) => (
                      <div key={index} className="border-l-2 border-primary-100 pl-4 py-1">
                        <p className="font-medium">{exp.position}</p>
                        <p className="text-gray-600">{exp.hospital}</p>
                        <p className="text-gray-500 text-sm">{exp.duration}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {awards.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Award className="mr-2 h-5 w-5 text-primary-600" />
                      Awards & Recognitions
                    </h3>
                    <div className="space-y-4">
                      {awards.map((award, index) => (
                        <div key={index} className="border-l-2 border-primary-100 pl-4 py-1">
                          <p className="font-medium">{award.title}</p>
                          <p className="text-gray-500 text-sm">{award.year}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
            
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary-600" />
                    Patient Reviews
                  </h3>
                  
                  <div className="mb-4 text-center">
                    <p className="text-4xl font-bold mb-1">{averageRating.toFixed(1)}</p>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= Math.round(averageRating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Based on {totalReviews} reviews</p>
                  </div>
                  
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="flex items-center w-12">
                          <span>{rating}</span>
                          <Star className="h-4 w-4 text-yellow-400 fill-current ml-1" />
                        </div>
                        <Progress
                          value={(ratingDistribution[rating as keyof typeof ratingDistribution] / totalReviews) * 100}
                          className="h-2"
                        />
                        <span className="text-xs text-gray-500 w-8 text-right">
                          {ratingDistribution[rating as keyof typeof ratingDistribution]}
                        </span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <button
                      className="text-primary-600 font-medium text-sm flex items-center"
                      onClick={() => setActiveTab("reviews")}
                    >
                      <MessageCircle className="h-4 w-4 mr-1" />
                      Read all reviews
                    </button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="reviews" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6">Patient Reviews</h3>
                  
                  <div className="space-y-6">
                    {reviews.map((review) => (
                      <div key={review.id} className="border-b pb-6 last:border-b-0 last:pb-0">
                        <div className="flex justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarImage src={review.avatar} alt={review.name} />
                              <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium">{review.name}</p>
                              <p className="text-sm text-gray-500">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <Star
                                key={star}
                                className={`h-4 w-4 ${
                                  star <= review.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <p className="text-gray-700">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div>
              <Card className="sticky top-20">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Star className="mr-2 h-5 w-5 text-primary-600" />
                    Rating Summary
                  </h3>
                  
                  <div className="mb-4 text-center">
                    <p className="text-4xl font-bold mb-1">{averageRating.toFixed(1)}</p>
                    <div className="flex justify-center mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-5 w-5 ${
                            star <= Math.round(averageRating)
                              ? "text-yellow-400 fill-current"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-500">Based on {totalReviews} reviews</p>
                  </div>
                  
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <div className="flex items-center w-12">
                          <span>{rating}</span>
                          <Star className="h-4 w-4 text-yellow-400 fill-current ml-1" />
                        </div>
                        <Progress
                          value={(ratingDistribution[rating as keyof typeof ratingDistribution] / totalReviews) * 100}
                          className="h-2"
                        />
                        <span className="text-xs text-gray-500 w-8 text-right">
                          {ratingDistribution[rating as keyof typeof ratingDistribution]}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default DoctorDetails;

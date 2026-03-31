import React from 'react';
import SectionHeader from '../components/ui/SectionHeader';

const ReviewCard = ({ name, role, review, rating }) => (
  <div className="flex-shrink-0 w-[300px] md:w-[450px] bg-[#0b0b0c] border border-white/5 p-8 md:p-12 rounded-[2.5rem] space-y-6 shadow-2xl">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill={i < rating ? "#3b82f6" : "none"} stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
    <p className="text-gray-400 text-sm md:text-base leading-relaxed italic">
      "{review}"
    </p>
    <div className="pt-4 border-t border-white/5 flex items-center justify-between">
      <div>
        <h4 className="text-white font-black uppercase tracking-tight">{name}</h4>
        <p className="text-[10px] font-black uppercase tracking-widest text-blue-500">{role}</p>
      </div>
      <div className="w-10 h-10 rounded-full bg-blue-600/10 border border-blue-500/20 flex items-center justify-center">
        <span className="text-blue-500 font-black text-xs italic">{name[0]}</span>
      </div>
    </div>
  </div>
);

const Reviews = () => {
  const reviews = [
    {
      name: "Viswajith E",
      role: "Elite Member",
      review: "Arsenal Fitness is hands down the best gym I’ve joined so far. The ambience is great and keeps you motivated every day. The equipment is top quality and well maintained, making workouts smooth and effective. Special shoutout to the trainers — Rishikesh CP, Sharan, Kiran, and Vignesh — who are super supportive, knowledgeable, and always push you to do better. Highly recommended for anyone serious about fitness!",
      rating: 5
    },
    {
      name: "Ananthu Krishna",
      role: "Elite Member",
      review: "Arsenal Fitness has been an amazing place for my fitness journey The workouts here are well-structured and effective, whether you’re into strength training or just getting started. The trainers are super supportive, knowledgeable, and always ready to guide you with proper form and motivation. What really stands out is the vibe—positive, energetic, and welcoming. It’s the kind of place that keeps you motivated to show up every day.I Highly recommend Arsenal Fitness to anyone looking for a great workout environment with excellent trainers and a motivating atmosphere!",
      rating: 5
    },
    {
      name: "Athul A K",
      role: "Elite Member",
      review: "Arsenal Fitness stands out as the premium gym I have experienced. Its exceptional ambiance fosters daily motivation, while the top-quality, well-maintained equipment ensures seamless and effective workouts.I extend my sincere gratitude to the trainers—Rishikesh CP, Sharan, and Vignesh for their unwavering support, extensive knowledge, and consistent encouragement. I wholeheartedly recommend their professional services to all individuals dedicated to achieving their fitness goals.",
      rating: 5
    },
    {
      name: "Harishma Girish",
      role: "Member",
      review: "Best gym in the locality! Love the aesthetics, quite spacious, good equipments, squeaky clean, separate changing room for women and most importantly, quite AFFORDABLE.Great community spirit! They go out of their way to keep things interesting for us, be it outdoor group workouts, birthday celebrations, trips or just grabbing breakfast together. Not to mention how supportive Sharan and Rishikesh are as our trainers. Excellent place to workout without burning a hole in your pocket.Highly recommend Arsenal fitness! 👌",
      rating: 5
    },
    {
      name: "Athuljith Kelat",
      role: "Member",
      review: "I've been working out at Arsenal fitness for the past three months with my friend, focusing on weight gain, and the results have been amazing! The transformation we’ve seen is beyond expectations. A huge shoutout to our personal trainers, Sharan and Rishi, for their expert guidance and motivation. Their customized workout plans and diet suggestions made a huge difference. The gym has great equipment, a motivating atmosphere, and supportive trainers. Highly recommend it to anyone looking to achieve their fitness goals.",
      rating: 5
    },
    {
      name: "Harsha",
      role: "Personal Trainee",
      review: "Arsenal Fitness Center is an exceptional gym with top-notch equipment and a wide variety of classes. The personal trainers are knowledgeable and dedicated, offering tailored workout plans to meet individual goals. The facility is always clean and well-maintained, creating a pleasant workout environment. Friendly staff and members foster a strong sense of community and motivation. With excellent amenities and flexible membership options, arsenal Fitness Center is an outstanding choice for fitness enthusiasts.",
      rating: 5
    },
    {
      name: "Swetha Johnson",
      role: "Member",
      review: "Arsenal Fitness is a very good gym with friendly staff. I had a great experience here. I was able to reduce almost 10 kg with the genuine help and guidance of my personal trainer Rishikesh C P and also Sharan, who supported me in HIT and CrossFit. Highly recommend Arsenal Fitness for your dream fitness journey ☺️.",
      rating: 5
    }
  ];

  return (
    <section id="reviews" className="bg-black py-24 md:py-32 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <SectionHeader 
          subtitle="Community Proof"
          title="Member"
          titleAccent="Insights"
          centered={false}
          className="mb-0"
        />
        <div className="flex gap-4">
           <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
              <p className="text-3xl font-black text-white italic">4.9/5</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Google Rating</p>
           </div>
           <div className="bg-white/5 border border-white/10 px-6 py-4 rounded-2xl">
              <p className="text-3xl font-black text-white italic">170+</p>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Total Reviews</p>
           </div>
        </div>
      </div>

      <div className="flex gap-8 overflow-x-auto px-6 md:px-[calc((100vw-1280px)/2)] pb-12 scrollbar-none snap-x">
        {reviews.map((review, i) => (
          <div key={i} className="snap-center">
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
      
      {/* Scroll Hint */}
      <div className="max-w-7xl mx-auto px-6 flex justify-center">
         <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-6 py-3 rounded-full">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Drag to scroll testimonials</span>
         </div>
      </div>
    </section>
  );
};

export default Reviews;

import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/ui/SectionHeader';

const ReviewCard = ({ name, role, review, rating }) => (
  <div className="flex-shrink-0 w-[320px] md:w-[500px] bg-[#0b0b0c] border border-white/5 p-10 md:p-14 rounded-[3.5rem] space-y-10 shadow-2xl transition-all duration-700 hover:border-blue-500/20 group text-center flex flex-col items-center">
    <div className="flex gap-2 justify-center">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill={i < rating ? "#3b82f6" : "none"} stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
    
    <p className="text-gray-300 text-sm md:text-lg leading-[1.8] italic font-medium opacity-80 group-hover:opacity-100 transition-opacity">
      "{review}"
    </p>

    <div className="pt-10 border-t border-white/5 w-full">
      <h4 className="text-white font-black uppercase tracking-tight text-base">{name}</h4>
      <p className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500/80 mt-1">{role}</p>
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

  // Triplicate the array for a seamless marquee loop
  const marqueeReviews = [...reviews, ...reviews, ...reviews];

  return (
    <section id="reviews" className="bg-[#050505] py-24 md:py-32 overflow-hidden border-t border-white/5 relative">
      <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center md:text-left">
        <SectionHeader
          subtitle="Community Proof"
          title="Member"
          titleAccent="Insights"
          centered={false}
          className="mb-0"
        />
      </div>

      <div className="relative overflow-visible pb-10">
        <motion.div 
          className="flex gap-8"
          animate={{ x: [0, -2500] }}
          transition={{ 
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {marqueeReviews.map((review, i) => (
            <ReviewCard key={i} {...review} />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16">
        {/* Premium Stats Row */}
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-600/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative flex flex-wrap justify-center lg:justify-between items-center gap-12 pt-20 border-t border-white/5">
            <div className="flex gap-12 md:gap-24">
              <div className="space-y-2 text-center md:text-left">
                <p className="text-5xl md:text-7xl font-black text-white italic leading-none tracking-tighter">4.9/5</p>
                <div className="flex flex-col">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Google Rating</p>
                  <p className="text-[9px] font-medium text-gray-600 uppercase tracking-widest mt-1">Certified Excellence</p>
                </div>
              </div>
              <div className="space-y-2 text-center md:text-left">
                <p className="text-5xl md:text-7xl font-black text-white italic leading-none tracking-tighter">170+</p>
                <div className="flex flex-col">
                  <p className="text-[10px] font-black uppercase tracking-[0.5em] text-blue-500">Member Reviews</p>
                  <p className="text-[9px] font-medium text-gray-600 uppercase tracking-widest mt-1">Verified Community</p>
                </div>
              </div>
            </div>

            <a 
              href="https://www.google.com/maps/place/Arsenal+fitness/@11.286674,75.8032363,17z/data=!4m8!3m7!1s0x3ba65d9f2b8ac7cd:0xc391079d7a2c5f5b!8m2!3d11.286674!4d75.8032363!9m1!1b1!16s%2Fg%2F11t4w7knhn!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDMyNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center gap-8 bg-white/[0.02] border border-white/10 px-10 py-7 rounded-[2rem] hover:bg-blue-600 hover:border-blue-500 transition-all duration-700 shadow-2xl shadow-black"
            >
              <div className="space-y-1">
                <p className="text-white font-black uppercase tracking-[0.3em] text-[13px] group-hover:text-white transition-colors">View All Reviews</p>
                <p className="text-gray-600 font-bold uppercase tracking-[0.2em] text-[8px] group-hover:text-blue-200 transition-colors">Trustpilot & Google Maps Integrated</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center group-hover:bg-white/20 transition-all">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;

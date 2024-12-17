import React from 'react';
import { Users, Heart, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { number: "50,000+", label: "Meals Donated", icon: <Heart className="w-8 h-8" /> },
    { number: "10,000+", label: "People Helped", icon: <Users className="w-8 h-8" /> },
    { number: "95%", label: "Food Saved", icon: <TrendingUp className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen">
      {/* Mission Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Our Mission</h1>
          <p className="text-xl max-w-3xl mx-auto text-center">
            Our mission at FoodShare is to connect food donors with local shelters and food banks, 
            combat food waste, and hunger by streamlining the donation process. We aim to reduce 
            food waste, support hunger relief efforts, and promote sustainability within local communities.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Vision</h2>
          <p className="text-lg max-w-3xl mx-auto text-center text-gray-700">
            At FoodShare, we envision a world where surplus food is redirected to those in need, 
            hunger is alleviated by supporting local shelters and food banks, and the donation 
            process is efficient and transparent. We strive to foster community engagement and 
            promote a culture of sustainability and social responsibility.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="flex justify-center mb-4 text-green-600">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-green-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 mb-6">
              FoodShare was founded with the purpose of reducing food waste and supporting 
              hunger relief. Since inception, we have been committed to fostering sustainability 
              and building stronger community connections.
            </p>
            <p className="text-lg text-gray-700">
              Through our platform, we've created a seamless connection between food donors 
              and recipients, making it easier than ever to share surplus food with those who 
              need it most. Our journey continues as we work towards a future where no food 
              goes to waste and no one goes hungry.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
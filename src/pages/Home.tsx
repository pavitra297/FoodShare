import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Utensils, Users, Clock } from 'lucide-react';
import DonationForm from '../components/DonationForm';

const Home = () => {
  const features = [
    {
      icon: <Heart className="w-8 h-8 text-green-600" />,
      title: "Easy Donation Process",
      description: "Simple steps to donate surplus food to those in need"
    },
    {
      icon: <Utensils className="w-8 h-8 text-green-600" />,
      title: "Real-time Food Listings",
      description: "Browse available food donations in your area"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Community Connection",
      description: "Direct connection between donors and recipients"
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Quick Response",
      description: "Efficient delivery system to prevent food waste"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-green-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Share Food, Share Hope
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            FoodShare connects food donors with those in need, reducing waste and fighting hunger in our communities.
          </p>
          <Link
            to="/donate"
            className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-100 transition-colors"
          >
            Start Donating
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Donate Now</h2>
          <DonationForm />
        </div>
      </section>

      {/* Available Food Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Available Food</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Sample food items - In a real app, these would come from an API */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src="https://i.ibb.co/Fq5Xs4S/food-donation.jpg"
                  alt="Food Donation"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Fresh Meals</h3>
                  <p className="text-gray-600 mb-4">Available in Mumbai, Maharashtra</p>
                  <Link
                    to="/find-food"
                    className="text-green-600 font-semibold hover:text-green-700"
                  >
                    Request Food →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
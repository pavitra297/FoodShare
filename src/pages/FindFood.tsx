import React, { useState } from 'react';
import { MapPin, Phone, User } from 'lucide-react';
import { useDonations } from '../context/DonationContext';
import DeliveryTracking from '../components/DeliveryTracking';

const FindFood = () => {
  const { donations } = useDonations();
  const [selectedFood, setSelectedFood] = useState(null);
  const [showDeliveryOptions, setShowDeliveryOptions] = useState(false);
  const [showTracking, setShowTracking] = useState(false);

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
    setShowDeliveryOptions(true);
  };

  const handleConfirmDelivery = () => {
    setShowDeliveryOptions(false);
    setShowTracking(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Available Food Donations</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {donations.map((food) => (
            <div key={food.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{food.foodType}</h3>
                <div className="space-y-2">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>{food.address}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <User className="w-5 h-5 mr-2" />
                    <span>{food.donorName}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="w-5 h-5 mr-2" />
                    <span>{food.mobile}</span>
                  </div>
                  <div className="text-gray-600">
                    <span className="font-semibold">Quantity:</span> {food.quantity}kg
                  </div>
                </div>
                <button
                  onClick={() => handleFoodSelect(food)}
                  className="mt-6 w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                >
                  Request Food
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Delivery Options Modal */}
        {showDeliveryOptions && selectedFood && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Delivery Options</h2>
              <div className="space-y-4">
                <div className="border rounded p-4 cursor-pointer hover:border-green-500">
                  <h3 className="font-semibold">Rahul Kumar</h3>
                  <p>Available now • 4.5 ★</p>
                  <p className="text-sm text-gray-500">3 years experience</p>
                </div>
                <div className="border rounded p-4 cursor-pointer hover:border-green-500">
                  <h3 className="font-semibold">Priya Singh</h3>
                  <p>Available now • 4.8 ★</p>
                  <p className="text-sm text-gray-500">5 years experience</p>
                </div>
              </div>
              <div className="mt-6 flex justify-end space-x-4">
                <button
                  onClick={() => setShowDeliveryOptions(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmDelivery}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Confirm Delivery
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Delivery Tracking */}
        {showTracking && selectedFood && (
          <DeliveryTracking
            donation={selectedFood}
            onClose={() => setShowTracking(false)}
          />
        )}
      </div>
    </div>
  );
};

export default FindFood;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDonations } from '../context/DonationContext';

const DonationForm = () => {
  const navigate = useNavigate();
  const { addDonation } = useDonations();
  const [formData, setFormData] = useState({
    foodType: '',
    quantity: '',
    donorName: '',
    mobile: '',
    address: '',
    pincode: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addDonation(formData);
    setFormData({
      foodType: '',
      quantity: '',
      donorName: '',
      mobile: '',
      address: '',
      pincode: ''
    });
    navigate('/find-food');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Food Type</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.foodType}
          onChange={(e) => setFormData({...formData, foodType: e.target.value})}
          required
        >
          <option value="">Select Type</option>
          <option value="fast-food">Fast Food</option>
          <option value="meals">Meals</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Quantity (kg)</label>
        <select
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.quantity}
          onChange={(e) => setFormData({...formData, quantity: e.target.value})}
          required
        >
          <option value="">Select Quantity</option>
          {[1,2,3,4,5,10,15,20].map(num => (
            <option key={num} value={num}>{num} kg</option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Donor Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.donorName}
          onChange={(e) => setFormData({...formData, donorName: e.target.value})}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
        <input
          type="tel"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.mobile}
          onChange={(e) => setFormData({...formData, mobile: e.target.value})}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Address</label>
        <textarea
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.address}
          onChange={(e) => setFormData({...formData, address: e.target.value})}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Pincode</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
          value={formData.pincode}
          onChange={(e) => setFormData({...formData, pincode: e.target.value})}
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
      >
        Submit Donation
      </button>
    </form>
  );
};

export default DonationForm;
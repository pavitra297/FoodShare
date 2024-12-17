import React, { useState, useEffect } from 'react';
import { Package, Clock, MapPin } from 'lucide-react';
import DeliveryMap from './DeliveryMap';

interface DeliveryTrackingProps {
  donation: any;
  onClose: () => void;
}

const DeliveryTracking: React.FC<DeliveryTrackingProps> = ({ donation, onClose }) => {
  const [status, setStatus] = useState('Picking up');
  const [estimatedTime, setEstimatedTime] = useState(25);
  
  // Simulate delivery progress
  useEffect(() => {
    const timer = setInterval(() => {
      setEstimatedTime((prev) => {
        if (prev <= 0) return 0;
        return prev - 1;
      });
      
      if (estimatedTime < 15) {
        setStatus('On the way');
      }
      if (estimatedTime < 5) {
        setStatus('Arriving soon');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [estimatedTime]);

  // Simulated locations (Mumbai coordinates)
  const pickup: [number, number] = [19.0760, 72.8777];
  const delivery: [number, number] = [19.0330, 72.8597];
  const driverLocation: [number, number] = [19.0550, 72.8687];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Delivery Tracking</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-6">
              <div className="flex items-center mb-4">
                <Package className="w-6 h-6 text-green-600 mr-2" />
                <span className="font-semibold">Status: {status}</span>
              </div>
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-green-600 mr-2" />
                <span>Estimated arrival in {estimatedTime} minutes</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-6 h-6 text-green-600 mr-2" />
                <span>Delivery to: {donation.address}</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h3 className="font-semibold mb-2">Delivery Details</h3>
              <p className="text-gray-600">Driver: John Doe</p>
              <p className="text-gray-600">Vehicle: KA 01 AB 1234</p>
              <p className="text-gray-600">Contact: +91 98765 43210</p>
            </div>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden">
            <DeliveryMap
              pickup={pickup}
              delivery={delivery}
              driverLocation={driverLocation}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryTracking;
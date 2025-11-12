import { useState, useEffect } from 'react';
import { mockApi } from '../../../lib/mockApi';

const ShippingForm = () => {
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [shippingCost, setShippingCost] = useState(null);
  const [weight, setWeight] = useState(1000); // Example weight in grams
  const [courier, setCourier] = useState('jne'); // Example courier

  useEffect(() => {
    // Fetch provinces on component mount
    const fetchProvinces = async () => {
      try {
        const response = await mockApi.getProvinces();
        if (response.data && response.data.rajaongkir && response.data.rajaongkir.results) {
          setProvinces(response.data.rajaongkir.results);
        }
      } catch (error) {
        console.error('Error fetching provinces:', error);
      }
    };
    fetchProvinces();
  }, []);

  useEffect(() => {
    // Fetch cities when a province is selected
    const fetchCities = async () => {
      if (selectedProvince) {
        try {
          const response = await mockApi.getCities(selectedProvince);
          if (response.data && response.data.rajaongkir && response.data.rajaongkir.results) {
            setCities(response.data.rajaongkir.results);
          }
        } catch (error) {
          console.error('Error fetching cities:', error);
        }
      } else {
        setCities([]);
      }
    };
    fetchCities();
  }, [selectedProvince]);

  const handleCalculateCost = async () => {
    if (!selectedCity || !weight || !courier) {
      alert('Please select origin city, weight, and courier.');
      return;
    }

    try {
      const response = await mockApi.getCost(selectedCity, selectedCity, weight, courier);

      if (response.data && response.data.rajaongkir && response.data.rajaongkir.results) {
        setShippingCost(response.data.rajaongkir.results);
      }
    } catch (error) {
      console.error('Error calculating shipping cost:', error);
    }
  };

  return (
    <div>
      <h2>Shipping Information</h2>
      <div>
        <label>Province:</label>
        <select onChange={(e) => setSelectedProvince(e.target.value)} value={selectedProvince}>
          <option value="">Select Province</option>
          {provinces.map((province) => (
            <option key={province.province_id} value={province.province_id}>
              {province.province}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>City:</label>
        <select onChange={(e) => setSelectedCity(e.target.value)} value={selectedCity}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city.city_id} value={city.city_id}>
              {city.type} {city.city_name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Weight (grams):</label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <div>
        <label>Courier:</label>
        <input type="text" value={courier} onChange={(e) => setCourier(e.target.value)} placeholder="e.g., jne, pos, tiki" />
      </div>
      <button onClick={handleCalculateCost}>Calculate Shipping Cost</button>

      {shippingCost && (
        <div>
          <h3>Shipping Cost Results:</h3>
          {shippingCost.map((result, index) => (
            <div key={index}>
              <h4>{result.code.toUpperCase()}</h4>
              {result.costs.map((cost, costIndex) => (
                <div key={costIndex}>
                  <p>Service: {cost.service}</p>
                  <p>Description: {cost.description}</p>
                  <p>Cost: {cost.cost[0].value}</p>
                  <p>Estimated Day: {cost.cost[0].etd} days</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ShippingForm;

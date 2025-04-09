import React, { useState } from "react";
import { Controller } from "react-hook-form";
import icons from "../../lib/icons";

const PriceSeat = ({ control, name }) => {
  // Toggle to switch between individual seat pricing and total car price
  const [useTotal, setUseTotal] = useState(false);
  
  // Define the seats (driver seat not for sale)
  const seats = [
    { id: 'front', label: 'Front Seat' },
    { id: 'backLeft', label: 'Back Left Seat' },
    { id: 'backMiddle', label: 'Back Middle Seat' },
    { id: 'backRight', label: 'Back Right Seat' },
  ];

  return (
    <Controller
      control={control}
      name={name}
      // Initialize with an object that holds individual seat prices and a total price field
      defaultValue={{
        individual: seats.reduce((acc, seat) => ({ ...acc, [seat.id]: "" }), {}),
        total: ""
      }}
      render={({ field: { value, onChange } }) => {
        // Update one seat's price inside the individual pricing object
        const updateIndividual = (seatId, seatPrice) => {
          onChange({
            ...value,
            individual: { ...value.individual, [seatId]: seatPrice }
          });
        };

        // Update the total price field
        const updateTotal = (price) => {
          onChange({ ...value, total: price });
        };

        // Helper function to compute the final array of seat prices
        // If using total pricing, each seat is given an equal share.
        // Otherwise, each seat gets its entered value.
        const getPriceArray = () => {
          if (useTotal) {
            const totalNum = parseFloat(value.total);
            if (!isNaN(totalNum)) {
              const pricePerSeat = totalNum / seats.length;
              return seats.map((seat) => ({
                seat: seat.label,
                price: pricePerSeat
              }));
            }
            return [];
          } else {
            return seats.map((seat) => {
              const price = parseFloat(value.individual[seat.id]);
              return { seat: seat.label, price: !isNaN(price) ? price : 0 };
            });
          }
        };

        return (
          <div className="space-y-4">
            {/* Display driver seat icon and note that it's not for sale */}
            <div className="flex items-center gap-4">
              <img src={icons.driver} alt="Driver" className="w-8 h-8" />
              <span>Driver seat is not for sale</span>
            </div>

            {/* Toggle to choose total price vs. individual seats */}
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  checked={useTotal}
                  onChange={() => setUseTotal(!useTotal)}
                />
                <span className="ml-2">Use total car price</span>
              </label>
            </div>

            {/* Render either the total price input or individual seat price inputs */}
            {useTotal ? (
              <div className="flex flex-col gap-2 bg-red-500 p-2 rounded">
                <label className="text-white">Total Car Price</label>
                <input
                  type="text"
                  className="bg-white px-2 py-1 rounded-md"
                  value={value.total}
                  onChange={(e) => updateTotal(e.target.value)}
                />
              </div>
            ) : (
              <div className="flex flex-col gap-2">
                {seats.map((seat) => (
                  <div key={seat.id} className="flex gap-4 items-center bg-red-500 p-2 rounded">
                    <label className="text-white">{seat.label} Price</label>
                    <input
                      type="text"
                      className="bg-white px-2 py-1 rounded-md"
                      value={value.individual[seat.id]}
                      onChange={(e) => updateIndividual(seat.id, e.target.value)}
                    />
                  </div>
                ))}
              </div>
            )}

            {/* Optional: display the computed final price array for debugging/confirmation */}
            <div className="mt-4">
              <h3 className="font-bold">Computed Seat Prices Array:</h3>
              <pre>{JSON.stringify(getPriceArray(), null, 2)}</pre>
            </div>
          </div>
        );
      }}
    />
  );
};

export default PriceSeat;

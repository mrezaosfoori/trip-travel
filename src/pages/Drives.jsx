import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import icons from "../lib/icons";
import images from "../lib/images";

// --- Fake Data Generator ---

// Sample arrays to randomize fake data
const sampleCarTypes = ["Sedan", "SUV", "Hatchback"];
const sampleCarNames = ["Toyota", "Honda", "Ford", "Chevrolet", "BMW"];
const sampleCarModels = ["Camry", "Civic", "Focus", "Malibu", "3 Series"];
const sampleDriverNames = [
  "John Doe",
  "Jane Smith",
  "Bob Johnson",
  "Alice Brown",
  "Michael Davis",
];
const sampleLocations = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Houston",
  "Phoenix",
];
const sampleDestinations = [
  "Boston",
  "San Francisco",
  "Seattle",
  "Miami",
  "Denver",
];
const samplePassengerTypes = ["Adult", "Child", "Senior"];

// Helper to select a random array item
const getRandomItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Generates a fake driver object using random selections for each field
function generateFakeDriver(id) {
  const carType = getRandomItem(sampleCarTypes);
  const carName = getRandomItem(sampleCarNames);
  const carModel = getRandomItem(sampleCarModels);
  const driverName = getRandomItem(sampleDriverNames);
  const location = getRandomItem(sampleLocations);
  const destination = getRandomItem(sampleDestinations);

  // Generate 4 seats per driver with random occupancy
  const seats = Array.from({ length: 4 }, (_, index) => {
    const isEmpty = Math.random() < 0.5;
    return {
      seatNumber: index + 1,
      isEmpty,
      // Show passenger type and price only if the seat is booked
      passengerType: isEmpty ? null : getRandomItem(samplePassengerTypes),
      price: 20 + Math.floor(Math.random() * 10), // price between $20 and $29
    };
  });

  // Generate a pseudo-random start date and arrival time
  const startDate = new Date(2025, 4, Math.floor(Math.random() * 28) + 1)
    .toISOString()
    .split("T")[0]; // format YYYY-MM-DD
  const arrivalHour = 10 + Math.floor(Math.random() * 11);
  const arrivalTime = `${arrivalHour.toString().padStart(2, "0")}:00`;

  return {
    id,
    carType,
    carName,
    carModel,
    driverName,
    location,
    destination,
    seats,
    startDate,
    arrivalTime,
  };
}

// Create an array with 30 fake drivers
const fakeDrivers = Array.from({ length: 30 }, (_, i) =>
  generateFakeDriver(i + 1)
);

// --- Car Graphic Component ---
// Renders an SVG of a car with seats placed in a fixed layout.
// You can adjust the SVG paths and positions to match a more detailed car design.

const CarGraphic = ({ seats }) => {
  // Define fixed seat positions in the SVG for 4 seats.
  // Positions (x, y) can be adjusted to suit your preferred design.
  const seatPositions = {
    1: { x: 60, y: 50 }, // Front Left
    2: { x: 160, y: 50 }, // Front Right
    3: { x: 60, y: 110 }, // Rear Left
    4: { x: 160, y: 110 }, // Rear Right
  };

  return (
    <div className="w-fit flex flex-col gap-4 bg-slate-500 p-1 rounded-lg ">
      <div className="flex justify-between">
        <img src={icons.driver} alt="" className="w-8 h-8 " />
        <img src={icons.seat} alt="" className="w-8 h-8" />
      </div>
      <div className="flex">
        <img src={icons.seat} alt="" className="w-8 h-8" />
        <img src={icons.seat} alt="" className="w-6 h-8 min-h-8" />
        <img src={icons.seat} alt="" className="w-8 h-8" />
      </div>
      {/* {seats.map(seat => {
         const pos = seatPositions[seat.seatNumber];
         const seatColor = seat.isEmpty ? "#4CAF50" : "#F44336";
         return (
          <div className='bg-red-500 '>
                <img src={icons.seat} alt="" className='w-8 h-8' />
               
          </div>
         );
       })} */}
    </div>
  );
};

// --- Main React Component ---
const DriverList = () => {
  // Retrieve the search parameters from React Router state; these could be set when navigating.
  const locationHook = useLocation();
  const searchParams = locationHook.state || {
    carType: "Any",
    date: "N/A",
    from: "Unknown",
    to: "Unknown",
  };

  // Pagination state variables
  const [currentPage, setCurrentPage] = useState(1);
  const driversPerPage = 10;
  const totalPages = Math.ceil(fakeDrivers.length / driversPerPage);
  const indexOfLastDriver = currentPage * driversPerPage;
  const indexOfFirstDriver = indexOfLastDriver - driversPerPage;
  const currentDrivers = fakeDrivers.slice(
    indexOfFirstDriver,
    indexOfLastDriver
  );

  return (
    <div style={styles.container} dir="ltr">
      {/* Header showing the search parameters */}
      <header style={styles.header}>
        <h2 className="text-white">Search Results</h2>
        <div style={styles.searchParams}>
          <div>
            <strong>Car Type:</strong> {searchParams.carType}
          </div>
          <div>
            <strong>Date:</strong> {searchParams.date}
          </div>
          <div>
            <strong>From:</strong> {searchParams.from}
          </div>
          <div>
            <strong>To:</strong> {searchParams.to}
          </div>
        </div>
      </header>

      {/* List of driver cards */}
      {currentDrivers.map((driver) => (
        <div key={driver.id} className="bg-slate-400 my-2 p-4 rounded-md flex gap-8 ">
          <div className="flex-1">
            <h3>{driver.driverName}'s Ride</h3>
            <p>
              <strong>Car Type:</strong> {driver.carType} |{" "}
              <strong>Car Name:</strong> {driver.carName} |{" "}
              <strong>Car Model:</strong> {driver.carModel}
            </p>
            <p>
              <strong>From:</strong> {driver.location} | <strong>To:</strong>{" "}
              {driver.destination}
            </p>
            <p>
              <strong>Start Date:</strong> {driver.startDate} |{" "}
              <strong>Arrival Time:</strong> {driver.arrivalTime}
            </p>

            <div style={styles.seatsContainer}>
              <p>
                <strong>Car Layout:</strong>
              </p>
              <CarGraphic seats={driver.seats} />
            </div>
          </div>
          <div className="flex-1">
            <img src={images.carLogo} alt="" className="w-full h-full" />
          </div>
        </div>
      ))}

      {/* Pagination Controls */}
      <div style={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          style={styles.pageButton}
        >
          Prev
        </button>
        {[...Array(totalPages).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() => setCurrentPage(num + 1)}
            style={{
              ...styles.pageButton,
              fontWeight: currentPage === num + 1 ? "bold" : "normal",
            }}
          >
            {num + 1}
          </button>
        ))}
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          style={styles.pageButton}
        >
          Next
        </button>
      </div>
    </div>
  );
};

// --- Inline Styles ---
const styles = {
  container: {
    width: "80%",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
  },
  searchParams: {
    display: "flex",
    justifyContent: "space-around",
    margin: "10px 0",
    padding: "10px",
    backgroundColor: "#f2f2f2",
    borderRadius: "8px",
  },
  card: {
    border: "1px solid #ddd",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  seatsContainer: {
    marginTop: "10px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
    gap: "10px",
  },
  pageButton: {
    padding: "5px 10px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    cursor: "pointer",
  },
};

export default DriverList;

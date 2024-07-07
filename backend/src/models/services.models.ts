export interface Service {
  id: number;
  name: string;
  description: string;
  destination: string;
  date: string;
  cost: number;
}

const services: Service[] = [
  {
    id: 1,
    name: "One Night Stay",
    description: "A cozy one-night stay at a 4-star hotel.",
    destination: "Paris, France",
    date: "2024-07-15",
    cost: 200,
  },
  {
    id: 2,
    name: "Car Rental",
    description: "Car rental for a day, includes insurance and unlimited mileage.",
    destination: "Los Angeles, USA",
    date: "2024-07-20",
    cost: 70,
  },
  {
    id: 3,
    name: "Two Nights Stay",
    description: "A luxurious two-night stay at a 5-star resort.",
    destination: "Maldives",
    date: "2024-08-01",
    cost: 800,
  },
  {
    id: 4,
    name: "Tourist Assistance Service",
    description: "24/7 tourist assistance service in your preferred language.",
    destination: "Rome, Italy",
    date: "2024-07-25",
    cost: 150,
  },
  {
    id: 5,
    name: "Car Rental for Two",
    description: "Car rental for two people, includes insurance and GPS.",
    destination: "Tokyo, Japan",
    date: "2024-07-30",
    cost: 90,
  }
];


export const getServices = (): Array<Service> => {
  return services;
};

export const getServiceById = (id: number): Service | undefined => {
  return services.find(Service => Service.id === id);
};

export const createService = (service: Service): void => {
  services.push(service);
};

export const updateService = (service: Service): void => {
  const index = services.findIndex(u => u.id === service.id);
  services[index] = service;
};

export const deleteService = (id: number): void => {
  const index = services.findIndex(u => u.id === id);
  services.splice(index, 1);
};
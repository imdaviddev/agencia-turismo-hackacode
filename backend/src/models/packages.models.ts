import { Service } from './services.models'

export interface Package {
    id: number;
    cost: number;
    services: Array<Service>;
}

const packages: Array<Package> = [
    {
        id: 1,
        cost: 270,
        services: [
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
            }
        ]
    },
    {
        id: 2,
        cost: 890,
        services: [
            {
                id: 3,
                name: "Two Nights Stay",
                description: "A luxurious two-night stay at a 5-star resort.",
                destination: "Maldives",
                date: "2024-08-01",
                cost: 800,
            },
            {
                id: 5,
                name: "Car Rental for Two",
                description: "Car rental for two people, includes insurance and GPS.",
                destination: "Tokyo, Japan",
                date: "2024-07-30",
                cost: 90,
            }
        ]
    },
    {
        id: 3,
        cost: 220,
        services: [
            {
                id: 2,
                name: "Car Rental",
                description: "Car rental for a day, includes insurance and unlimited mileage.",
                destination: "Los Angeles, USA",
                date: "2024-07-20",
                cost: 70,
            },
            {
                id: 4,
                name: "Tourist Assistance Service",
                description: "24/7 tourist assistance service in your preferred language.",
                destination: "Rome, Italy",
                date: "2024-07-25",
                cost: 150,
            }
        ]
    },
    {
        id: 4,
        cost: 1150,
        services: [
            {
                id: 1,
                name: "One Night Stay",
                description: "A cozy one-night stay at a 4-star hotel.",
                destination: "Paris, France",
                date: "2024-07-15",
                cost: 200,
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
            }
        ]
    },
    {
        id: 5,
        cost: 240,
        services: [
            {
                id: 5,
                name: "Car Rental for Two",
                description: "Car rental for two people, includes insurance and GPS.",
                destination: "Tokyo, Japan",
                date: "2024-07-30",
                cost: 90,
            },
            {
                id: 4,
                name: "Tourist Assistance Service",
                description: "24/7 tourist assistance service in your preferred language.",
                destination: "Rome, Italy",
                date: "2024-07-25",
                cost: 150,
            }
        ]
    }
];


export const getPackages = (): Array<Package> => {
    return packages;
};

export const getPackageById = (id: number): Package | undefined => {
    return packages.find(package_ => package_.id === id);
};

export const createPackage = (package_: Package): void => {
    packages.push(package_);
};

export const updatePackage = (package_: Package): void => {
    const index = packages.findIndex(u => u.id === package_.id);
    packages[index] = package_;
};

export const deletePackage = (id: number): void => {
    const index = packages.findIndex(u => u.id === id);
    packages.splice(index, 1);
};
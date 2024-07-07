export interface Sale {
    id: number;
    date: string;
    medio_pago: string;
    id_Sale: number;
    id_employee: number;
    id_service: number | undefined;
    id_package: number | undefined;
  }

  const sales: Array<Sale> = [
    {
      id: 1,
      date: "2024-07-01",
      medio_pago: "Credit Card",
      id_Sale: 1,
      id_employee: 1,
      id_service: 1,
      id_package: undefined
    },
    {
      id: 2,
      date: "2024-07-02",
      medio_pago: "Debit Card",
      id_Sale: 2,
      id_employee: 2,
      id_service: undefined,
      id_package: 1
    },
    {
      id: 3,
      date: "2024-07-03",
      medio_pago: "PayPal",
      id_Sale: 3,
      id_employee: 3,
      id_service: 2,
      id_package: undefined
    },
    {
      id: 4,
      date: "2024-07-04",
      medio_pago: "Credit Card",
      id_Sale: 4,
      id_employee: 1,
      id_service: undefined,
      id_package: 2
    },
    {
      id: 5,
      date: "2024-07-05",
      medio_pago: "Credit Card",
      id_Sale: 5,
      id_employee: 2,
      id_service: 3,
      id_package: undefined
    },
    {
      id: 6,
      date: "2024-07-06",
      medio_pago: "Debit Card",
      id_Sale: 6,
      id_employee: 3,
      id_service: undefined,
      id_package: 3
    },
    {
      id: 7,
      date: "2024-07-07",
      medio_pago: "PayPal",
      id_Sale: 7,
      id_employee: 1,
      id_service: 4,
      id_package: undefined
    },
    {
      id: 8,
      date: "2024-07-08",
      medio_pago: "Credit Card",
      id_Sale: 8,
      id_employee: 2,
      id_service: undefined,
      id_package: 4
    },
    {
      id: 9,
      date: "2024-07-09",
      medio_pago: "Debit Card",
      id_Sale: 9,
      id_employee: 3,
      id_service: 5,
      id_package: undefined
    },
    {
      id: 10,
      date: "2024-07-10",
      medio_pago: "PayPal",
      id_Sale: 10,
      id_employee: 1,
      id_service: undefined,
      id_package: 5
    }
  ];
  

  export const getSales = (): Array<Sale> => {
    return sales;
  };
  
  export const getSaleById = (id: number): Sale | undefined => {
    return sales.find(sale => sale.id === id);
  };
  
  export const createSale = (sale: Sale): void => {
    sales.push(sale);
  };
  
  export const updateSale = (sale: Sale): void => {
    const index = sales.findIndex(u => u.id === sale.id);
    sales[index] = sale;
  };
  
  export const deleteSale = (id: number): void => {
    const index = sales.findIndex(u => u.id === id);
    sales.splice(index, 1);
  };
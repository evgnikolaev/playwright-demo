export const oneOrder = {
  orders: [
    {
      id: "order-1",
      ownerType: "user",
      ownerId: "user-1",
      userId: "user-1",
      guestSessionId: null,
      items: [
        {
          id: "cat-1",
          name: "Маргарита",
          basePrice: 3500,
          price: 3500,
          options: {
            furType: "Средняя",
            activityLevel: "Игровой",
            extras: [],
          },
          quantity: 1,
        },
      ],
      totalPrice: 3500,
      customer: {
        city: "1",
        street: "1",
        house: "1",
        apartment: "1",
        comment: "1",
        payment: "card",
      },
      createdAt: "2026-05-07T14:29:30.248Z",
    },
  ],
};

export const emptyOrders = {
  orders: [],
};

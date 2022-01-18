const mockResponse = {
  data: {
    results: [
      {
        name: {
          first: "Hannah",
          last: "GK",
        },
        picture: {
          large: "https://randomuser.me/api/portraits/med/women/70.jpg",
        },
        login: {
          username: "love",
        },
      },
    ],
  },
};

export default {
  get: jest.fn().mockResolvedValue(mockResponse),
};

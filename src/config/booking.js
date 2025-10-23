// Booking Configuration
// Centralized configuration for booking links and related settings

export const BOOKING_CONFIG = {
  // Main booking page URL
  bookingUrl:
    "https://clienthub.getjobber.com/booking/ee24c0b9-3b81-4134-a69f-4d9434bbad04",

  // Booking button text
  bookingButtonText: "Book Now",

  // Alternative booking text variations
  bookingTextVariations: {
    primary: "Book Now",
    secondary: "Schedule Service",
    cta: "Get Started",
    link: "Book Now",
  },
};

// Export individual values for convenience
export const { bookingUrl, bookingButtonText } = BOOKING_CONFIG;

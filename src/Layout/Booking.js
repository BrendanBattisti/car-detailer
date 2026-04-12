import React, { useState } from "react";
import {
  services,
  addons,
  servicePrices,
  addonPrices,
  initialBookingData,
  RV_SQFT_RATE,
  RV_SERVICE_NAME,
} from "../data/bookingData";
import BookingDesktop from "./BookingDesktop";
import BookingMobile from "./BookingMobile";
import emailjs from "@emailjs/browser";
import { EMAILJS_CONFIG } from "../config/emailjs";

const Booking = () => {
  const [bookingData, setBookingData] = useState(initialBookingData);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (field, value) => {
    setBookingData((prev) => {
      if (field === "vehicleType") {
        return {
          ...prev,
          vehicleType: value,
          // RV has a standalone service model and does not use package selection.
          service: value === "rv" ? "" : prev.service,
        };
      }

      return {
        ...prev,
        [field]: value,
      };
    });
  };

  const toggleAddon = (addonName) => {
    setSelectedAddons((prev) =>
      prev.includes(addonName)
        ? prev.filter((name) => name !== addonName)
        : [...prev, addonName]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Prepare email template parameters
      const servicePrice = calculateServicePrice();
      const isRv = bookingData.vehicleType === "rv";
      const squareFootage = Number(bookingData.squareFootage) || 0;
      const effectiveServiceName = isRv ? RV_SERVICE_NAME : bookingData.service;
      const serviceWithPrice = effectiveServiceName
        ? isRv
          ? `${effectiveServiceName} - ${squareFootage} sq ft @ $${RV_SQFT_RATE}/sq ft = $${servicePrice}`
          : `${effectiveServiceName} - $${servicePrice}`
        : "No service selected";

      const addonsWithPrices =
        selectedAddons.length > 0
          ? selectedAddons
              .map((addon) => `${addon} - $${addonPrices[addon] || 0}`)
              .join(", ")
          : "None selected";

      const templateParams = {
        to_name: "Carmichael's Elite Mobile Detailing",
        from_name: `${bookingData.firstName} ${bookingData.lastName}`,
        from_email: bookingData.email,
        from_phone: bookingData.phone,
        vehicle_type: bookingData.vehicleType,
        service_requested: serviceWithPrice,
        message: bookingData.message || "No additional message provided",
        source: "Booking Form",
        timestamp: new Date().toLocaleString(),
        selected_addons: addonsWithPrices,
        estimated_total: `$${totalPrice}`,
        square_footage: isRv ? squareFootage : "N/A",
        rv_rate: isRv ? `$${RV_SQFT_RATE}/sq ft` : "N/A",
      };

      console.log(templateParams);
      // Send email using EmailJS
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.bookingTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      setSubmitStatus("success");

      // Reset form after successful submission
      setBookingData(initialBookingData);
      setSelectedAddons([]);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calculate total price
  const calculateServicePrice = () => {
    if (bookingData.vehicleType === "rv") {
      const squareFootage = Number(bookingData.squareFootage) || 0;
      return squareFootage * RV_SQFT_RATE;
    }

    if (!bookingData.service) return 0;

    return servicePrices[bookingData.vehicleType]?.[bookingData.service] || 0;
  };

  const calculateTotalPrice = () => {
    let total = 0;

    // Add service price based on vehicle type
    total += calculateServicePrice();

    // Add addon prices
    selectedAddons.forEach((addonName) => {
      if (addonPrices[addonName]) {
        total += addonPrices[addonName];
      }
    });

    return total;
  };

  const serviceBasePrice = calculateServicePrice();
  const totalPrice = calculateTotalPrice();

  // Determine which view to render based on screen size or other criteria
  const [isMobile, setIsMobile] = useState(false);

  // You can add logic here to detect mobile vs desktop
  // For now, we'll default to desktop view
  React.useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  const commonProps = {
    bookingData,
    selectedAddons,
    handleInputChange,
    toggleAddon,
    handleSubmit,
    totalPrice,
    services,
    addons,
    servicePrices,
    addonPrices,
    serviceBasePrice,
    rvRate: RV_SQFT_RATE,
    rvServiceName: RV_SERVICE_NAME,
    isSubmitting,
    submitStatus,
  };

  return isMobile ? (
    <BookingMobile {...commonProps} />
  ) : (
    <BookingDesktop {...commonProps} />
  );
};

export default Booking;

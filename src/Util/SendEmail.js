import emailjs from "@emailjs/browser";

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  templateId: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  publicKey: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
};

/**
 * Send an email using EmailJS
 * @param {Object} formData - The form data to send
 * @param {string} formData.name - Customer's name
 * @param {string} formData.email - Customer's email
 * @param {string} formData.phone - Customer's phone number
 * @param {string} formData.vehicleType - Type of vehicle (sedan, suv, truck)
 * @param {string} formData.service - Selected service
 * @param {string} formData.message - Customer's message
 * @param {Array} formData.selectedServices - Array of selected services (optional)
 * @param {Array} formData.selectedAddons - Array of selected add-ons (optional)
 * @param {string} formData.source - Where the email was sent from (e.g., 'contact', 'products', 'quote')
 * @returns {Promise} - Promise that resolves when email is sent successfully
 */
export const sendEmail = async (formData) => {
  try {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      throw new Error("Name, email, and message are required");
    }

    // Prepare email template parameters
    const templateParams = {
      to_name: "Carmichael Elite Mobile Detailing",
      from_name: formData.name,
      from_email: formData.email,
      from_phone: formData.phone || "Not provided",
      vehicle_type: formData.vehicleType || "Not specified",
      service_requested: formData.service || "Not specified",
      message: formData.message,
      source: formData.source || "Website Contact",
      timestamp: new Date().toLocaleString(),
    };

    // Add selected services and add-ons if provided
    if (formData.selectedServices && formData.selectedServices.length > 0) {
      templateParams.selected_services = formData.selectedServices.join(", ");
    }

    if (formData.selectedAddons && formData.selectedAddons.length > 0) {
      templateParams.selected_addons = formData.selectedAddons.join(", ");
    }

    // Send email using EmailJS
    const response = await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );

    return {
      success: true,
      message: "Email sent successfully!",
      response: response,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: error.message || "Failed to send email. Please try again.",
      error: error,
    };
  }
};

/**
 * Send a quick quote request email
 * @param {Object} quoteData - Quote request data
 * @param {string} quoteData.name - Customer's name
 * @param {string} quoteData.email - Customer's email
 * @param {string} quoteData.phone - Customer's phone number
 * @param {Array} quoteData.services - Selected services
 * @param {Array} quoteData.addons - Selected add-ons
 * @param {string} quoteData.vehicleType - Type of vehicle
 * @returns {Promise} - Promise that resolves when email is sent successfully
 */
export const sendQuoteRequest = async (quoteData) => {
  const formData = {
    ...quoteData,
    message: `Quote request for ${
      quoteData.vehicleType
    }:\n\nServices: ${quoteData.services.join(
      ", "
    )}\nAdd-ons: ${quoteData.addons.join(
      ", "
    )}\n\nPlease provide a quote for these services.`,
    source: "Quote Request",
  };

  return sendEmail(formData);
};

/**
 * Send a service inquiry email
 * @param {Object} inquiryData - Service inquiry data
 * @param {string} inquiryData.name - Customer's name
 * @param {string} inquiryData.email - Customer's email
 * @param {string} inquiryData.phone - Customer's phone number
 * @param {string} inquiryData.service - Service of interest
 * @param {string} inquiryData.message - Additional details
 * @returns {Promise} - Promise that resolves when email is sent successfully
 */
export const sendServiceInquiry = async (inquiryData) => {
  const formData = {
    ...inquiryData,
    source: "Service Inquiry",
  };

  return sendEmail(formData);
};

/**
 * Send a general contact email
 * @param {Object} contactData - Contact form data
 * @param {string} contactData.name - Customer's name
 * @param {string} contactData.email - Customer's email
 * @param {string} contactData.phone - Customer's phone number
 * @param {string} contactData.message - Customer's message
 * @returns {Promise} - Promise that resolves when email is sent successfully
 */
export const sendContactEmail = async (contactData) => {
  const formData = {
    ...contactData,
    source: "Contact Form",
  };

  return sendEmail(formData);
};

/**
 * Initialize EmailJS (call this in your app initialization)
 * @param {string} publicKey - Your EmailJS public key
 */
export const initializeEmailJS = (publicKey) => {
  emailjs.init(publicKey);
};

export default {
  sendEmail,
  sendQuoteRequest,
  sendServiceInquiry,
  sendContactEmail,
  initializeEmailJS,
};

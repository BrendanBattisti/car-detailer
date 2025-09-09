// EmailJS Configuration
// Replace these values with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  serviceId: "service_1tuew8j", // Your EmailJS service ID
  templateId: "template_cnzetya", // Your EmailJS template ID
  bookingTemplateId: "template_xivw41a",
  publicKey: "PK58mdRLEoSl_n8gz", // Your EmailJS public key
};

// EmailJS Template Variables
// These are the variables that will be available in your EmailJS template
export const EMAILJS_TEMPLATE_VARS = {
  // Required variables
  to_name: "Carmichael Elite Mobile Detailing",
  from_name: "", // Customer's name
  from_email: "", // Customer's email
  from_phone: "", // Customer's phone number
  vehicle_type: "", // Type of vehicle
  service_requested: "", // Selected service
  message: "", // Customer's message

  // Optional variables
  source: "", // Where the email was sent from
  timestamp: "", // When the email was sent
  selected_services: "", // Selected services (comma-separated)
  selected_addons: "", // Selected add-ons (comma-separated)
};

// EmailJS Template Example
/*
Subject: New {{source}} from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}
Phone: {{from_phone}}
Vehicle Type: {{vehicle_type}}
Service Requested: {{service_requested}}

Selected Services: {{selected_services}}
Selected Add-ons: {{selected_addons}}

Message:
{{message}}

Source: {{source}}
Timestamp: {{timestamp}}
*/

const services = [
  {
    name: "Comprehensive Preventive Check-up",
    description:
      "Full physical examination, temperature measurement, coat and mucosa membrane analysis, vet consultation.",
    price: "$40",
  },
  {
    name: "Vaccination",
    description:
      "Rabies, distemper, leptospirosis vaccines, includes pre-vaccination check-up and international pet passport.",
    price: "$55",
  },
  {
    name: "Neutering",
    description:
      "Safe anesthesia surgery, post-op care, pre-op blood test included.",
    price: "$125",
  },
  {
    name: "Dental Check-up & Cleaning",
    description: "Tartar prevention, oral cavity examination, teeth polishing under sedation.",
    price: "$70",
  },
  {
    name: "Dermatology Consultation",
    description:
      "Diagnosis and treatment of skin conditions: allergies, fungal infections, eczema. Includes scrapings and microscopy.",
    price: "$50",
  },
  {
    name: "Emergency Visit",
    description:
      "Urgent vet visit for poisoning, injuries, sudden illnesses. 24/7 availability.",
    price: "$65 + meds",
  },
];

export default function Services() {
  return (
    <div className="page services">
      <h2>Our Services</h2>
      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.name}</h3>
            <p>{service.description}</p>
            <strong>{service.price}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

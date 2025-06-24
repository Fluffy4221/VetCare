export default function Clinics() {
  return (
    <div className="clinics-page">
      <h2>Our clinics</h2>
      <div className="info">
        <div className="info-box">
          📞 Call us: (+48) 123 456 890
        </div>
        <div className="info-box">
          🕑 Mon-Fri: 08:00-21:00, Sat: 10:00-18:00
        </div>
      </div>

      <div className="clinics-list">
        <div className="clinic-card">
          <h4>Stary Browar</h4>
          <p>Półwiejska 42, Poznań</p>
          <img src="\photo_2025-06-24_14-29-43.jpg" alt="Map" />
          <img src="\photo_2025-06-24_14-29-50.jpg" alt="Clinic interior" />
        </div>
        <div className="clinic-card">
          <h4>Poznania</h4>
          <p>Pleszewska 1, Poznań</p>
          <img src="\photo_2025-06-24_14-29-54.jpg" alt="Map" />
          <img src="\photo_2025-06-24_14-29-57.jpg" alt="Clinic interior" />
        </div>
        <div className="clinic-card">
          <h4>Avenida</h4>
          <p>Stanisława Matyi 2, Poznań</p>
          <img src="\photo_2025-06-24_14-30-01.jpg" alt="Map" />
          <img src="\photo_2025-06-24_14-30-04.jpg" alt="Clinic interior" />
        </div>
      </div>
    </div>
  );
}

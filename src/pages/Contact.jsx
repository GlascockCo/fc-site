export default function Contact() {
  return (
    <section className="stack">
      <h2>Contact</h2>
      <p><strong>Address:</strong> 370 West Main St., Gibson, GA</p>
      <p><strong>Phone:</strong> <a href="tel:+17065980722">(706) 598-0722</a></p>
      <p><strong>Email:</strong> <a href="mailto:kperry@glascock.k12.ga.us">kperry@glascock.k12.ga.us</a></p>
      <iframe
        title="Map"
        style={{ border: 0, width: '100%', height: 280 }}
        loading="lazy"
        allowFullScreen
        src="https://www.google.com/maps?q=370%20West%20Main%20St,%20Gibson,%20GA&output=embed"
      />
    </section>
  )
}

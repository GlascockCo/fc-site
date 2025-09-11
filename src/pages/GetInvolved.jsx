// src/pages/GetInvolved.jsx
export default function GetInvolved() {
  return (
    <section className="stack">
      <h2>Get Involved / Interest Form</h2>

      <form
        action="https://formspree.io/f/abcdwxyz" // ← replace with your endpoint
        method="POST"
        className="card stack form-grid"
      >
        <p>Tell us how you’d like to connect. We’ll reach out by your preferred method.</p>

        {/* Basic info */}
        <div className="grid-2col">
          <label className="stack">
            <span>First name</span>
            <input name="firstName" required />
          </label>
          <label className="stack">
            <span>Last name</span>
            <input name="lastName" required />
          </label>
        </div>

        <div className="grid-2col">
          <label className="stack">
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label className="stack">
            <span>Phone</span>
            <input type="tel" name="phone" />
          </label>
        </div>

        <label className="stack">
          <span>Preferred contact</span>
          <select name="preferredContact" defaultValue="Email">
            <option>Email</option>
            <option>Phone</option>
            <option>Text</option>
          </select>
        </label>

        {/* Help checkboxes */}
        {/* <fieldset className="card stack">
          <legend>How can we help?</legend>
          <div className="grid-2col">
            <label><input type="checkbox" name="help[]" value="Volunteer" /> Volunteer (AmeriCorps K–3)</label>
            <label><input type="checkbox" name="help[]" value="Donate (financial)" /> Donate (financial)</label>
            <label><input type="checkbox" name="help[]" value="Donate (in-kind)" /> Donate (in-kind: supplies/food)</label>
            <label><input type="checkbox" name="help[]" value="Partner" /> Become a partner</label>
            <label><input type="checkbox" name="help[]" value="Request assistance" /> Request assistance</label>
          </div>
        </fieldset> */}

        {/* Programs multi-select */}
        <label className="stack program-select">
          <span>Which program(s)? <small>(optional)</small></span>
          <div className="grid two-col">
            <select name="programs" multiple size={5}>
              <option>After-School & Summer</option>
              <option>AmeriCorps K–3</option>
              <option>Pantry & Essentials</option>
              <option>Energy Assistance (CSRA EOA)</option>
              <option>Clothes Closet / Food Pantry</option>
            </select>
            <small>
              Hold <kbd>Ctrl</kbd> (Windows) or <kbd>Cmd</kbd> (Mac) to select multiple
              programs. You can choose all that apply.
            </small>
          </div>
        </label>

        {/* Message */}
        <label className="stack">
          <span>Message</span>
          <textarea name="message" rows={4} placeholder="Share details, best times to reach you, etc." />
        </label>

        <button className="btn primary" type="submit">Send</button>
      </form>
    </section>
  );
}
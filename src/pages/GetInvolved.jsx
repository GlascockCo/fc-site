// import { org } from "../data/site"

// export default function GetInvolved(){
//   return (
//     <section className="stack">
//       <h2>Get Involved</h2>
//       <p>Donate, volunteer, or partner with us. Every bit helps locally.</p>
//       <div className="cta-row">
//         <a className="btn primary" href={org.donateUrl}>Donate</a>
//         <a className="btn" href="/contact">Volunteer</a>
//       </div>
//     </section>
//   )
// }

// import { useState } from "react";

// export default function GetInvolved(){
//   const [sent, setSent] = useState(false);
//   const [err, setErr]   = useState("");

//   // 👉 Replace with your Formspree endpoint after you create it
//   const FORMSPREE_ENDPOINT = "https://formspree.io/f/xxxxxxxx";

//   async function onSubmit(e){
//     e.preventDefault();
//     setErr("");
//     const form = e.currentTarget;
//     const data = new FormData(form);

//     try{
//       const res = await fetch(FORMSPREE_ENDPOINT, {
//         method: "POST",
//         headers: { "Accept": "application/json" },
//         body: data
//       });
//       if (!res.ok) throw new Error("Submit failed");
//       setSent(true);
//       form.reset();
//     }catch(e){
//       setErr("Sorry—something went wrong. Please call (706) 598-0722 or try again.");
//     }
//   }

//   if (sent){
//     return (
//       <section className="stack">
//         <h2>Thanks! We received your message.</h2>
//         <article className="card">
//           <p>We’ll follow up soon. If it’s urgent, call <strong>(706) 598-0722</strong>.</p>
//           <p><a className="btn small" href="/">← Back home</a></p>
//         </article>
//       </section>
//     );
//   }

//   return (
//     <section className="stack">
//       <h2>Get Involved / Interest Form</h2>
//       <article className="card">
//         <p>Tell us how you’d like to connect. We’ll reach out by your preferred method.</p>

//         <form className="stack" onSubmit={onSubmit}>
//           {/* Basic info */}
//           <div className="grid" style={{gridTemplateColumns:"1fr 1fr"}}>
//             <label className="stack">
//               <span>First name</span>
//               <input name="firstName" type="text" required />
//             </label>
//             <label className="stack">
//               <span>Last name</span>
//               <input name="lastName" type="text" required />
//             </label>
//           </div>

//           <div className="grid" style={{gridTemplateColumns:"1fr 1fr"}}>
//             <label className="stack">
//               <span>Email</span>
//               <input name="email" type="email" required />
//             </label>
//             <label className="stack">
//               <span>Phone</span>
//               <input name="phone" type="tel" />
//             </label>
//           </div>

//           <label className="stack">
//             <span>Preferred contact</span>
//             <select name="preferredContact" defaultValue="Email">
//               <option>Email</option>
//               <option>Phone</option>
//               <option>Text</option>
//             </select>
//           </label>

//           {/* What are you interested in? */}
//           <fieldset className="card" style={{padding:"12px"}}>
//             <legend>How can we help?</legend>
//             <label><input type="checkbox" name="interest" value="Volunteer - AmeriCorps K-3" /> Volunteer (AmeriCorps K–3)</label><br />
//             <label><input type="checkbox" name="interest" value="Donate - financial" /> Donate (financial)</label><br />
//             <label><input type="checkbox" name="interest" value="Donate - in-kind" /> Donate (in-kind: supplies/food) </label><br />
//             <label><input type="checkbox" name="interest" value="Become a partner" /> Become a partner (organization/church/business)</label><br />
//             <label><input type="checkbox" name="interest" value="Request assistance" /> Request assistance (programs / pantry / energy)</label>
//           </fieldset>

//           {/* Helpful selections for routing */}
//           <label className="stack">
//             <span>Which program(s)? (optional)</span>
//             <select name="program" multiple size={5}>
//               <option>After-School & Summer</option>
//               <option>AmeriCorps Volunteers (K–3)</option>
//               <option>Backpack Program (GHFB)</option>
//               <option>Energy Assistance (CSRA EOA)</option>
//               <option>Clothes Closet / Food Pantry</option>
//             </select>
//             <small>Hold Ctrl/Cmd to select multiple.</small>
//           </label>

//           <label className="stack">
//             <span>Message</span>
//             <textarea name="message" rows={5} placeholder="Share details, best times to reach you, etc." />
//           </label>

//           {/* Honey-pot anti-spam field (kept hidden) */}
//           <input type="text" name="_gotcha" style={{display:"none"}} tabIndex="-1" autoComplete="off" />

//           {/* Email subject/routing helpers */}
//           <input type="hidden" name="_subject" value="New Interest Form submission" />
//           {/* Formspree can CC or redirect later if you want */}

//           <button className="btn primary" type="submit">Send</button>
//           {err && <p className="muted">{err}</p>}
//         </form>
//       </article>
//     </section>
//   );
// }

// src/pages/GetInvolved.jsx
export default function GetInvolved() {
  return (
    <section className="stack">
      <h2>Get Involved / Interest Form</h2>

      <form
        action="https://formspree.io/f/abcdwxyz"  // ← replace with your endpoint
        method="POST"
        className="card stack"
      >
        <p>Tell us how you’d like to connect. We’ll reach out by your preferred method.</p>

        <div className="grid" style={{gridTemplateColumns:"1fr 1fr"}}>
          <label>First name<input name="firstName" required /></label>
          <label>Last name<input name="lastName" required /></label>
        </div>

        <div className="grid" style={{gridTemplateColumns:"1fr 1fr"}}>
          <label>Email<input type="email" name="email" required /></label>
          <label>Phone<input type="tel" name="phone" /></label>
        </div>

        <label>Preferred contact
          <select name="preferredContact" defaultValue="Email">
            <option>Email</option>
            <option>Phone</option>
            <option>Text</option>
          </select>
        </label>

        <fieldset className="card">
          <legend>How can we help?</legend>
          <label><input type="checkbox" name="help[]" value="Volunteer (AmeriCorps K–3)" /> Volunteer (AmeriCorps K–3)</label>
          <label><input type="checkbox" name="help[]" value="Donate (financial)" /> Donate (financial)</label>
          <label><input type="checkbox" name="help[]" value="Donate (in-kind)" /> Donate (in-kind: supplies/food)</label>
          <label><input type="checkbox" name="help[]" value="Become a partner" /> Become a partner (organization/church/business)</label>
          <label><input type="checkbox" name="help[]" value="Request assistance" /> Request assistance (programs / pantry / energy)</label>
        </fieldset>

        <label>Which program(s)? (optional)
          <select name="programs" multiple>
            <option>After-School & Summer</option>
            <option>AmeriCorps K–3</option>
            <option>Pantry & Essentials</option>
          </select>
        </label>

        <label>Message
          <textarea name="message" placeholder="Share details, best times to reach you, etc." rows={4} />
        </label>

        {/* Where should replies go */}
        <input type="hidden" name="_replyto" value="" />
        {/* Subject line in your inbox */}
        <input type="hidden" name="_subject" value="New Interest Form submission" />

        <button className="btn primary" type="submit">Send</button>
      </form>
    </section>
  );
}
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import toast from "react-hot-toast";
import styles from "./Contact.module.css";
import { Navbar } from "../../Components/Navbar/Navbar";
import { Footer } from "../../Components/Footer/Footer";
import { NewsletterBand } from "../../Components/NewsletterBand/NewsletterBand";
import { CONTACT_EMAIL, CONTACT_TOPICS } from "../../Components/siteLinks";
import { submitForm } from "../../Components/submitForm";

const helpItems = [
  ["Join as faculty", "Teach a subject you know, live online or at a residential bootcamp."],
  ["Join the Fellowship", "Spend a year as the trusted person in a government school in Tamil Nadu."],
  ["Donate", "Fund coaching, bootcamps and admission support for a first-generation student."],
  ["Media and press", "Stories, interviews and photographs from the field."],
];

const empty = { name: "", email: "", phone: "", organisation: "", topic: "", message: "" };

export const Contact = () => {
  const [params] = useSearchParams();
  const preset = CONTACT_TOPICS.some((t) => t.value === params.get("topic")) ? params.get("topic")! : "";
  const [form, setForm] = useState({ ...empty, topic: preset });
  const [sending, setSending] = useState(false);

  const field = (key: keyof typeof empty) => ({
    value: form[key],
    onChange: (e: { target: { value: string } }) => setForm((f) => ({ ...f, [key]: e.target.value })),
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const topic = CONTACT_TOPICS.find((t) => t.value === form.topic)?.label ?? form.topic;
      if ((await submitForm(`Website contact: ${topic}`, { ...form, topic })) === "sent") {
        toast.success("Thanks! The right person on our team will get back to you.");
        setForm(empty);
      }
    } catch {
      toast.error(`Couldn't send right now. Please email ${CONTACT_EMAIL}.`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={styles.page}>
      <Navbar />
      <section className={styles.intro} data-section="intro">
        <h1>Contact Us</h1>
        <p>
          Want to teach, join the Fellowship, donate or learn more about our work? Write to us and the right person on
          our team will get back to you.
        </p>
      </section>

      <section className={styles.body} data-section="form">
        <div className={styles.formCol}>
          <form className={styles.form} onSubmit={onSubmit}>
            <div className={styles.grid}>
              <div>
                <label htmlFor="c-name">Full name *</label>
                <input id="c-name" type="text" autoComplete="name" required {...field("name")} />
              </div>
              <div>
                <label htmlFor="c-email">Email *</label>
                <input id="c-email" type="email" autoComplete="email" required {...field("email")} />
              </div>
              <div>
                <label htmlFor="c-phone">Phone</label>
                <input id="c-phone" type="tel" autoComplete="tel" {...field("phone")} />
              </div>
              <div>
                <label htmlFor="c-org">Organisation or school</label>
                <input id="c-org" type="text" {...field("organisation")} />
              </div>
            </div>
            <div>
              <label htmlFor="c-topic">I’m writing about *</label>
              <select id="c-topic" required {...field("topic")}>
                <option value="">Choose one</option>
                {CONTACT_TOPICS.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="c-msg">Message *</label>
              <textarea id="c-msg" rows={6} required {...field("message")} />
            </div>
            <label className={styles.consent}>
              <input type="checkbox" required />I agree to be contacted by OpenGrad about my message.
            </label>
            <div>
              <button type="submit" disabled={sending}>
                Send Message
              </button>
            </div>
          </form>
        </div>

        <div className={styles.helpCol}>
          <h2>How you can help</h2>
          {helpItems.map(([title, text]) => (
            <div key={title} className={styles.helpItem}>
              <div className={styles.helpTitle}>{title}</div>
              <div className={styles.helpText}>{text}</div>
            </div>
          ))}
          <div className={styles.email}>
            <div className={styles.helpTitle}>Prefer email?</div>
            <div className={styles.emailLine}>
              Write to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </div>
          </div>
        </div>
      </section>

      <NewsletterBand />
      <Footer />
    </div>
  );
};

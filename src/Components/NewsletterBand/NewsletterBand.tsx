import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import styles from "./NewsletterBand.module.css";
import { submitForm } from "../submitForm";

export const NewsletterBand = () => {
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      if ((await submitForm("Newsletter signup", { email, topic: "newsletter" })) === "sent") {
        toast.success("Thanks for subscribing!");
        setEmail("");
      }
    } catch {
      toast.error("Couldn't subscribe right now. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section className={styles.band} data-section="newsletter">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h2>Sign Up to Our Newsletter</h2>
          <p>Stories from the field, results and new programmes, straight to your inbox.</p>
        </div>
        <form className={styles.form} onSubmit={onSubmit}>
          <label htmlFor="nl-email" className={styles.srOnly}>
            Email address
          </label>
          <input
            id="nl-email"
            type="email"
            required
            placeholder="Your email address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" disabled={sending}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

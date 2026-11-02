import { CONTACT_EMAIL } from "./siteLinks";

// Any JSON form endpoint (e.g. Formspree) set in .env as VITE_FORM_ENDPOINT.
// Until one is configured, submissions open a prefilled email to CONTACT_EMAIL instead.
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export type SubmitResult = "sent" | "mailto";

export async function submitForm(subject: string, fields: Record<string, string>): Promise<SubmitResult> {
  if (!ENDPOINT) {
    const body = Object.entries(fields)
      .filter(([, v]) => v)
      .map(([k, v]) => `${k}: ${v}`)
      .join("\n");
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return "mailto";
  }
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ _subject: subject, ...fields }),
  });
  if (!res.ok) throw new Error(`Form endpoint responded ${res.status}`);
  return "sent";
}

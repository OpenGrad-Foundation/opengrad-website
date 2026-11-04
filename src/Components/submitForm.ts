import { CONTACT_EMAIL } from "./siteLinks";

// Google Apps Script web app URL (form-backend/Code.gs) set in .env as VITE_FORM_ENDPOINT.
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
  // text/plain avoids a CORS preflight, which Apps Script can't answer; the script parses the JSON body itself.
  const res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({ _subject: subject, ...fields }),
  });
  if (!res.ok || (await res.json()).ok !== true) throw new Error(`Form endpoint responded ${res.status}`);
  return "sent";
}

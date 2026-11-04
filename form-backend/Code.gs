/**
 * Backend for the website Contact + Newsletter forms (src/Components/submitForm.ts).
 *
 * Deployed with clasp (`npx @google/clasp push` / `deploy`) from this folder, owned by tech@opengrad.in,
 * so confirmation emails go out from that account with replies going to ADMIN_EMAIL.
 * After a fresh setup, run setupDigest once in the editor (approves permissions, creates the
 * every-2-weeks digest trigger). The web app /exec URL goes in .env as VITE_FORM_ENDPOINT.
 * To update without changing the URL: push, then `clasp deploy -i <deploymentId>`.
 *
 * Each topic gets its own tab (created on first submission). Set Status to "Responded"
 * once handled; the digest lists everything still "New".
 */

var ADMIN_EMAIL = "admin@opengrad.in";
var HEADERS = ["Submitted", "Status", "Name", "Email", "Phone", "Organisation", "Message"];

function doPost(e) {
  var d = JSON.parse(e.postData.contents);
  var email = String(d.email || "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ ok: false, error: "invalid email" });

  var tab = String(d.topic || "Other").slice(0, 50);
  var sheet = SpreadsheetApp.getActive().getSheetByName(tab) || SpreadsheetApp.getActive().insertSheet(tab);
  if (sheet.getLastRow() === 0) sheet.appendRow(HEADERS).setFrozenRows(1);
  sheet.appendRow([new Date(), "New", d.name, email, d.phone, d.organisation, d.message].map(safe));

  if (d.topic !== "newsletter") {
    MailApp.sendEmail({
      to: email,
      replyTo: ADMIN_EMAIL,
      name: "OpenGrad",
      subject: "We received your message: " + tab,
      body:
        "Hi " + (d.name || "there") + ",\n\n" +
        "Thanks for writing to OpenGrad. We've recorded your response and the right person on our team " +
        "will get back to you within 24-48 business hours.\n\n" +
        "What you sent us:\n" +
        "Topic: " + tab + "\n" +
        (d.phone ? "Phone: " + d.phone + "\n" : "") +
        (d.organisation ? "Organisation: " + d.organisation + "\n" : "") +
        "Message:\n" + (d.message || "") + "\n\n" +
        "If anything is urgent, reply to this email or write to " + ADMIN_EMAIL + ".\n\n" +
        "Team OpenGrad",
    });
  }
  return json({ ok: true });
}

// Emails ADMIN_EMAIL every submission still marked "New", grouped by tab.
function sendDigest() {
  var sections = SpreadsheetApp.getActive().getSheets().map(function (sheet) {
    var rows = sheet.getDataRange().getValues().slice(1).filter(function (r) { return r[1] === "New"; });
    if (!rows.length) return "";
    return "== " + sheet.getName() + " (" + rows.length + ") ==\n" + rows.map(function (r) {
      return "- " + Utilities.formatDate(new Date(r[0]), "Asia/Kolkata", "d MMM") + " | " + r[2] + " <" + r[3] + "> " +
        (r[4] ? "| " + r[4] + " " : "") + "\n  " + String(r[6]).slice(0, 300);
    }).join("\n");
  }).filter(String);

  if (!sections.length) return;
  MailApp.sendEmail(
    ADMIN_EMAIL,
    "Website form: submissions waiting for a reply",
    "These are still marked \"New\" in the sheet. Reply, then set Status to \"Responded\".\n" +
      SpreadsheetApp.getActive().getUrl() + "\n\n" + sections.join("\n\n")
  );
}

// Run once by hand. Every 2 weeks on Monday 9-10am (script timezone).
function setupDigest() {
  ScriptApp.getProjectTriggers().forEach(function (t) { ScriptApp.deleteTrigger(t); });
  ScriptApp.newTrigger("sendDigest").timeBased().everyWeeks(2).onWeekDay(ScriptApp.WeekDay.MONDAY).atHour(9).create();
}

// Stops "=...", "+...", "-...", "@..." from being run as sheet formulas.
function safe(v) {
  v = v == null ? "" : v;
  return typeof v === "string" && /^[=+\-@]/.test(v) ? "'" + v : v;
}

function json(o) {
  return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON);
}

/**
 * Form submission endpoint.
 *
 * NOTE: the /contact form on this site has never had a submit mechanism — no
 * action, no handler, no API route — so there was no existing destination to
 * mirror. The only proven delivery path in this repo is the Formspree endpoint
 * used by public/feedback.html, which is configured to deliver to
 * vvargas@brooklineit.com. That endpoint is reused here so submissions actually
 * arrive.
 *
 * To move forms to a dedicated inbox or a different provider, change this one
 * constant. Submissions are tagged via the `_subject` field (see LEAD_SUBJECTS)
 * so marketing leads are distinguishable from IT leads in the inbox.
 */
export const FORM_ENDPOINT = 'https://formspree.io/f/xeebzpwz';

export const LEAD_SUBJECTS = {
  marketReview: 'Market Review Request — Restoration Marketing Lead',
  itCheckup: 'Free IT Checkup Request — IT Lead',
};

/**
 * POST a plain object to the form endpoint as JSON.
 * Returns { ok: true } or { ok: false, error: string }.
 */
export async function submitForm(payload) {
  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(payload),
    });

    if (res.ok) return { ok: true };

    // Formspree returns a JSON body with an errors array on validation failure.
    let message = 'Something went wrong sending your request.';
    try {
      const data = await res.json();
      if (Array.isArray(data?.errors) && data.errors.length) {
        message = data.errors.map((e) => e.message).join(' ');
      }
    } catch {
      /* non-JSON error body — keep the generic message */
    }
    return { ok: false, error: message };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}

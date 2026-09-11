/**
 * Form submission.
 *
 * - /contact (Free IT Checkup) → Netlify Forms, form "it-checkup", emailed to
 *   contact@brooklineit.com. Declared in public/__forms.html. Only works when
 *   the site is served by Netlify. The /contact form shipped with no submit
 *   mechanism at all until Sep 2026, so earlier checkup requests were lost.
 * - /market-review and public/feedback.html → Formspree (FORM_ENDPOINT),
 *   delivered to vvargas@brooklineit.com.
 *
 * Submissions are tagged via the subject field (see LEAD_SUBJECTS) so
 * marketing leads are distinguishable from IT leads in the inbox.
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

/**
 * POST fields to a Netlify form declared in public/__forms.html.
 * Returns { ok: true } or { ok: false, error: string }.
 */
export async function submitNetlifyForm(formName, fields) {
  try {
    const res = await fetch('/__forms.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({ 'form-name': formName, ...fields }).toString(),
    });
    if (res.ok) return { ok: true };
    return { ok: false, error: 'Something went wrong sending your request. Please call us instead.' };
  } catch {
    return { ok: false, error: 'Network error. Please check your connection and try again.' };
  }
}

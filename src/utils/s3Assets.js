const API = process.env.REACT_APP_API_ENDPOINT;
const CACHE_PREFIX = 'signed_urls_';
const EXPIRY_PREFIX = 'signed_urls_expiry_';

export async function unlockProject(slug, hash) {
  const cached = getCachedUrlMap(slug);
  if (cached) return cached;

  const res = await fetch(`${API}/unlock/${slug}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ hash }),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || `HTTP ${res.status}`);

  const data = await res.json();
  try {
    sessionStorage.setItem(CACHE_PREFIX + slug, JSON.stringify(data.urls));
    sessionStorage.setItem(EXPIRY_PREFIX + slug, String(data.expiresAt));
  } catch { /* sessionStorage full */ }
  return data.urls;
}

export function getCachedUrlMap(slug) {
  try {
    const expiry = Number(sessionStorage.getItem(EXPIRY_PREFIX + slug));
    if (!expiry || Math.floor(Date.now() / 1000) >= expiry - 60) {
      sessionStorage.removeItem(CACHE_PREFIX + slug);
      sessionStorage.removeItem(EXPIRY_PREFIX + slug);
      return null;
    }
    const raw = sessionStorage.getItem(CACHE_PREFIX + slug);
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
}

export function getAssetUrl(urlMap, key) {
  return urlMap?.[key] ?? null;
}

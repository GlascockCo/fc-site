// src/lib/urls.js

// Prefix assets/docs that live in /public with the repo base (works for dev & prod)
export function withBase(path = "") {
	return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}

// Turn "/programs#x" or "programs#x" into "#/programs#x" for HashRouter
export function toHashHref(href = "") {
	if (!href) return "#/";
	if (/^(https?:)?\/\//i.test(href)) return href; // external http(s)
	if (href.startsWith("mailto:") || href.startsWith("tel:")) return href;
	if (href.startsWith("#")) return href; // same-page anchor

	// split URL + hash and normalize
	const [path, hash = ""] = href.split("#");
	const cleanPath = path.startsWith("/") ? path.slice(1) : path;
	return `#/${cleanPath}${hash ? `#${hash}` : ""}`;
}

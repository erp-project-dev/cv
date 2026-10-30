import { useI18n } from "../i18n";

/** Date of the last CV review, from `lastReview` in package.json. Hidden in the PDF. */
export function LastReview() {
  const { lang, L } = useI18n();
  const date = new Date(`${__LAST_REVIEW__}T00:00:00`).toLocaleDateString(lang, {
    year: "numeric", month: "short", day: "numeric",
  });
  return (
    <p className="last-review">
      <span className="dot" aria-hidden="true" />
      {L.lastReview} · <time dateTime={__LAST_REVIEW__}>{date}</time>
    </p>
  );
}

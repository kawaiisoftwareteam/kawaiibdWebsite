/**
 * Resolve Next.js static imports / public paths into img-ready props
 * (src + intrinsic width/height) so SEO crawlers see size attributes.
 */

const PUBLIC_IMAGE_SIZES = {
  '/sister-slider/achieve_japan.webp': { width: 1024, height: 1024 },
  '/sister-slider/biman_holidays.webp': { width: 1024, height: 1024 },
  '/sister-slider/katsl_tech.webp': { width: 1024, height: 1024 },
  '/sister-slider/kddl_design.webp': { width: 1024, height: 1024 },
  '/sister-slider/kgj_japan.webp': { width: 1024, height: 1024 },
  '/sister-slider/kiec_edu.webp': { width: 1024, height: 1024 },
  '/sister-slider/sanjana_hr.webp': { width: 1024, height: 1024 },
  '/sister-slider/tredmig_trade.webp': { width: 1024, height: 1024 },
};

export function resolveImage(img) {
  if (img == null || img === false) return {};

  if (typeof img === 'string') {
    const known = PUBLIC_IMAGE_SIZES[img];
    return known ? { src: img, ...known } : { src: img };
  }

  const src = img.src || '';
  if (!src) return {};

  const props = { src };
  if (typeof img.width === 'number' && img.width > 0) props.width = img.width;
  if (typeof img.height === 'number' && img.height > 0) props.height = img.height;
  return props;
}

export function getSrc(img) {
  return resolveImage(img).src || '';
}

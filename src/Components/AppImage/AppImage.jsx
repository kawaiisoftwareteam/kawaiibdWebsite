import { resolveImage } from '../../lib/image';

/**
 * Drop-in <img> that always emits width/height when known (Next imports / mapped public paths).
 */
export default function AppImage({
  src,
  alt = '',
  width,
  height,
  loading = 'lazy',
  decoding = 'async',
  ...rest
}) {
  const resolved = resolveImage(src);

  return (
    <img
      loading={loading}
      decoding={decoding}
      {...resolved}
      {...(width != null ? { width } : null)}
      {...(height != null ? { height } : null)}
      alt={alt}
      {...rest}
    />
  );
}

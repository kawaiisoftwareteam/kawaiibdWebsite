#!/bin/bash

# ============================================================
# Batch Image → WebP Converter
# Converts all JPG/JPEG/PNG files in src/Assets and public/
# to WebP format using cwebp at quality 80.
# Original files are KEPT as fallback.
# ============================================================

QUALITY=80
TOTAL_ORIGINAL=0
TOTAL_WEBP=0
COUNT=0
SKIP=0

# Directories to process
DIRS=(
  "src/Assets"
  "public"
)

echo ""
echo "======================================================"
echo "  Kawaii Group — Image → WebP Batch Converter"
echo "  Quality: ${QUALITY} | Tool: cwebp"
echo "======================================================"
echo ""

for DIR in "${DIRS[@]}"; do
  echo "📁 Processing: $DIR"
  echo "------------------------------------------------------"

  # Find all jpg/jpeg/png, excluding .DS_Store and already-webp files
  while IFS= read -r -d '' file; do
    ext="${file##*.}"
    ext_lower=$(echo "$ext" | tr '[:upper:]' '[:lower:]')

    # Skip files that already have a webp version
    webp_file="${file%.*}.webp"
    if [ -f "$webp_file" ]; then
      echo "  ⏭  SKIP (already exists): $(basename "$webp_file")"
      ((SKIP++))
      continue
    fi

    original_size=$(du -k "$file" | cut -f1)
    TOTAL_ORIGINAL=$((TOTAL_ORIGINAL + original_size))

    # Convert using cwebp
    if cwebp -q "$QUALITY" "$file" -o "$webp_file" -quiet 2>/dev/null; then
      webp_size=$(du -k "$webp_file" | cut -f1)
      TOTAL_WEBP=$((TOTAL_WEBP + webp_size))
      savings=$(( (original_size - webp_size) * 100 / (original_size + 1) ))
      echo "  ✅ $(basename "$file") → $(basename "$webp_file")  |  ${original_size}KB → ${webp_size}KB  (saved ${savings}%)"
      ((COUNT++))
    else
      echo "  ❌ FAILED: $file"
    fi

  done < <(find "$DIR" -type f \( -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.png" \) ! -name "*.DS_Store" -print0)

  echo ""
done

echo "======================================================"
echo "  DONE!"
echo "  Converted : $COUNT files"
echo "  Skipped   : $SKIP files (already had WebP)"
echo "  Original  : $((TOTAL_ORIGINAL / 1024)) MB"
echo "  WebP total: $((TOTAL_WEBP / 1024)) MB"
if [ $TOTAL_ORIGINAL -gt 0 ]; then
  SAVINGS=$(( (TOTAL_ORIGINAL - TOTAL_WEBP) * 100 / TOTAL_ORIGINAL ))
  echo "  Saved     : ~${SAVINGS}%"
fi
echo "======================================================"
echo ""
echo "⚠️  Original files are kept. After verifying images"
echo "   load correctly, you can delete originals."
echo ""

#!/bin/bash

# ============================================================
# Update image import paths from .jpg/.jpeg/.png → .webp
# Scans all JSX/JS/TS/TSX files and replaces imports
# ONLY where a corresponding .webp file exists
# ============================================================

SRC_DIR="src"
COUNT=0

echo ""
echo "======================================================"
echo "  Updating image import/src paths → .webp"
echo "======================================================"
echo ""

# Find all JS/JSX/TS/TSX files
while IFS= read -r -d '' jsfile; do
  CHANGED=0
  TMPFILE=$(mktemp)
  cp "$jsfile" "$TMPFILE"

  # Replace import statements: import X from '....(jpg|jpeg|png)'
  # We only replace if the .webp file actually exists
  while IFS= read -r line; do
    newline="$line"

    # Match import lines with .jpg, .jpeg, .png
    if echo "$line" | grep -qE "(import .* from ['\"].*\.(jpg|jpeg|png)['\"])|(from ['\"].*\.(jpg|jpeg|png)['\"])"; then
      # Extract the path
      imgpath=$(echo "$line" | grep -oE "['\"][^'\"]*\.(jpg|jpeg|png)['\"]" | head -1 | tr -d "'\"")
      
      if [ -n "$imgpath" ]; then
        # Build the absolute path relative to the JS file's directory
        jsdir=$(dirname "$jsfile")
        # Handle relative paths
        if [[ "$imgpath" == ./* ]] || [[ "$imgpath" == ../* ]]; then
          abs_img_path=$(realpath "$jsdir/$imgpath" 2>/dev/null)
        else
          abs_img_path=""
        fi

        if [ -n "$abs_img_path" ]; then
          webp_abs="${abs_img_path%.*}.webp"
          if [ -f "$webp_abs" ]; then
            # Replace the extension in the line
            ext="${imgpath##*.}"
            newline=$(echo "$line" | sed "s/\\.${ext}['\"]/\.webp'/g; s/\\.${ext}\"/\.webp\"/g")
            if [ "$newline" != "$line" ]; then
              CHANGED=1
            fi
          fi
        fi
      fi
    fi

    echo "$newline"
  done < "$TMPFILE" > "${TMPFILE}.new"

  if [ $CHANGED -eq 1 ]; then
    cp "${TMPFILE}.new" "$jsfile"
    echo "  ✅ Updated: $jsfile"
    ((COUNT++))
  fi

  rm -f "$TMPFILE" "${TMPFILE}.new"

done < <(find "$SRC_DIR" -type f \( -name "*.jsx" -o -name "*.js" -o -name "*.tsx" -o -name "*.ts" \) -print0)

echo ""
echo "======================================================"
echo "  Updated $COUNT files with new WebP import paths"
echo "======================================================"
echo ""

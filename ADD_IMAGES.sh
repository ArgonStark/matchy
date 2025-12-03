#!/bin/bash

# Script to help add images to Matchy app
# Run this from the project root: bash ADD_IMAGES.sh

echo "📸 Matchy - Image Setup Helper"
echo "================================"
echo ""
echo "This script will help you add the required images."
echo ""
echo "Required images:"
echo "  1. logo.png - Teal background with location pin icon"
echo "  2. get-started.png - Isometric pixel art illustration"
echo ""
echo "Current public folder location:"
echo "  $(pwd)/public"
echo ""
echo "To add images manually:"
echo "  1. Open Finder and navigate to: $(pwd)/public"
echo "  2. Drag and drop your logo.png file"
echo "  3. Drag and drop your get-started.png file"
echo ""
echo "Or use terminal:"
echo "  cp /path/to/your/logo.png $(pwd)/public/logo.png"
echo "  cp /path/to/your/get-started.png $(pwd)/public/get-started.png"
echo ""
read -p "Press Enter to open the public folder in Finder..."
open "$(pwd)/public"

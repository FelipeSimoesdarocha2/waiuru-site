#!/bin/bash

cat > .env.production <<EOF
NEXT_PUBLIC_API_URL="${API_URL}"
EOF

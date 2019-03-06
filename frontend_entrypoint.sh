# entrypoint.sh

#!/bin/bash
# Docker entrypoint script.

if [ ! -d "node_modules" ]; then
   yarn install
fi

yarn serve

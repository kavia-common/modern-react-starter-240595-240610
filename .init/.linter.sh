#!/bin/bash
cd /home/kavia/workspace/code-generation/modern-react-starter-240595-240610/frontend_app
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi


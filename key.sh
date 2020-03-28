#!/bin/bash

echo -n 'JOPLIN_WEBCLIPPER_TOKEN='> .env; echo 'select value from settings where key="api.token"' | docker run -i --rm -v .config/joplin:/data sstc/sqlite3 sqlite3 database.sqlite >> .env
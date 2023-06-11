[Script]
enable = true;
http-request ^https?:\/\/(www\.)?.*myprofile.* script-path=https://example.com/loon.js timeout=10 requires-body = true

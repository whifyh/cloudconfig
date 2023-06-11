[Script]
enable = true;
    http-request ^https?:\/\/(www\.)?.*myprofile.* script-path=https://raw.githubusercontent.com/whifyh/cloudconfig/main/loon/pony-response.js timeout=10 requires-body = true

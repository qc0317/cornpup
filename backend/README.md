# CPPFUN assigned accounts

The course frontend is hosted by GitHub Pages. A small PHP/SQLite API runs on the existing Alibaba Hong Kong server at `https://score.hiyamax.com/cppfun-api`. Only Max and Scott are provisioned. There is no registration endpoint.

## Production layout

- `/opt/cppfun-service/api.php`: front controller, PHP 7.4 compatible.
- `/opt/cppfun-private/progress.sqlite`: password hashes, sessions and per-account progress. Directory is mode 700 and owned by the PHP-FPM user; database is mode 600.
- Nginx routes `/cppfun-api/` to this controller through the existing PHP-FPM socket. It never serves these directories as static files.
- `init.php` runs only in CLI and refuses to overwrite an existing database. Initial random passwords are written to a private credentials file, never stdout or GitHub.

Cookie `__Host-cppfun` is Secure, HttpOnly, SameSite=Strict, has no Domain and expires after seven days. Mutations require the exact course origin and logged-in writes require a CSRF token. Each storage record has a revision; stale writes return 409. Reset uses a null-valued record to retain revision history. JSON state shape and course numbers are validated on the server. The authenticated session determines the account, regardless of client-supplied account IDs.

The frontend reads account records before lesson engines initialize. Visitors use memory only. Existing anonymous localStorage data is neither loaded nor imported. Unsynced writes remain in memory and show an error/retry status; navigation warns until synchronization completes. Login and password changes require HTTPS.

## Maintenance

Keep database backups and credentials outside `/www` because the existing resource host serves that directory. Never publish `_build/accounts/ssh/`, credential files, live SQLite databases or session cookies. Back up SQLite with its online-backup interface, not a copy during writes. Keep the Nginx configuration backup when modifying routes; test with `nginx -t` before reloading.

Public course browser regressions use `_checks/account-fixture.cjs` to simulate an authenticated session. PHP/SQLite integration and security checks run against a separate test database, not the production student records. Production release additionally requires valid course HTTPS and real browser tests against the public frontend and API.

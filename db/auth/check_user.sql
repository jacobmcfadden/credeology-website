
SELECT id, email, first_name, last_name, phone, password, verify_phone, verify_email, created_at, updated_at, is_admin FROM users
WHERE email = $1 OR phone = $2;
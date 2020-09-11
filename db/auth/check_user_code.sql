SELECT * FROM info_verifications 
WHERE user_id = $1 AND info = $2
ORDER BY id DESC LIMIT 1;

DROP POLICY IF EXISTS "Anyone can submit a usage request" ON public.card_usage_requests;

CREATE POLICY "Anyone can submit a usage request"
  ON public.card_usage_requests FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    char_length(beneficiary_first_name) BETWEEN 1 AND 100
    AND char_length(beneficiary_last_name) BETWEEN 1 AND 100
    AND char_length(beneficiary_email) BETWEEN 3 AND 255
    AND beneficiary_email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND char_length(pro_name) BETWEEN 1 AND 200
    AND (message IS NULL OR char_length(message) <= 2000)
  );

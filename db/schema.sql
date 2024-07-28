CREATE TABLE IF NOT EXISTS "schema_migrations" (version varchar(128) primary key);
CREATE TABLE notes(
    id text,
    title text,
    body text
);
-- Dbmate schema migrations
INSERT INTO "schema_migrations" (version) VALUES
  ('20240727213536');

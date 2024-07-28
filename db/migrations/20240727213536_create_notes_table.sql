-- migrate:up
create table notes(
    id text,
    title text,
    body text
)

-- migrate:down
drop table notes;

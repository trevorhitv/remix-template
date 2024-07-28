-- migrate:up
create table notes(
    id text    PRIMARY KEY,
    title text not null,
    body text  not null
)

-- migrate:down
drop table notes;

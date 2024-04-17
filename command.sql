create type period as enum ('BC', 'AD');

create table if not exists history (
    id serial primary key unique not null,
    title text not null,
    description text,
    year integer,
    period period,
    month integer,
    day integer,
    country text not null,
    city text
);

insert into history (title, description, year, period, month, day, country, city) values 
('Construction of the Great Wall of China Begins', 'Construction of the Great Wall of China during the Qin Dynasty', 221, 'BC', null, null, 'China', null),
('Completion of the Colosseum in Rome', 'The contruction of the Colosseum, an ancient amphitheater in Rome, is completed.', 80, 'AD', null, null, 'Italy', 'Rome');

drop table if exists history;
drop type if exists period;
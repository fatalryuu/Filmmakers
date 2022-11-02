import asluk from '../img/asluk/asluk.jpg';
import aslukPhoto1 from '../img/asluk/aslukPhoto1.jpg';
import aslukPhoto2 from '../img/asluk/aslukPhoto2.jpg';
import aslukPhoto3 from '../img/asluk/aslukPhoto3.jpg';
import aslukPhoto4 from '../img/asluk/aslukPhoto4.jpg';

import dobrolubov from '../img/dobrolubov/dobrolubov.jpg';
import dobrolubovPhoto1 from '../img/dobrolubov/dobrolubovPhoto1.jpg';
import dobrolubovPhoto2 from '../img/dobrolubov/dobrolubovPhoto2.jpg';
import dobrolubovPhoto3 from '../img/dobrolubov/dobrolubovPhoto3.jpg';
import dobrolubovPhoto4 from '../img/dobrolubov/dobrolubovPhoto4.jpg';

import kudinenko from '../img/kudinenko/kudinenko.jpg';
import kudinenkoPhoto1 from '../img/kudinenko/kudinenkoPhoto1.jpg';
import kudinenkoPhoto2 from '../img/kudinenko/kudinenkoPhoto2.jpg';
import kudinenkoPhoto3 from '../img/kudinenko/kudinenkoPhoto3.jpg';
import kudinenkoPhoto4 from '../img/kudinenko/kudinenkoPhoto4.jpg';
import kudinenkoPhoto5 from '../img/kudinenko/kudinenkoPhoto5.jpg';

import orlov from '../img/orlov/orlov.jpg';
import orlovPhoto1 from '../img/orlov/orlovPhoto1.jpg';
import orlovPhoto2 from '../img/orlov/orlovPhoto2.jpg';
import orlovPhoto3 from '../img/orlov/orlovPhoto3.jpg';
import orlovPhoto4 from '../img/orlov/orlovPhoto4.JPG';

import tarich from '../img/tarich/tarich.jpg';
import tarichPhoto1 from '../img/tarich/tarichPhoto1.jpg';
import tarichPhoto2 from '../img/tarich/tarichPhoto2.jpg';
import tarichPhoto3 from '../img/tarich/tarichPhoto3.jpg';
import tarichPhoto4 from '../img/tarich/tarichPhoto4.jpg';


const initialDetails = [
    {
        id: 1,
        imgPath: asluk,
        name: "Виктор Аслюк",
        dateOfBirth: 1961,
        dateOfDeath: "наше время",
        someText: "Режиссер документального кино\n" +
            "Окончил филологический факультет Белорусского государственного университета\n" +
            "и театральный факультет Белорусской Академии искусств,  (мастерская Виктора Дашука).",
        photos: [
            aslukPhoto1,
            aslukPhoto2,
            aslukPhoto3,
            aslukPhoto4,
        ],
        links: [
            "https://www.youtube.com/embed/QcFzs7ry3SQ",
            "https://www.youtube.com/embed/4yfl-cTWFX4"
        ],
        coordinates: {
            longitude: 26,
            latitude: 53
        },
        url: "/asluk"
    },
    {
        id: 2,
        imgPath: dobrolubov,
        name: "Игорь Добролюбов",
        dateOfBirth: 1933,
        dateOfDeath: 2010,
        someText:  "Советский и белорусский актёр театра и кино, кинорежиссёр, сценарист, педагог, народный артист Белорусской ССР (1985).\n" +
            "Член КПСС с 1963 года.",
        photos: [
            dobrolubovPhoto1,
            dobrolubovPhoto2,
            dobrolubovPhoto3,
            dobrolubovPhoto4,
        ],
        links: [
            "https://www.youtube.com/embed/h1bLCEKO6zY",
            "https://www.youtube.com/embed/hqpvHvPXM9o"
        ],
        coordinates: {
            longitude: 26,
            latitude: 53
        },
        url: "/dobrolubov"
    },
    {
        id: 3,
        imgPath: orlov,
        name: "Владимир Орлов",
        dateOfBirth: 1971,
        dateOfDeath: "наше время",
        someText: "Белорусский писатель, публицист, режиссер театра и кино.\n" +
            "В 1963 году окончил БГТХИ (первый выпуск режиссерского факультета).\n" +
            "В 1956-59 годах работал на киностудии \"Беларусьфильм\": помощник, ассистент режиссера, режиссер-практикант.\n" +
            "С 1963 по 2002 - на Гостелерадио РБ, т/о \"Телефильм\" (кинорежиссер-постановщик высшей категории).",
        photos: [
            orlovPhoto1,
            orlovPhoto2,
            orlovPhoto3,
            orlovPhoto4,
        ],
        links: [
            "https://www.youtube.com/embed/bW6aBmFZOVk",
            "https://www.youtube.com/embed/Y_gRKe0IdmM"
        ],
        coordinates: {
            longitude: 26,
            latitude: 53
        },
        url: "/orlov"
    },
    {
        id: 4,
        imgPath: kudinenko,
        name: "Андрей Кудиненко",
        dateOfBirth: 1971,
        dateOfDeath: "наше время",
        someText:  "Белорусский кинорежиссёр.\n" +
            "Учился в Киевском политехническом институте (1988—1992).\n" +
            "Окончил Белорусскую государственную академию искусств в 1998 году (мастерская Виктора Турова), затем аспирантуру (2001).\n" +
            "Один из последних учеников легенды «Беларусьфильма» Виктора Турова.",
        photos: [
            kudinenkoPhoto1,
            kudinenkoPhoto2,
            kudinenkoPhoto3,
            kudinenkoPhoto4,
            kudinenkoPhoto5,
        ],
        links: [
            "https://www.youtube.com/embed/G4ifNgZwbeY",
            "https://www.youtube.com/embed/GDrfDlNwlUw"
        ],
        coordinates: {
            longitude: 26,
            latitude: 53
        },
        url: "/kudinenko"
    },
    {
        id: 5,
        imgPath: tarich,
        name: "Юрий Тарич",
        dateOfBirth: 1885,
        dateOfDeath: 1967,
        someText:  "Cоветский кинорежиссёр и сценарист. Заслуженный деятель искусств РСФСР (1935) и БССР.\n" +
            "В 1925 году как режиссёр дебютировал постановками фильмов \"Морока\".\n" +
            "Является одним из основоположников белорусской кинематографии.",
        photos: [
            tarichPhoto1,
            tarichPhoto2,
            tarichPhoto3,
            tarichPhoto4,
        ],
        links: [
            "https://www.youtube.com/embed/n6l17pIZdTg",
            "https://www.youtube.com/embed/L2iObDhhE7w"
        ],
        coordinates: {
            longitude: 26,
            latitude: 53
        },
        url: "/tarich"
    },
];

export default initialDetails;
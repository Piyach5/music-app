import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

let artists = [
  {
    id: 1,
    name: "radiohead",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4gFjFnVPT5POKqSqZPXWmNZTm3EGIYZpNKA&s",
    album: [
      {
        id: 1,
        title: "ok computer",
        playlist: {
          src: "https://archive.org/embed/02.-paranoid-android&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/b/ba/Radioheadokcomputer.png",
      },
    ],
  },
  {
    id: 2,
    name: "the smiths",
    image:
      "https://images.genius.com/3fc6cae07767241ae2d54c14abc0ea8e.1000x1000x1.jpg",
    album: [
      {
        id: 1,
        title: "the queen is dead",
        playlist: {
          src: "https://archive.org/embed/01.-the-queen-is-dead&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/e/ed/The-Queen-is-Dead-cover.png",
      },
    ],
  },
  {
    id: 3,
    name: "the stone roses",
    image:
      "https://resources.tidal.com/images/cb6c7e57/17bc/43d3/a446/e594392b1dea/750x750.jpg",
    album: [
      {
        id: 1,
        title: "the stone roses",
        playlist: {
          src: "https://archive.org/embed/the-stone-roses-1989-the-stone-roses-silvertone-1184-2-jx&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/f/ff/Stoneroses.jpg",
      },
    ],
  },
  {
    id: 4,
    name: "oasis",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKGUPmX33_wE9wQaOMTuCcHNWriBo9rEUZjQ&s",
    album: [
      {
        id: 1,
        title: "(what's the story) morning glory?",
        playlist: {
          src: "https://archive.org/embed/oasis-whats-the-story-morning-glory_202401&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/b/b1/Oasis_-_%28What%27s_The_Story%29_Morning_Glory_album_cover.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "the strokes",
    image: "https://i.scdn.co/image/ab6761610000e5ebc3b137793230f4043feb0089",
    album: [
      {
        id: 1,
        title: "room on fire",
        playlist: {
          src: "https://archive.org/embed/the-strokes-room-on-fire&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/9/9f/Room_on_Fire_cover.jpg",
      },
    ],
  },
  {
    id: 6,
    name: "nirvana",
    image:
      "https://rockerainsider.com/wp-content/uploads/2022/04/nirvana-band-beginning.webp",
    album: [
      {
        id: 1,
        title: "nirvana",
        playlist: {
          src: "https://archive.org/embed/Nirvana2002CD&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Nirvana_album_cover.svg/220px-Nirvana_album_cover.svg.png",
      },
    ],
  },
  {
    id: 7,
    name: "the beatles",
    image:
      "https://cdn.britannica.com/18/136518-050-CD0E49C6/The-Beatles-Ringo-Starr-Paul-McCartney-George.jpg",
    album: [
      {
        id: 1,
        title: "with the beatles",
        playlist: {
          src: "https://archive.org/embed/with-the-beatles_202211&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg",
      },
    ],
  },
  {
    id: 8,
    name: "led zeppelin",
    image:
      "https://cdn.britannica.com/47/243647-050-7C88FBF5/Led-Zeppelin-1968-studio-portrait-John-Bohham-Jimmy-Page-Robert-Plant-John-Paul-Jones.jpg",
    album: [
      {
        id: 1,
        title: "led zeppelin",
        playlist: {
          src: "https://archive.org/embed/09.-how-many-more-times&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png/220px-Led_Zeppelin_-_Led_Zeppelin_%281969%29_front_cover.png",
      },
    ],
  },
  {
    id: 9,
    name: "bob dylan",
    image:
      "https://static01.nyt.com/images/2016/10/14/opinion/14marcusWeb/14marcusWeb-superJumbo.jpg",
    album: [
      {
        id: 1,
        title: "the freewheelin' bob dylan",
        playlist: {
          src: "https://archive.org/embed/bob-dylan-the-freewheelin-bob-dylan&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://ephemeralnewyork.wordpress.com/wp-content/uploads/2011/02/bobdylancover.jpg?w=584",
      },
    ],
  },
  {
    id: 10,
    name: "pearl jam",
    image:
      "https://static.wikia.nocookie.net/pearl-jam/images/2/2f/Normal_Pearl_Jam.jpg",
    album: [
      {
        id: 1,
        title: "ten",
        playlist: {
          src: "https://archive.org/embed/pearl-jam-05-black&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/2/2d/PearlJam-Ten2.jpg",
      },
    ],
  },
  {
    id: 11,
    name: "tame impala",
    image:
      "https://assets.exclaim.ca/dr2uqw6xy/image/upload/c_limit,w_890/f_auto/q_auto/Tame-Impala-inside---Maciek-Pozoga?_a=BAVAfVIB0",
    album: [
      {
        id: 1,
        title: "lonerism",
        playlist: {
          src: "https://archive.org/embed/11.-nothing-that-has-happened-so-far-has-been-anything-we-could-control&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://upload.wikimedia.org/wikipedia/en/3/31/Tame_Impala_-_Lonerism.png",
      },
    ],
  },
  {
    id: 12,
    name: "pavement",
    image:
      "https://images.sk-static.com/images/media/profile_images/artists/549050/huge_avatar",
    album: [
      {
        id: 1,
        title: "slanted and enchanted",
        playlist: {
          src: "https://archive.org/embed/09.-here_202402&playlist=1&autoplay=1&list_height=150",
        },
        albumcover:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy69ofr8MYYELSoHY0jcV5wgNCz58lh4s5uQ&s",
      },
    ],
  },
];

const app = express();
const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.json("Hello World");
});

app.get("/artists", (req, res) => {
  res.json({
    data: artists,
  });
});

app.listen(port, () => console.log(`Server is running at ${port}`));

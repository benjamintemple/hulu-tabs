const data = [
  {
    id: 0,
    text: "Live Sports",
    image: "sportsbg.jpg",
    description:
      "Catch your games at home or on the go. Stream live games from major college and pro leagues including the NCAA®, NBA, NHL, NFL, and more.",
    logos: [
      {
        url: "/sports-logos/cbs-sports-network-logo.png",
        alt: "CBS Sports Network",
      },
      {
        url: "/sports-logos/espn-network-logo.png",
        alt: "ESPN",
      },
      {
        url: "/sports-logos/nbcsn-network-logo.svg",
        alt: "NBC Sports Network",
      },
      {
        url: "/sports-logos/golf-network-logo.png",
        alt: "Golf Network",
      },
    ],
  },
  {
    id: 1,
    text: "Breaking News",
    image: "newsbg.jpg",
    description:
      "Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.",
    logos: [
      {
        url: "/news-logos/abc-news-live-network-logo.png",
        alt: "ABC News",
      },
      {
        url: "/news-logos/cnn-network-logo.svg",
        alt: "CNN",
      },
      {
        url: "/news-logos/msnbc-network-logo.png",
        alt: "MSNBC News",
      },
      {
        url: "/news-logos/foxnews-network-logo.svg",
        alt: "Fox News",
      },
    ],
  },

  {
    id: 2,
    text: "Biggest Events",
    image: "eventsbg.jpg",
    description:
      "Spectacular, can't-miss moments like the Olympics, Grammys, Oscars, Emmys, and more.",
    logos: [
      {
        url: "/events-logos/emmys-logo.full.png",
        alt: "The Emmys",
      },
      {
        url: "/events-logos/golden-globe-logo.full.png",
        alt: "Golden Globe",
      },
      {
        url: "/events-logos/grammys-logo.full.png",
        alt: "The Grammys",
      },
      {
        url: "/events-logos/oscars-logo.full.png",
        alt: "The Oscars",
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}

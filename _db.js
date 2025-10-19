let games = [
  {
    id: 1,
    title: "The Legend of Zelda: Breath of the Wild",
    platform: ["Nintendo Switch", "Wii U"],
  },
  {
    id: 2,
    title: "Red Dead Redemption 2",
    platform: ["PS4", "Xbox One", "PC"],
  },
  {
    id: 3,
    title: "God of War",
    platform: ["PS4", "PS5", "PC"],
  },
  {
    id: 4,
    title: "Super Mario Odyssey",
    platform: ["Nintendo Switch"],
  },
  {
    id: 5,
    title: "The Last of Us Part II",
    platform: ["PS4", "PS5"],
  },
];

let reviews = [
  {
    id: 1,
    rating: 5,
    content:
      "One of the best open world games ever made. The freedom to explore and experiment is unmatched.",
    author_id: 1,
    game_id: 1,
  },
  {
    id: 2,
    rating: 5,
    content:
      "A masterpiece in storytelling and world building. Arthur Morgan's journey is unforgettable.",
    author_id: 2,
    game_id: 2,
  },
  {
    id: 3,
    rating: 5,
    content:
      "The combat system and story are phenomenal. Kratos and Atreus' relationship is beautifully portrayed.",
    author_id: 3,
    game_id: 3,
  },
  {
    id: 4,
    rating: 4,
    content:
      "A joyful adventure with creative level design. Capturing moons never gets old.",
    author_id: 4,
    game_id: 4,
  },
  {
    id: 5,
    rating: 5,
    content:
      "Emotionally powerful narrative with stunning visuals and intense gameplay moments.",
    author_id: 5,
    game_id: 5,
  },
];

let authors = [
  {
    id: 1,
    name: "John Smith",
    verified: true,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    verified: true,
  },
  {
    id: 3,
    name: "Michael Chen",
    verified: false,
  },
  {
    id: 4,
    name: "Emily Brown",
    verified: true,
  },
  {
    id: 5,
    name: "David Wilson",
    verified: false,
  },
];

export default { games, reviews, authors };

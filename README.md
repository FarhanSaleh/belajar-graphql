# Query All

```graphql
query QueryAll {
  games {
    id
    title
    platform
    reviews {
      id
      content
      rating
    }
  }
  authors {
    id
    name
    verified
    reviews {
      id
      content
      rating
    }
  }
  reviews {
    id
    content
    rating
    author {
      id
      name
      verified
    }
    game {
      id
      title
      platform
    }
  }
}
```

# Query One

```graphql
# Get One Game
query QueryGame($gameId: ID!) {
  game(id: $gameId) {
    id
    title
    platform
    reviews {
      id
      content
      rating
    }
  }
}

# Get One Author
query QueryAuthor($authorId: ID!) {
  author(id: $authorId) {
    id
    name
    verified
    reviews {
      id
      content
      rating
    }
  }
}

# Get One Review
query QueryReview($reviewId: ID!) {
  review(id: $reviewId) {
    id
    content
    rating
    author {
      id
      name
      verified
    }
    game {
      id
      platform
      title
    }
  }
}
```

### Variables

```json
// query game
{
  "gameId": "1"
}

// query author
{
  "authorId": "1"
}

// query review
{
  "reviewId": "1"
}
```

# Mutation Add

```graphql
mutation AddMutation($game: AddGameInput!) {
  addGame(game: $game) {
    id
    title
    platform
  }
}
```

### Variables

```json
{
  "game": {
    "title": "My Game",
    "platform": ["ps4", "xbox"]
  }
}
```

# Mutation Delete

```graphql
mutation DeleteMutation($id: ID!) {
  deleteGame(id: $id) {
    id
    title
    platform
  }
}
```

### Variables

```json
{
  "id": "1"
}
```

# Mutation Update

```graphql
mutation EditMutation($updateGameId: ID!, $edits: EditGameInput) {
  updateGame(id: $updateGameId, edits: $edits) {
    id
    title
    platform
  }
}
```

### Variables

```json
{
  "updateGameId": "1",
  "edits": {
    "title": "My Game News",
    "platform": ["ps4", "xbox"]
  }
}
```

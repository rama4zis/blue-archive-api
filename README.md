# Blue Archive API

This is a community API for Blue Archive. It is currently in development and is not ready for production use.

An always up to date version of the API is available at https://blue-archive-api-production.up.railway.app

# Technologies Used

Prisma, MySQL, Node.js, Express, TypeScript, Railway

# Prerequisites

- Node.js: ^12.0.0
- NPM or any other package manager

# Installation

install packages with your package manager of choice

```bash
npm install
```

if you want to have API running on a different port, rename `.env.example` to `.env` and change the port number

# Production

Build the project

```bash
npm run build
```

Start the project

```bash
npm start
```

# Development

Start the dev server

```bash
npm run dev
```

# Usage

## Student API

BASE URL: `blue-archive-api-production.up.railway.app`

### Get all students

- Method: `GET`
- Endpoint: `/api/v1/student`

<details>
  <summary><em>Payload Example</em></summary>

```json
{
  "id": 1,
  "name": "Airi",
  "rarity": 2,
  "isLimited": false,
  "school": "Trinity",
  "role": "Support",
  "position": "Back",
  "attackType": "Explosive",
  "armorType": "Light",
  "combatClass": "Special",
  "weaponType": "SMG",
  "usesCover": false,
  "detailStudent": {
    "age": "15",
    "height": "160cm",
    "hobbies": "Looking for tasty sweets, tea parties",
    "birthday": "01/30/2023",
    "releaseDate": "02/04/2021",
    "japaneseName": "栗村 アイリ"
  },
  "urban": "A",
  "outdoor": "D",
  "indoor": "A"
}
```

</details>

### Get a student by ID

- Method: `GET`
- Endpoint: `/api/v1/student/:id`

<details>
  <summary><em>Payload Example</em></summary>

```json
{
  "id": 10,
  "name": "Aru (New Year)",
  "rarity": 3,
  "isLimited": true,
  "school": "Gehenna",
  "role": "Attacker",
  "position": "Back",
  "attackType": "Penetration",
  "armorType": "Special",
  "combatClass": "Striker",
  "weaponType": "SR",
  "usesCover": true,
  "detailStudent": {
    "age": "16",
    "height": "160cm",
    "hobbies": "Studying management",
    "birthday": "03/12/2023",
    "releaseDate": "12/29/2021",
    "japaneseName": "陸八魔 アル"
  },
  "urban": "D",
  "outdoor": "B",
  "indoor": "S"
}
```

</details>

### Get a student using a query

- Method: `GET`
- Endpoint: `/api/v1/student/search`
- Query Parameters:

| Query Parameter | Type    | Description          |
| --------------- | ------- | -------------------- |
| `name`          | string  | Student name         |
| `rarity`        | number  | Student rarity       |
| `isLimited`     | boolean | Student is limited   |
| `school`        | string  | Student school       |
| `role`          | string  | Student role         |
| `position`      | string  | Student position     |
| `attackType`    | string  | Student attack type  |
| `armorType`     | string  | Student armor type   |
| `combatClass`   | string  | Student combat class |
| `weaponType`    | string  | Student weapon type  |
| `usesCover`     | boolean | Student uses cover   |
| `urban`         | string  | Student urban stat   |
| `outdoor`       | string  | Student outdoor stat |
| `indoor`        | string  | Student indoor stat  |

- Example: `/api/v1/student/search?name=Haruna&school=Gehenna`

<details>
  <summary><em>Payload Example</em></summary>

```json
[
  {
    "id": 34,
    "name": "Haruna",
    "rarity": 3,
    "isLimited": false,
    "school": "Gehenna",
    "role": "Attacker",
    "position": "Back",
    "attackType": "Mystic",
    "armorType": "Heavy",
    "combatClass": "Striker",
    "weaponType": "SR",
    "usesCover": true,
    "detailStudent": {
      "age": "17",
      "height": "163cm",
      "hobbies": "Looking for delicious things",
      "birthday": "03/01/2023",
      "releaseDate": "02/04/2021",
      "japaneseName": "黒舘 ハルナ"
    },
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  {
    "id": 35,
    "name": "Haruna (New Year)",
    "rarity": 3,
    "isLimited": true,
    "school": "Gehenna",
    "role": "Attacker",
    "position": "Back",
    "attackType": "Explosive",
    "armorType": "Light",
    "combatClass": "Striker",
    "weaponType": "SR",
    "usesCover": true,
    "detailStudent": {
      "age": "17",
      "height": "163cm",
      "hobbies": "Looking for delicious things",
      "birthday": "03/01/2023",
      "releaseDate": "12/28/2022",
      "japaneseName": "黒舘 ハルナ"
    },
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  }
]
```

</details>


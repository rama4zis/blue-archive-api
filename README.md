# Blue Archive API

This is a community API for Blue Archive. It is currently in development and is not ready for production use.

An always up to date version of the API is available at https://blue-archive-api.vercel.app/

# Technologies Used

Prisma, MySQL, Node.js, Express, TypeScript, Railway

# Usage

## Student API

BASE URL: `https://blue-archive-api.vercel.app/`

### Get all students

- Method: `GET`
- Endpoint: `/api/v1/student`
- Limit: 50 students per page
- To get next page, add `?page=1` to the endpoint

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
    "birthday": "January 30",
    "voiceActor": "Chikako Sugimura",
    "releaseDate": "2021/02/04",
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
    "birthday": "January 30",
    "voiceActor": "Chikako Sugimura",
    "releaseDate": "2021/02/04",
    "japaneseName": "栗村 アイリ"
  },
  "urban": "A",
  "outdoor": "D",
  "indoor": "A"
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
    "id": 32,
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
      "birthday": "March 1",
      "voiceActor": "Tadokoro Azusa",
      "releaseDate": "2022/12/28",
      "japaneseName": "黒舘 ハルナ"
    },
    "urban": "S",
    "outdoor": "D",
    "indoor": "B"
  },
  {
    "id": 33,
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
      "birthday": "March 1",
      "voiceActor": "Tadokoro Azusa",
      "releaseDate": "2021/02/04",
      "japaneseName": "黒舘 ハルナ"
    },
    "urban": "D",
    "outdoor": "S",
    "indoor": "B"
  }
]
```

</details>

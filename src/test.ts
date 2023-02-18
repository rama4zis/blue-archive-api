import fs from 'fs';

interface MyData {
  name: string;
  age: number;
}

const filename = '../data/student.json';

fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const myData: MyData = JSON.parse(data);
  console.log(myData);
});

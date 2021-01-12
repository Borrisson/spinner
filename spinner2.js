let index = 0, x = 100;
const char = ['|', '/', '-', '\\'];
while (x <= 2100) {
  let c = char[index];
  setTimeout(() => {
    process.stdout.write(`\r${c}   `);
  }, x); // the async spinning wheel
  x += 200;
  index++;
  if (index === 4) index = 0;
}
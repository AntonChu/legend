export default function healthIndicate(hero) {
  if (hero.health > 50) {
    return 'green';
  }
  if (hero.health < 15) {
    return 'red';
  }
  return 'yellow';
}

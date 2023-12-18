import { getRandomColor } from "../../modules/utils/get-random-color";

test('getRandomColor generates a valid hex color', () => {
    for (let i = 0; i < 10; i++) {
      const color = getRandomColor();
  
      expect(color).toMatch(/^#[0-9A-Fa-f]{6}$/);
    }
  });
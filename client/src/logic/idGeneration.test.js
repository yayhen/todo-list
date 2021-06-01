import { idGeneration } from "./idGeneration";


test('Id generation test', () => {
  expect(idGeneration()).toBe(Date.now());
});
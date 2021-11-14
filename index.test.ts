import { sayHello } from "./index.ts"

test('sayHello returns the correct phrase',() => {
  expect(sayHello("world")).toBe("boo")
})
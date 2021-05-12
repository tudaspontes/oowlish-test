import { calculoDeHoras } from "./utils/Util";

describe("Cálculo de horas", () => {
  test("deve trazer -10", () => {
    const resultado = calculoDeHoras({ ini: 10, fim: 5 });
    expect(resultado).toEqual(5);
  });
});

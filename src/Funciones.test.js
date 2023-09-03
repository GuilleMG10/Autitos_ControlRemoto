import { posicionInicial , VerificarFormato_Entrada , Devolver_Comandos , validar_comandos , ejecutar_Comandos} from "./Funciones";

describe("Funciones", () => {
    it("deberia Devolver a posicion Inicial", () => {
      expect(posicionInicial(5,1,'N')).toEqual([5,1,'N']);
    });
    it("deberia decir si el formato es correcto", () => {
        expect(VerificarFormato_Entrada(5,1,"N")).toEqual(true);
      });
      it("deberia devolver el comando ingresado", () => {
        expect(Devolver_Comandos("AIADAAAIAD")).toEqual("AIADAAAIAD");
      });
      it("deberia devolver si el comando es correcto", () => {
        expect(validar_comandos("AIADAAAIAD")).toEqual(true);
      });
      it(" deberia devolver si el comando NO es correcto", () => {
        expect(validar_comandos("AIASDAAAIAD")).toEqual(false);
      });
      it(" deberia mover la orientacion a la Izquierda", () => {
        expect(ejecutar_Comandos("I",5,1,"N")).toEqual([5,1,"O"]);
      });
      it(" deberia mover la orientacion a la Derecha", () => {
        expect(ejecutar_Comandos("D",5,1,"N")).toEqual([5,1,"E"]);
      });
  });
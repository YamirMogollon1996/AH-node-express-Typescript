export class Detalle_Boleta {
  lbl_nombre: string;
  lbl_detalle: string;
  lbl_construccion: string;
  lbl_puerto: string;
  constructor(
    lbl_nombre: string,
    lbl_detalle: string,
    lbl_construccion: string,
    lbl_puerto: string
  ) {
    (this.lbl_construccion = lbl_construccion),
      (this.lbl_detalle = lbl_detalle),
      (this.lbl_nombre = lbl_nombre),
      (this.lbl_puerto = lbl_puerto);
    this.ListenDetalle();
  }

  public ListenDetalle() {
    console.log("Obtner la data Detalle");
  }
}

console.log("Mogollon");

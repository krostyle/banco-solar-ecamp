class Transferencia {
    constructor(id_cuenta_origen, id_cuenta_destino, monto, fecha) {
        this.id = "";
        this.id_cuenta_origen = id_cuenta_origen;
        this.id_cuenta_destino = id_cuenta_destino;
        this.monto = monto;
        this.fecha = fecha;
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getIdCuentaOrigen() {
        return this.id_cuenta_origen;
    }

    setIdCuentaOrigen(id_cuenta_origen) {
        this.id_cuenta_origen = id_cuenta_origen;
    }

    getIdCuentaDestino() {
        return this.id_cuenta_destino;
    }

    setIdCuentaDestino(id_cuenta_destino) {
        this.id_cuenta_destino = id_cuenta_destino;
    }

    getMonto() {
        return this.monto;
    }

    setMonto(monto) {
        this.monto = monto;
    }

    getFecha() {
        return this.fecha;
    }

    setFecha(fecha) {
        this.fecha = fecha;
    }
}

export default Transferencia;
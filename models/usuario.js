class Usuario {
    constructor(nombre, balance) {
        this.id = "";
        this.nombre = nombre;
        this.balance = balance;
    }

    //GETTERS AND SETTERS
    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getBalance() {
        return this.balance;
    }

    setBalance(balance) {
        this.balance = balance;
    }

    //METODOS
    toString() {
        return "Usuario: " + this.nombre + " - Balance: " + this.balance;
    }

}

export default Usuario;
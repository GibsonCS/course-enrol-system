export default class User {
    private _name: string
    private _cpf: string
    private _email: string
    private _password: string
   
    constructor(name: string, cpf: string, email: string, password: string){
        if(name.length <= 3) {
            throw new Error('The name must be three or more characters')
        }

        this._name = name
        this._cpf = cpf
        this._email = email
        this._password = password
    }

    get name(){
        return this._name
    }
    get cpf() {
        return this._cpf
    }
    get email() {
        return this._email
    }
    get password() {
        return this._password
    }

  
}
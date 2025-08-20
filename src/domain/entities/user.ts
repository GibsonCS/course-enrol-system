export default class User {
    private _name: String
    private _cpf: String
    private _email: String
    private _password: String
   
    constructor(name: String, cpf: String, email: String, password: String){
        if(typeof name !== 'string' && name.length < 3) {
            throw new Error('The name must be three or more characters')
        }

        this._name = name
        this._cpf = cpf
        this._email = email
        this._password = password
    }

  
}
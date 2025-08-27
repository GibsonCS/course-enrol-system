import { UUID } from "node:crypto"

export default class User {
    private _id: UUID
    private _name: string
    private _cpf: string
    private _email: string
    private _password: string

    constructor({id, name, cpf, email, password}: {id: UUID, name: string, cpf: string, email: string, password:string}){
        if(name.length <= 3) throw new Error('The name must be three or more characters')
        
        this._id = id
        this._name = name
        this._cpf = cpf
        this._email = email
        this._password = password
    }

    get id() {
        return this._id
    }

    get name(){
        return this._name
    }

    set name(name: string){
        if(name.length < 3) throw new Error('The name must be three or more characters')
            
        this._name = name
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
export class AccountUser {
    private _name: string | undefined;
    private _number: string | undefined;
    private _email: string | undefined;
    private _balance: number | undefined;


    constructor(name: string | undefined, 
      number: string | undefined, 
      email: string | undefined, 
      balance: number | undefined) {
        this._name = name ;
        this._number = number;
        this._email = email;
        this._balance = balance
      }

      // Function
    getInformation(){
      return [ this._name, this._number, this._email, this._balance ]
    }

    getName() {
        return this._name
      }
    
    setName(name: string) {
        this._name = name
      }
    }

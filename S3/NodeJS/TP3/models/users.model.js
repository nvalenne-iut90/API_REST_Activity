const _user_id = Symbol('id');
const _user_email = Symbol('email');
const _user_first_name = Symbol('firstname');
const _user_last_name = Symbol('lastname');
const _user_avatar = Symbol('avatar');

export class User {
    constructor(id, email, firstname, lastname, avatar) {
        this[_user_id] = id;
        this[_user_email] = email;
        this[_user_first_name] = firstname;
        this[_user_last_name] = lastname;
        this[_user_avatar] = avatar;
    }
    // GETTERS AND SETTERS
    get id(){return this[_user_id];}
    get email(){return this[_user_email];}
    set email(email){return this[_user_email] = email;}
    get firstName(){ return this[_user_first_name]; }
    set firstName(newFirstName){ this[_user_first_name] = newFirstName; }
    get lastName(){ return this[_user_last_name]; }
    set lastName(newLastName){ this[_user_last_name] = newLastName; }
    get avatar(){ return this[_user_avatar]; }
    set avatar(newAvatar){ this[_user_avatar] = newAvatar; }

    get JSON(){
        return JSON.stringify({
            id:this.id, firstname:this.firstname,
            lastname:this.lastname,email:this.email,
            avatar:this.avatar
        })
    }
    static fromJSON(json){
        const data = JSON.parse(JSON.stringify(json));
        if (typeof data !== 'object'
            || !data.hasOwnProperty("id")
            || (typeof data.id !== 'string' && typeof data.id !== 'number')
            || !data.hasOwnProperty("first_name")
            || typeof data.first_name !== 'string'
            || !data.hasOwnProperty("last_name")
            || typeof data.last_name !== 'string'
            || !data.hasOwnProperty("email")
            || typeof data.email !== 'string'
            || !data.hasOwnProperty("avatar")
            || typeof data.avatar !== 'string'){
            throw new Error(`Not a User: ${json}`);
        }
        const user = new User(data.id, data.email, data.first_name, data.last_name, data.avatar);
        return user;
    }
}


export class AbstractUser {
    async list(callback) {

    }
}




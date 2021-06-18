import "./css/style.scss";

class User{
    id:string;
    name:string;;
    
    constructor(user:any) {
        this.id = user.id;
        this.name = user.name;
    }
}

const user1 = new User({id:'1', name:'Jack'});
console.log(user1);

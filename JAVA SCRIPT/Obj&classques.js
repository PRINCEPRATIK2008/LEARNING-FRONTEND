// question 1 :

let Data = "secret information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("data= ",DATA);
    }
}

class Admin extends user {
    constructor(name, email) {
        super(name, email)
    }
    editData() {
        DATA = "some new value";
    }
}

let student1 = new user("prince", "hellogiamprince@lolo.com");
let student2 = new user("arjun", "hellogiamarjun@lolo.com");

let admin1 = new Admin("Admin", "adminhume@lolo.com");

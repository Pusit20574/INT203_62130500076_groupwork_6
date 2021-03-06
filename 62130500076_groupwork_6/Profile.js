const constraints = {
    firstname: {
        presence: true,
        format:{pattern: "[a-zA-Z'-,]+", message:"input text only"}
    },
    lastname: {
        presence: true,
        format:{pattern: "[a-zA-Z'-,]+", message:"input text only"}
    },
    age: {
        presence: true,
        numericality: {
            onlyInteger: true,
            lessThan: 150,
            greaterThan: 0
        }
    },
    gender: {
        presence: true,
    },
    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum: 10,
            maximum: 10,
            message: "number must be 10 digits"
        },        
        numericality: {
            onlyInteger: true,
        }
    },
    faculty: {
        presence: {allowEmpty: false},
        format:{pattern: "[a-zA-Z'.+/]+", message:"input text only"}
    }
}

const app = {
    data() {
        return {
            name: 'Pusit Assawateerakeat',
            position: 'SIT Student',
            img: './images/phu.png',
            article: 82,
            followers: '9 M',
            rating: 10,
            facebook: 'https://www.facebook.com/Pusit.44/',
            ig: 'https://www.instagram.com/phu_pusit/',
            firstname: null,
            lastname: null,
            gender: null,
            age: null,
            email: null,
            phone: null,
            faculty: null,
            errors: null,
            
        }
    },
    methods: {
        checkForm(e){
            this.errors = validate({firstname: this.firstname,
                                    lastname: this.lastname,
                                    age: this.age,
                                    gender: this.gender,
                                    email: this.email,
                                    phone: this.phone,
                                    faculty: this.faculty},
                                    constraints)

            if(this.errors){
                e.preventDefault();
            }else if(!this.errors){
                alert("Registered successfully.")
            }
        }
    }
}

Vue.createApp(app).mount('#app')

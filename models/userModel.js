import { Schema } from "mongoose";


const userModel = Schema({
    name: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true,
        },
        middleName: {
            type: String,
            required: true
        }
    },
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    address: {
        city: {
            type: String,
            required: true
        },
        street: {
            type: String,
            required: true
        },
        number: {
            type: Number,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        zipCode: {
            type: Number,
            required: true
        },
        country: {
            type: String,
            required: true
        }
    },
    website: {
        type: String,
        required: true
    },
    company: {
        name: {
            type: String,
            required: true
        },
        catchPhrase: {
            type: String,
            required: true
        },
        bs: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }

    },
    picture: {
        type: String,
        required: true
    }
})


export const User = mongoose.model("User", userModel)
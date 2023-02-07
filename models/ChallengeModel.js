const mongoose = require('mongoose');
// schema design
const productSchema = mongoose.Schema({
    challengeName: {
        type: String,
        required: [true, "Please provide a name for this challenge."],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 characters."],
        maxLenght: [100, "Name is too large"],
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        rquired: true,
        min: [0, "Price can't be negative"],
    },
    image: {
        type: Image,
        required: true
    },
    levelType: {
        type: String,
        required: true,
        enum: {
            values: ["Easy", "Medium", "Hard"],
            message: "level can't be {VALUE}"
        }
    },

}, {
    timestamps: true,
})



// mongoose middlewares for saving data: pre / post 

productSchema.pre('save', function (next) {

    //this -> 
    console.log(' Before saving data');
    if (this.quantity == 0) {
        this.status = 'out-of-stock'
    }

    next()
})


//  productSchema.post('save',function(doc,next){
//   console.log('After saving data');

//   next()
// })

productSchema.methods.logger = function () {
    console.log(` Data saved for ${this.name}`);
}


// SCHEMA -> MODEL -> QUERY

const Product = mongoose.model('Product', productSchema)

module.exports = Product;
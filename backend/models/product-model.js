const mongoose =  require("mongoose");

const productSchema = mongoose.Schema({
    image: {
        data: Buffer,
        contentType: String,
    },
    name: String,
    price: Number,
    discount: {
        type: Number,
        default: 0
    },
    bgcolor: String,
    panelcolor: String,
    textcolor: String
})

productSchema.index({ name: 1 });

module.exports = mongoose.model("product", productSchema)
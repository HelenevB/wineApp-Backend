
const {FavouriteWine} = require("../models/FavouriteWine");
const {Wine} = require("../models/Wine");

exports.wine_create_post = async (req, res) => {
    try {
    let wine = new Wine(req.body);

    await wine.save()
    const favouriteWine = await FavouriteWine.findById({_id:wine.favouriteWine})
    favouriteWine.wine.push(wine)
    await favouriteWine.save();
    console.log(favouriteWine + "Line13 functioning")
    res.status(200).json({success: true, wine})
    }
    catch(err) {
        console.log(err);
        res.send("please try adding a wine later");
    }
}


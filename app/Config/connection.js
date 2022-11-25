require('dotenv').config();
const connectionString = process.env.ATLAS_URI;

module.exports = {
    //  url:"mongodb+srv://Nair:WgM_nReG.Bg_3BD@cluster0.fqyitsx.mongodb.net/sample_guides?retryWrites=true&w=majority",
     url: connectionString,
}
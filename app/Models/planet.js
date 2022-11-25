module.exports = mongoose => {
    const Planet = mongoose.models.planet || mongoose.model("planet", mongoose.Schema(
        {
            name: String,
            orderFromSun: String,
            hasRings: Boolean,
            mainAtmosphere: [],
            surfaceTemperatureC: {
                min: String,
                max: String,
                mean: String,
            }
        },
        {timestamps:true}
    )); 

    return Planet;
}

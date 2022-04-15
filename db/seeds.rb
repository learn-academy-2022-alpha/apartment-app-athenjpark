# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
apartments = [
  {
    street:"123 Street",
    city:"San Diego",
    state:"California",
    manager:"Athen",
    email:"whatever@gmail.com",
    price:"$1,000,000",
    bedrooms: 2,
    bathrooms: 2,
    pets:"cats",
    image:"https://images1.apartments.com/i2/rWy2qNFnw9icmGCWjxG1sQyb0SrXk-aDcw_9KWsYdV0/117/rowan-escondido-ca-building-photo.jpg"
  },
  {
    street:"456 Street",
    city:"San Diego",
    state:"California",
    manager:"Austin",
    email:"whatever@yahoo.com",
    price:"$5,000,000",
    bedrooms: 20,
    bathrooms: 25,
    pets:"Sheldon",
    image:"https://images1.apartments.com/i2/U1O7Mz2PYl4VjdxFryQUvPjjZM3AD39akel7VwQoY_4/117/latitude33-escondido-ca-building-photo.jpg"
  }
]
user = User.create(
  email:"testing@test.com",
  password:"helloworld",
  password_confirmation:"helloworld"
)
apartments.each do |value|
  user.apartments.create value
end

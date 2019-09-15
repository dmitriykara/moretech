db.createUser({
    user:"moretech",
    roles: [
        {
          "role":"root",
          "db":"admin"
        }
    ]
});

db.Users.insert({
  department: "R&D",
  login: "Skalny",
  name: "Pavel :)",
})
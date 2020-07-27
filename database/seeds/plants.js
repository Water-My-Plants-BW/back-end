exports.seed = function (knex) {
  return knex("plants")
    .del()
    .then(function () {
      return knex("plants").insert([
        {
          nickname: "Planty",
          species: "Yellow",
          h2oFrequency: 20,
          image: "Coming Soon1",
          user_id: 1,
        },
        {
          nickname: "Mr Slim",
          species: "Blue",
          h2oFrequency: 10,
          image: "Coming Soon2",
          user_id: 1,
        },
        ,
      ]);
    });
};

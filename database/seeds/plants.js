exports.seed = function (knex) {
  return knex("plants")
    .del()
    .then(function () {
      return knex("plants").insert([
        {
          nickname: "Planty1",
          species: "Yellow",
          h2oFrequency: 20,

          user_id: 1,
        },
        {
          nickname: "Mr Slim",
          species: "Blue",
          h2oFrequency: 10,

          user_id: 1,
        },
        {
          nickname: "Planty2",
          species: "Yellow",
          h2oFrequency: 20,

          user_id: 2,
        },
        {
          nickname: "Mr Slim3",
          species: "Blue",
          h2oFrequency: 10,

          user_id: 3,
        },

        {
          nickname: "Planty4",
          species: "Yellow",
          h2oFrequency: 20,

          user_id: 4,
        },
        {
          nickname: "Mr Slim5",
          species: "Blue",
          h2oFrequency: 10,

          user_id: 5,
        },
      ]);
    });
};

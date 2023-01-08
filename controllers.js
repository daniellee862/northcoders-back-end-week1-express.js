const {
  readOwnerById,
  readAllOwners,
  readPetsByOwner,
  readPetsByTemperament,
  readPetsById,
} = require("./models");

const fetchOwnerById = (req, res) => {
  const ownerId = req.params;

  readOwnerById(ownerId).then((ownerObj) => {
    res.status(200).send({ owner: ownerObj });
  });
};

const fetchAllOwners = (req, res) => {
  readAllOwners().then((allOwners) => {
    res.status(200).send(allOwners);
  });
};

const fetchPetsByOwner = (req, res) => {
  const ownerId = req.params.id;

  readPetsByOwner(ownerId).then((allOwnersPets) => {
    res.status(200).send(allOwnersPets);
  });
};

const fetchPetsByQuery = (req, res) => {
  const tempQuery = req.query.temperament;
  readPetsByTemperament(tempQuery).then((filteredTempPets) => {
    res.status(200).send(filteredTempPets);
  });
};

// Build the following endpoint:
// GET /pets/:id
// Considerations:
// responds with the data of the relevant pet

const fetchPetsById = (req, res) => {
  const petId = req.params.id;

  readPetsById(petId).then((parsedPet) => {
    res.status(200).send(parsedPet);
  });
};

module.exports = {
  fetchOwnerById,
  fetchAllOwners,
  fetchPetsByOwner,
  fetchPetsByQuery,
  fetchPetsById,
};

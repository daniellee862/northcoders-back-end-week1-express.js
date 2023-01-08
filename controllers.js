const {
  readOwnerById,
  readAllOwners,
  readPetsByOwner,
  readPetsByTemperament,
  readPetsById,
  readAndModifyOwnerById,
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

const fetchPetsById = (req, res) => {
  const petId = req.params.id;

  readPetsById(petId).then((parsedPet) => {
    res.status(200).send(parsedPet);
  });
};

const updateOwnerById = (req, res) => {
  const updatedData = req.body;
  const ownerId = req.params.id;
  readAndModifyOwnerById(updatedData, ownerId).then((updatedOwner) => {
    res.status(200).send(updatedOwner);
    console.log(`owner${ownerId} has been updated....`);
  });

  //Body.
  /*  {
    "name": "Daniel Clough",
    "age": "36"
  } */
};

module.exports = {
  fetchOwnerById,
  fetchAllOwners,
  fetchPetsByOwner,
  fetchPetsByQuery,
  fetchPetsById,
  updateOwnerById,
};

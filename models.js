const fs = require("fs/promises");

const readOwnerById = (ownerId) => {
  return fs
    .readFile(`./data/owners/o${ownerId.id}.json`, "UTF8")
    .then((owner) => {
      const ownerObj = JSON.parse(owner);
      return ownerObj;
    });
};

const readAllOwners = () => {
  return fs
    .readdir("./data/owners", "UTF8")
    .then((allOwnerFiles) => {
      const arrayOfPromises = allOwnerFiles.map((ownerFile) => {
        return fs.readFile(`./data/owners/${ownerFile}`, "UTF8");
      });
      return Promise.all(arrayOfPromises);
    })
    .then((stringifiedOwners) => {
      const parsedOwners = stringifiedOwners.map((stringifiedOwner) => {
        return JSON.parse(stringifiedOwner);
      });
      return parsedOwners;
    });
};

const readPetsByOwner = (ownerId) => {
  return fs
    .readdir("./data/pets", "UTF8")
    .then((petFiles) => {
      const arrayOfPromises = petFiles.map((pet) => {
        return fs.readFile(`./data/pets/${pet}`, "utf8");
      });
      return Promise.all(arrayOfPromises);
    })
    .then((stringifiedPets) => {
      const parsedPets = stringifiedPets.map((pet) => {
        return JSON.parse(pet);
      });
      return parsedPets;
    })
    .then((parsedPets) => {
      const ownersPets = parsedPets.filter((pet) => {
        return ownerId === pet.owner;
      });

      return ownersPets;
    });
};

const readPetsByTemperament = (tempQuery) => {
  return fs
    .readdir("./data/pets", "UTF8")
    .then((petFiles) => {
      const arrayOfPromises = petFiles.map((pet) => {
        return fs.readFile(`./data/pets/${pet}`, "utf8");
      });
      return Promise.all(arrayOfPromises);
    })
    .then((stringifiedPets) => {
      const parsedPets = stringifiedPets.map((pet) => {
        return JSON.parse(pet);
      });
      return parsedPets;
    })
    .then((pets) => {
      const filteredTempPets = pets.filter((pet) => {
        return tempQuery === pet.temperament;
      });

      return filteredTempPets;
    });
};

const readPetsById = (petId) => {
  return fs.readFile(`./data/pets/p${petId}.json`, "utf8").then((pet) => {
    const parsedPet = JSON.parse(pet);
    return parsedPet;
  });
};

const readAndModifyOwnerById = (updatedOwnerFields, ownerId) => {
  return fs
    .readFile(`./data/owners/o${ownerId}.json`, "UTF8")
    .then((owner) => {
      const ownerObj = JSON.parse(owner);
      return ownerObj;
    })
    .then((ownerObj) => {
      const { name, age } = updatedOwnerFields;
      ownerObj.name = name;
      ownerObj.age = age;

      fs.writeFile(
        `./data/owners/o${ownerId}.json`,
        JSON.stringify(ownerObj),
        "utf8"
      );

      return ownerObj;
    });
};

module.exports = {
  readOwnerById,
  readAllOwners,
  readPetsByOwner,
  readPetsByTemperament,
  readPetsById,
  readAndModifyOwnerById,
};

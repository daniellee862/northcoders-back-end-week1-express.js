const express = require("express");
const {
  fetchOwnerById,
  fetchAllOwners,
  fetchPetsByOwner,
  fetchPetsByQuery,
  fetchPetsById,
  updateOwnerById,
} = require("./controllers");

const app = express();
app.use(express.json());

app.get("/api/owners/:id", fetchOwnerById);

app.get("/api/owners", fetchAllOwners);

app.get("/api/owners/:id/pets", fetchPetsByOwner);

app.get("/api/pets", fetchPetsByQuery);

app.get("/api/pets/:id", fetchPetsById);

app.patch("/api/owners/update/:id", updateOwnerById);

module.exports = { app };

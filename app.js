const express = require("express");
const {
  fetchOwnerById,
  fetchAllOwners,
  fetchPetsByOwner,
  fetchPetsByQuery,
  fetchPetsById,
} = require("./controllers");

const app = express();

app.get("/api/owners/:id", fetchOwnerById);

app.get("/api/owners", fetchAllOwners);

app.get("/api/owners/:id/pets", fetchPetsByOwner);

app.get("/api/pets", fetchPetsByQuery);

app.get("/api/pets/:id", fetchPetsById);

module.exports = { app };

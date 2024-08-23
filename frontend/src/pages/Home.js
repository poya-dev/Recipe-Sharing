// src/pages/Home.js
import React from 'react';
import { Typography } from '@mui/material';
import RecipeList from '../components/RecipeList';

import { RECIPE_LIST } from '../dummy';

const Home = () => {
  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        All Recipes
      </Typography>
      <RecipeList recipes={RECIPE_LIST} />
    </>
  );
};

export default Home;

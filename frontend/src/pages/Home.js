import React, { useEffect } from 'react';
import { Typography } from '@mui/material';

import RecipeList from '../components/RecipeList';
import useRecipeStore from '../store/recipeStore';

const Home = () => {
  const { recipes, loading, error, fetchAllRecipes } = useRecipeStore();

  useEffect(() => {
    fetchAllRecipes();
  }, [fetchAllRecipes]);

  if (loading) return <Typography>Loading recipes...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <>
      <Typography variant="h4" component="h1" gutterBottom>
        All Recipes
      </Typography>
      <RecipeList recipes={recipes} />
    </>
  );
};

export default Home;

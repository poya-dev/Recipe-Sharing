import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Avatar,
  Button,
  Box,
} from '@mui/material';

const RecipeList = ({ recipes }) => {
  return (
    <Grid container spacing={3}>
      {recipes.map((recipe) => (
        <Grid item xs={12} sm={6} md={4} key={recipe.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={recipe.image}
              alt={recipe.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {recipe.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                {recipe.description}
              </Typography>
              <Box display="flex" alignItems="center" mb={2}>
                <Avatar
                  src={recipe.user.profile_picture}
                  alt={recipe.user.username}
                  sx={{ width: 24, height: 24, mr: 1 }}
                />
                <Typography variant="body2">{recipe.user.username}</Typography>
              </Box>
              <Typography variant="caption" color="text.secondary">
                Created: {recipe.created_at}
              </Typography>
              <Box mt={2}>
                <Button
                  component={RouterLink}
                  to={`/recipe/${recipe.id}`}
                  variant="contained"
                  color="primary"
                >
                  View Recipe
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RecipeList;

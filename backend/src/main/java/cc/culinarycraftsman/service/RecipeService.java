package cc.culinarycraftsman.service;

import cc.culinarycraftsman.dto.IngredientDTO;
import cc.culinarycraftsman.model.recipes.Recipe;
import cc.culinarycraftsman.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;
    private final RecipeRecommendService recipeRecommendService;

    public RecipeService(RecipeRepository recipeRepository, RecipeRecommendService recipeRecommendService) {
        this.recipeRepository = recipeRepository;
        this.recipeRecommendService = recipeRecommendService;
    }

    public List<Recipe> recommendRecipes(List<IngredientDTO> selectedIngredients) {
        List<Recipe> allRecipes = recipeRepository.findAll();
        return recipeRecommendService.recommendRecipes(selectedIngredients, allRecipes, 9);
    }

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }
    public Optional<Recipe> getRecipeById(Long id) {
        return recipeRepository.findById(id);
    }

    public Iterable<Recipe> getRecipesByIds(Iterable<Long> ids) {
        return recipeRepository.findAllById(ids);
    }
}


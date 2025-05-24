package cc.culinarycraftsman.service;

import cc.culinarycraftsman.model.recipes.Recipe;
import cc.culinarycraftsman.repository.RecipeRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {

    private final RecipeRepository recipeRepository;

    public RecipeService(RecipeRepository recipeRepository) {
        this.recipeRepository = recipeRepository;
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


package cc.culinarycraftsman.service;

import cc.culinarycraftsman.dto.IngredientDTO;
import cc.culinarycraftsman.model.ingredients.Ingredient;
import cc.culinarycraftsman.model.recipes.Ingredients;
import cc.culinarycraftsman.model.recipes.Recipe;
import org.springframework.stereotype.Service;

import java.util.AbstractMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class RecipeRecommendService {

    public List<Recipe> recommendRecipes(List<IngredientDTO> selectedIngredients, List<Recipe> allRecipes, int numRecipes) {

        Set<String> selectedSet = selectedIngredients.stream()
                .map(IngredientDTO::getName)
                .map(String::toLowerCase)
                .collect(Collectors.toSet());

        return allRecipes.stream()
                .map(recipe -> {
                    Set<String> recipeIngredients = recipe.getIngredients().stream()
                            .map(Ingredients::getName)
                            .map(String::toLowerCase)
                            .collect(Collectors.toSet());
                    // Count intersection size
                    long matches = recipeIngredients.stream()
                            .filter(selectedSet::contains)
                            .count();
                    // Create a Pair of recipe and match count for sorting
                    return new AbstractMap.SimpleEntry<>(recipe, matches);
                })
                .sorted((e1, e2) -> Long.compare(e2.getValue(), e1.getValue()))
                .limit(numRecipes)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());
    }
}

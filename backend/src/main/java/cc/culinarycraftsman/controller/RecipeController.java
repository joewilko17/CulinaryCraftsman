package cc.culinarycraftsman.controller;


import cc.culinarycraftsman.model.recipes.Recipe;
import cc.culinarycraftsman.service.RecipeService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/recipes/")
@CrossOrigin(origins = "http://localhost:3000")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public ResponseEntity<List<Recipe>> getAllRecipes() {
        List<Recipe> recipes = recipeService.getAllRecipes();
        return ResponseEntity.ok(recipes);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Recipe>> getRecipeById(@PathVariable  Long id) {
        Optional<Recipe> recipe = recipeService.getRecipeById(id);
        return ResponseEntity.ok(recipe);
    }

    @GetMapping("/list/{ids}")
    public ResponseEntity<List<Recipe>> getRecipesByIds(@PathVariable List<Long> ids) {
        List<Recipe> recipes = (List<Recipe>) recipeService.getRecipesByIds(ids);
        return ResponseEntity.ok(recipes);
    }
}

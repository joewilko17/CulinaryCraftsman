package cc.culinarycraftsman.repository;

import cc.culinarycraftsman.model.recipes.Recipe;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RecipeRepository extends JpaRepository<Recipe, Long> {}

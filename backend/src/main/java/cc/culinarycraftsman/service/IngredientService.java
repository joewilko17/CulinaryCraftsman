package cc.culinarycraftsman.service;

import cc.culinarycraftsman.model.Ingredient;
import cc.culinarycraftsman.repository.IngredientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IngredientService {
    private final IngredientRepository ingredientRepository;

    @Autowired
    public IngredientService(IngredientRepository ingredientRepository) {
        this.ingredientRepository = ingredientRepository;
    }

    public List<Ingredient> getIngredientsByCategory(String category) {
        return ingredientRepository.findByCategoryIgnoreCase(category);
    }

    public List<Ingredient> getAllIngredients() {
        return ingredientRepository.findAll();
    }
}

package cc.culinarycraftsman.model.recipes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Entity
@Table(name = "Recipes", schema = "recipes_schema")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Recipe {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recipe_id")
    private long id;

    @Column(name = "name")
    private String name;

    @Column(name = "time_to_make")
    private String timeToMake;

    @ManyToMany
    @JoinTable(
            name = "recipe_ingredients",
            schema = "recipes_schema",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "ingredient_id")
    )
    private List<Ingredients> ingredients;

    @ManyToMany
    @JoinTable(
            name = "recipe_instructions",
            schema = "recipes_schema",
            joinColumns = @JoinColumn(name = "recipe_id"),
            inverseJoinColumns = @JoinColumn(name = "instruction_id")
    )
    @OrderBy("step_number ASC")
    private List<Instructions> instructions;
}

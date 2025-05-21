package cc.culinarycraftsman.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "Ingredients")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Ingredient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String category;


}

package cc.culinarycraftsman.model.recipes;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Instructions", schema = "recipes_schema")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Instructions {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "instruction_id")
    private long id;

    @Column(name = "instruction", length = 1000)
    private String instruction;

    @Column(name = "step_number")
    private int stepNumber;
}

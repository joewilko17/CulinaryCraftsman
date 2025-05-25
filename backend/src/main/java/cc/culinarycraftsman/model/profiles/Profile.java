package cc.culinarycraftsman.model.profiles;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "profiles", schema = "profiles_schema")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "profile_id")
    private long id;

    @Column(name = "username", nullable = false, unique = true)
    private String username;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "profile_image")
    private String profileImage;

    @Column(name = "favourite_recipes", columnDefinition = "integer[]")
    private Integer[] favouriteRecipes;

    @Column(columnDefinition = "text[]")
    private String[] allergies;

    @Column(columnDefinition = "text[]")
    private String[] preferences;
}

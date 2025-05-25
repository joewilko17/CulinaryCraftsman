package cc.culinarycraftsman.controller;

import cc.culinarycraftsman.dto.ProfileDetailsRequest;
import cc.culinarycraftsman.model.profiles.Profile;
import cc.culinarycraftsman.service.ProfileService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/profiles/")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileController {

    private final ProfileService profileService;

    public ProfileController(ProfileService profileService) {
        this.profileService = profileService;
    }

    @GetMapping
    public ResponseEntity<List<Profile>> getAllProfiles() {
        List<Profile> profiles = profileService.getAllProfiles();
        return ResponseEntity.ok(profiles);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Profile>> getProfileById(@PathVariable Long id) {
        Optional<Profile> profile = profileService.getProfileById(id);
        return ResponseEntity.ok(profile);
    }


    @PostMapping
    public void createProfile(@RequestBody Profile profile) {
        profileService.createProfile(profile);
    }

    @PatchMapping("/{id}/details")
    public void updateProfileDetails(@PathVariable Long id, @RequestBody ProfileDetailsRequest request) {
        profileService.updateProfileDetails(id, request.getUsername(), request.getPassword(), request.getProfileImage());
    }

    @PatchMapping("/{id}/favourites")
    public void updateProfileFavourites(@PathVariable Long id, @RequestBody Integer[] favouriteRecipes) {
        profileService.updateProfileFavourites(id, favouriteRecipes);
    }

    @PatchMapping("/{id}/allergies")
    public void updateProfileAllergies(@PathVariable Long id, @RequestBody String[] allergies) {
        profileService.updateProfileAllergies(id, allergies);
    }

    @PatchMapping("/{id}/preferences")
    public void updateProfilePreferences(@PathVariable Long id, @RequestBody String[] preferences) {
        profileService.updateProfilePreferences(id, preferences);
    }

    @DeleteMapping("/{id}")
    public void deleteProfile(@PathVariable Long id) {
        profileService.deleteProfile(id);
    }

}

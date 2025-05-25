package cc.culinarycraftsman.service;

import cc.culinarycraftsman.model.profiles.Profile;
import java.util.List;
import java.util.Optional;

public interface ProfileDao {
    List<Profile> getAllProfiles();
    Optional<Profile> getProfileById(Long id);
    Optional<Profile> getProfileByUsername(String username);
    void saveProfile(Profile profile);
    void deleteProfile(Long id);
    boolean existsById(Long id);
}

package cc.culinarycraftsman.service;

import cc.culinarycraftsman.model.profiles.Profile;
import cc.culinarycraftsman.repository.ProfileRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.parameters.P;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class ProfileService {

    private final ProfileDao profileDao;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public ProfileService(ProfileDao profileDao, PasswordEncoder passwordEncoder) {
        this.profileDao = profileDao;
        this.passwordEncoder = passwordEncoder;
    }

    public List<Profile> getAllProfiles() {
        return profileDao.getAllProfiles();
    }

    public Optional<Profile> getProfileById(Long id) {
        return profileDao.getProfileById(id);
    }

    public Optional<Profile> getProfileByUsername(String username) {
        return profileDao.getProfileByUsername(username);
    }

    public void createProfile(Profile profile) {
        if (profileDao.getProfileByUsername(profile.getUsername()).isPresent()) {
            throw new IllegalStateException("username is already taken");
        }

        profile.setPassword(passwordEncoder.encode(profile.getPassword()));
        profileDao.saveProfile(profile);
    }

    @Transactional
    public void updateProfileDetails(Long id, String username, String password, String profileImage) {
        Profile profile = profileDao.getProfileById(id)
                .orElseThrow(() -> new IllegalStateException("profile with id " + id + " does not exist"));

        if (username != null && !username.isEmpty() && !Objects.equals(profile.getUsername(), username)) {
            profile.setUsername(username);
        }

        if (password != null && !password.isEmpty()) {
            profile.setPassword(passwordEncoder.encode(password));
        }

        if (profileImage != null && !profileImage.isEmpty() && !Objects.equals(profile.getProfileImage(), profileImage)) {
            profile.setProfileImage(profileImage);
        }

        profileDao.saveProfile(profile);
    }

    @Transactional
    public void updateProfileFavourites(Long id, Integer[] favouriteRecipes) {
        Profile profile = profileDao.getProfileById(id)
                .orElseThrow(() -> new IllegalStateException("profile with id " + id + " does not exist"));

        if (favouriteRecipes != null && !Arrays.equals(profile.getFavouriteRecipes(), favouriteRecipes)) {
            profile.setFavouriteRecipes(favouriteRecipes);
            profileDao.saveProfile(profile);
        }
    }

    @Transactional
    public void updateProfileAllergies(Long id, String[] allergies) {
        Profile profile = profileDao.getProfileById(id)
                .orElseThrow(() -> new IllegalStateException("profile with id " + id + " does not exist"));

        if (allergies != null && !Arrays.equals(profile.getAllergies(), allergies)) {
            profile.setAllergies(allergies);
            profileDao.saveProfile(profile);
        }
    }

    @Transactional
    public void updateProfilePreferences(Long id, String[] preferences) {
        Profile profile = profileDao.getProfileById(id)
                .orElseThrow(() -> new IllegalStateException("profile with id " + id + " does not exist"));

        if (preferences != null && !Arrays.equals(profile.getPreferences(), preferences)) {
            profile.setPreferences(preferences);
            profileDao.saveProfile(profile);
        }
    }

    public void deleteProfile(Long id) {
        if (!profileDao.existsById(id)) {
            throw new IllegalStateException("profile with id " + id + " does not exist");
        }
        profileDao.deleteProfile(id);
    }
}



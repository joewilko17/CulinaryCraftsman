package cc.culinarycraftsman.service;

import cc.culinarycraftsman.model.profiles.Profile;
import cc.culinarycraftsman.repository.ProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@Qualifier("jpa")
public class ProfileDaoService implements ProfileDao {

    private final ProfileRepository profileRepository;

    @Autowired
    public ProfileDaoService(ProfileRepository profileRepository) {
        this.profileRepository = profileRepository;
    }

    @Override
    public List<Profile> getAllProfiles() {
        return profileRepository.findAll();
    }

    @Override
    public Optional<Profile> getProfileById(Long id) {
        return profileRepository.findById(id);
    }

    @Override
    public Optional<Profile> getProfileByUsername(String username) {
        return profileRepository.findProfileByUsername(username);
    }

    @Override
    public void saveProfile(Profile profile) {
        profileRepository.save(profile);
    }

    @Override
    public void deleteProfile(Long id) {
        profileRepository.deleteById(id);
    }

    @Override
    public boolean existsById(Long id) {
        return profileRepository.existsById(id);
    }
}

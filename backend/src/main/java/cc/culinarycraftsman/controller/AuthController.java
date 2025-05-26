package cc.culinarycraftsman.controller;

import cc.culinarycraftsman.jwt.JWTUtil;
import cc.culinarycraftsman.model.profiles.Profile;
import cc.culinarycraftsman.repository.ProfileRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final ProfileRepository profileRepository;
    private final PasswordEncoder passwordEncoder;
    private final JWTUtil jwtUtil;

    public AuthController(ProfileRepository profileRepository, PasswordEncoder passwordEncoder, JWTUtil jwtUtil) {
        this.profileRepository = profileRepository;
        this.passwordEncoder = passwordEncoder;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody Profile profile) {
        if (profileRepository.findProfileByUsername(profile.getUsername()).isPresent()) {
            return ResponseEntity.badRequest().body("Username already taken");
        }

        profile.setPassword(passwordEncoder.encode(profile.getPassword()));
        profileRepository.save(profile);
        return ResponseEntity.ok("Profile registered");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Profile loginRequest) {
        Optional<Profile> optionalProfile = profileRepository.findProfileByUsername(loginRequest.getUsername());

        if (optionalProfile.isEmpty() ||
        !passwordEncoder.matches(loginRequest.getPassword(), optionalProfile.get().getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("invalid credentials");
        }

        String token = jwtUtil.issueToken(loginRequest.getUsername());
        return ResponseEntity.ok(Map.of("token", token));
    }
}

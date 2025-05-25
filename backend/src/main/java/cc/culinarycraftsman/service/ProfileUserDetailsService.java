package cc.culinarycraftsman.service;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class ProfileUserDetailsService implements UserDetailsService {

    private final ProfileDao profileDao;

    public ProfileUserDetailsService(@Qualifier("jpa") ProfileDao profileDao) {
        this.profileDao = profileDao;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return (UserDetails) profileDao.getProfileByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException("username " + username + " not found"));

    }


}

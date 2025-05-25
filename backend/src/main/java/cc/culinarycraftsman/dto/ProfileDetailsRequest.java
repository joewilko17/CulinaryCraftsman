package cc.culinarycraftsman.dto;

import lombok.Data;

@Data
public class ProfileDetailsRequest {

    private String username;
    private String password;
    private String profileImage;
}

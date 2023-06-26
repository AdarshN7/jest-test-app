import UserProfile from "@/components/userProfiles";
import { render, screen } from "@testing-library/react";

describe("UserProfile - Rendering", () => {
  it("should have text Email Verified when isEmailVerified is true", () => {
    render(
      <UserProfile
        displayName={"Adarsh"}
        username={"dev.adarsh"}
        email={"adarsh@dev.com"}
        isEmailVerified={true}
      />
    );
    expect(screen.getByText("Email Verified")).toBeInTheDocument();
  });

  it("should have text Email Not Verified when isEmailVerified is false", () => {
    render(
      <UserProfile
        displayName={"Adarsh"}
        username={"dev.adarsh"}
        email={"adarsh@dev.com"}
        isEmailVerified={false}
      />
    );
    expect(screen.queryByText("Email Verified")).not.toBeInTheDocument();
    expect(screen.getByText("Email Not Verified")).toBeInTheDocument();

  });

  it("sshould have display name end with three dots when length is greater than 30 characters", () => {
    render(
      <UserProfile
        displayName={"Adarshnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn"}
        username={"dev.adarsh"}
        email={"adarsh@dev.com"}
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).toHaveTextContent(/.*\.\.\./);

  });

  
  it("sshould NOT have display name end with three dots when length is greater than 30 characters", () => {
    render(
      <UserProfile
        displayName={"Adarshn"}
        username={"dev.adarsh"}
        email={"adarsh@dev.com"}
        isEmailVerified={false}
      />
    );
    const displayNameSpanElement = screen.getByText(/Display Name: /);
    expect(displayNameSpanElement).not.toHaveTextContent(/.*\.\.\./);

  });

});

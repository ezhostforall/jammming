import React from "react";

const Profile = ({ userProfile }) => {
    return (
        <div className="profile">
            <section id="profile">
                <h2>Logged in as <span id="displayName">{userProfile.display_name}</span></h2>
                <span id="avatar"><img src={userProfile.images[0].url} alt="Avatar" /></span>
                <ul>
                    <li>User ID: <span id="id">{userProfile.id}</span></li>
                    <li>Email: <span id="email">{userProfile.email}</span></li>
                    <li>Spotify URI: <a id="uri" href={userProfile.uri}>{userProfile.uri}</a></li>
                    <li>Link: <a id="url" href={userProfile.external_urls.spotify}>{userProfile.external_urls.spotify}</a></li>
                    <li>Profile Image: <span id="imgUrl"><img src={userProfile.images[0].url} alt="Profile" /></span></li>
                </ul>
            </section>
        </div>
    );
}

export default Profile;
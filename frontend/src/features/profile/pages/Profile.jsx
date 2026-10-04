import React from "react";
import "../style/Profile.css";

const posts = [
  "https://picsum.photos/600/600?random=11",
  "https://picsum.photos/600/600?random=12",
  "https://picsum.photos/600/600?random=13",
  "https://picsum.photos/600/600?random=14",
  "https://picsum.photos/600/600?random=15",
  "https://picsum.photos/600/600?random=16",
  "https://picsum.photos/600/600?random=17",
  "https://picsum.photos/600/600?random=18",
  "https://picsum.photos/600/600?random=19",
];

const Profile = () => {
  return (
    <main className="profile-page">

      {/* TOP PROFILE */}
      <section className="profile-header">

        <div className="profile-photo">
          <img
            src="https://i.pravatar.cc/300?img=12"
            alt="profile"
          />
        </div>

        <div className="profile-content">

          <div className="profile-name-row">
            <h2>rahul_kumar</h2>

            <div className="desktop-buttons">
              <button>Edit profile</button>
              <button>View archive</button>
              <button className="settings">⚙</button>
            </div>
          </div>

          {/* DESKTOP STATS */}
          <div className="desktop-stats">
            <span><b>24</b> posts</span>
            <span><b>1,240</b> followers</span>
            <span><b>350</b> following</span>
          </div>

          <div className="bio">
            <strong>Rahul Kumar</strong>
            <p>Full Stack Developer 💻</p>
            <p>MERN Stack | React | Node.js</p>
            <p>Building the future 🚀</p>
          </div>

        </div>
      </section>

      {/* MOBILE STATS */}
      <section className="mobile-stats">
        <div>
          <b>24</b>
          <span>Posts</span>
        </div>

        <div>
          <b>1,240</b>
          <span>Followers</span>
        </div>

        <div>
          <b>350</b>
          <span>Following</span>
        </div>
      </section>

      {/* MOBILE ACTIONS */}
      <div className="mobile-actions">
        <button>Edit profile</button>
        <button>Share profile</button>
        <button>⚙</button>
      </div>

      {/* HIGHLIGHTS */}
      <section className="highlights">

        {[
          ["💻", "Work"],
          ["🚀", "Projects"],
          ["📸", "Photos"],
          ["❤️", "Life"],
          ["🎮", "Games"],
        ].map(([icon, title]) => (
          <div className="highlight" key={title}>
            <div className="highlight-circle">{icon}</div>
            <span>{title}</span>
          </div>
        ))}

      </section>

      {/* TABS */}
      <nav className="profile-tabs">
        <button className="active">
          <span>▦</span>
          <label>POSTS</label>
        </button>

        <button>
          <span>▶</span>
          <label>REELS</label>
        </button>

        <button>
          <span>♙</span>
          <label>TAGGED</label>
        </button>
      </nav>

      {/* POSTS */}
      <section className="posts-grid">
        {posts.map((post, index) => (
          <article className="post" key={index}>
            <img src={post} alt={`post ${index + 1}`} />

            <div className="post-overlay">
              <span>♥ 120</span>
              <span>💬 15</span>
            </div>
          </article>
        ))}
      </section>

    </main>
  );
};

export default Profile;
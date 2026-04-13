function App() {
  const cardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
    textAlign: 'left',
    flex: '1 1 250px',
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        padding: '3rem 1.5rem',
      }}
    >
      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '4rem',
        }}
      >
        <p
          style={{
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            color: '#8a6f5a',
            marginBottom: '1rem',
          }}
        >
          Welcome to
        </p>

        <h1
          style={{
            fontSize: '3rem',
            marginBottom: '2rem',
          }}
        >
          Vowtera
        </h1>

        <p
          style={{
            fontSize: '1.25rem',
            maxWidth: '700px',
            margin: '0 auto 0.75rem',
            lineHeight: '1.7',
          }}
        >
          Your private place for memories and milestones.
        </p>

        <p
          style={{
            fontSize: '1rem',
            maxWidth: '700px',
            margin: '0 auto 1.5rem',
            lineHeight: '1.7',
            color: '#5f554c',
          }}
        >
          Created for couples, families, and close friends.
        </p>

        <p
          style={{
            fontSize: '1rem',
            maxWidth: '740px',
            margin: '0 auto 2rem',
            lineHeight: '1.8',
            color: '#5f554c',
          }}
        >
          When everyone is taking photos and videos on their phones, Vowtera
          gives you one private place to gather them all together. Invite the people who
          shared your moment, collect their memories, and revisit weddings,
          birthdays, anniversaries, reunions, memorials, and other meaningful
          events in one secure space.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '4rem',
          }}
        >
          <button
            style={{
              padding: '0.9rem 1.4rem',
              border: 'none',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#fff',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            Start a Private Page
          </button>

          <button
            style={{
              padding: '0.9rem 1.4rem',
              borderRadius: '999px',
              border: '1px solid #8a6f5a',
              background: 'transparent',
              color: '#8a6f5a',
              fontSize: '1rem',
              cursor: 'pointer',
            }}
          >
            See How It Works
          </button>
        </div>
      </section>

      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          paddingBottom: '4rem',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          Built for the people who were there
        </h2>

        <p
          style={{
            textAlign: 'center',
            maxWidth: '760px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.8',
            color: '#5f554c',
          }}
        >
          Vowtera is made for real-life events where friends and family capture
          the moment from every angle and everyone wants a simple, private place
          to share and relive it.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>For Creators</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Create a private page for your wedding, reunion, birthday,
              anniversary, memorial, or milestone event. Invite the right
              people, manage access, and give everyone one secure place to share
              what they captured.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>For Uploaders</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Friends and family can upload the photos and videos they took on
              their phones, add captions, and help build a fuller picture of
              the day without posting everything on public social media.
            </p>
          </div>

          <div style={cardStyle}>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>For Viewers</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Relive the event, browse favorite moments, watch meaningful
              videos, and return later for prints, downloads, and keepsakes that
              help preserve the memories you want to hold onto.
            </p>
          </div>
        </div>
      </section>
            <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          paddingBottom: '5rem',
        }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '2rem',
            marginBottom: '1rem',
          }}
        >
          How Vowtera Works
        </h2>

        <p
          style={{
            textAlign: 'center',
            maxWidth: '760px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.8',
            color: '#5f554c',
          }}
        >
          Creating a private event space should feel simple, personal, and easy
          for everyone involved.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              textAlign: 'left',
              flex: '1 1 250px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#8a6f5a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              1
            </div>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>Create your page</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Start a private page for your wedding, birthday, anniversary,
              reunion, memorial, or milestone event and make it your own.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              textAlign: 'left',
              flex: '1 1 250px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#8a6f5a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              2
            </div>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>Invite your people</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Send private invitations to the friends and family who shared the
              moment or simply want to be part of remembering it.
            </p>
          </div>

          <div
            style={{
              background: '#ffffff',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
              textAlign: 'left',
              flex: '1 1 250px',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: '#8a6f5a',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                marginBottom: '1rem',
              }}
            >
              3
            </div>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>Gather every memory</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Collect photos and videos from everyone in one secure place, then
              revisit, download, print, and preserve the memories that matter
              most.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
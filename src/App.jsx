import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function HomePage() {
  const cardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
    textAlign: 'left',
    flex: '1 1 250px',
  };

  const stepCardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
    textAlign: 'left',
    flex: '1 1 250px',
  };

  const stepNumberStyle = {
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
  };

  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        padding: '1.5rem 1.5rem 3rem',
      }}
    >
      <header
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 0 1.5rem',
        }}
      >
        <div
          style={{
            fontSize: '1.5rem',
            fontWeight: 'bold',
            color: '#8a6f5a',
          }}
        >
          Vowtera
        </div>

        <Link
          to="/signin"
          style={{
            padding: '0.75rem 1.25rem',
            borderRadius: '999px',
            border: '1px solid #8a6f5a',
            background: '#ffffff',
            color: '#8a6f5a',
            fontSize: '0.95rem',
            textDecoration: 'none',
            display: 'inline-block',
          }}
        >
          Sign In
        </Link>
      </header>

      <section
        style={{
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'center',
          paddingTop: '3rem',
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
        ><h1>THIS IS THE LIVE APP</h1>
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
          gives you one private place to gather them all. Invite the people who
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
          <Link
            to="/create-page"
            style={{
              padding: '0.9rem 1.4rem',
              border: 'none',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#fff',
              fontSize: '1rem',
              cursor: 'pointer',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Start a Private Page
          </Link>

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
          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>1</div>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>Create your page</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Start a private page for your wedding, birthday, anniversary,
              reunion, memorial, or milestone event and make it your own.
            </p>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>2</div>
            <h3 style={{ marginTop: 0, fontSize: '1.4rem' }}>Invite your people</h3>
            <p style={{ lineHeight: '1.7', color: '#5f554c' }}>
              Send private invitations to the friends and family who shared the
              moment or simply want to be part of remembering it.
            </p>
          </div>

          <div style={stepCardStyle}>
            <div style={stepNumberStyle}>3</div>
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

// Sign in page with email and password fields, and a link back to the home page.

function SignInPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          textAlign: 'left',
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}> Welcome back to Vowtera.</h2>

        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
          }}
        >
          Please sign in.
        </p>

        <form>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />

          <label
            htmlFor="password"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '0.75rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />

          <div style={{ textAlign: 'right', marginBottom: '1.5rem' }}>
            <Link
              to="/forgot-password"
              style={{
                color: '#8a6f5a',
                textDecoration: 'none',
                fontSize: '0.92rem',
              }}
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '0.95rem 1rem',
              border: 'none',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#ffffff',
              fontSize: '1rem',
              cursor: 'pointer',
              marginBottom: '1rem',
            }}
          >
            Sign In
          </button>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '1rem',
            fontSize: '0.95rem',
          }}
        >
          If you have been invited to a private event, please sign in using the email address
          and temporary password found on your invitation.  
        </p>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
         <Link
            to="/create-page"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 'bold',
            }}
          >
            Create Your Private Page
          </Link> 
          
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

function SignUpPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          textAlign: 'left',
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
          Create Your Private Page
        </h2>
        
        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
          }}
        >Create your Vowtera account to start a private page, invite guests, and gather memories in one secure place.
        </p>

        <form>
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1rem',
            }}
          >
            <div style={{ flex: '1 1 220px' }}>
              <label
                htmlFor="firstName"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                }}
              >
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter your first name"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #d8d1ca',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            <div style={{ flex: '1 1 220px' }}>
              <label
                htmlFor="lastName"
                style={{
                  display: 'block',
                  marginBottom: '0.5rem',
                  fontWeight: 'bold',
                }}
              >
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter your last name"
                style={{
                  width: '100%',
                  padding: '0.85rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid #d8d1ca',
                  fontSize: '1rem',
                  boxSizing: 'border-box',
                }}
              />
            </div>
          </div>

          <label
            htmlFor="signupEmail"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Email
          </label>
          <input
            id="signupEmail"
            type="email"
            placeholder="Enter your email"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />
          <label
            htmlFor="signupPassword"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Password
          </label>
          <input
            id="signupPassword"
            type="password"
            placeholder="Create a password"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />

          <label
            htmlFor="confirmPassword"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />

          <Link
            to="/create-event"
            style={{
              width: '100%',
              padding: '0.95rem 1rem',
              border: 'none',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#ffffff',
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'block',
              textAlign: 'center',
              boxSizing: 'border-box',
              marginBottom: '1rem',
            }}
          >
            Continue
          </Link>
        </form>

        <p
          style={{
            textAlign: 'center',
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '1rem',
            fontSize: '0.95rem',
          }}
        >
          Already have a Creator Account?
        </p>

        <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
          <Link
            to="/signin"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontSize: '0.95rem',
              fontWeight: 'bold',
            }}
          >
            Sign in here
          </Link>
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link
            to="/"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontSize: '0.95rem',
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}

function CreateEventPage({ eventDetails, setEventDetails }) {
  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '620px',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          textAlign: 'left',
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
          Create Your Event Page
        </h2>

        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
          }}
        >
          Give your private page a title and a few details so your guests know
          they are in the right place.
        </p>

        <form>
          <label
            htmlFor="eventTitle"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Event Title
          </label>
          <input
            id="eventTitle"
            type="text"
            placeholder="Example: Mary & Bob Smith's Wedding"
            value={eventDetails.title}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, title: e.target.value })
            }
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />

          <label
            htmlFor="eventType"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Event Type
          </label>
          <select
            id="eventType"
            value={eventDetails.type}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, type: e.target.value })
            }
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
              background: '#ffffff',
            }}
          >
            <option value="">Select an event type</option>
            <option value="wedding">Wedding</option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="reunion">Reunion</option>
            <option value="graduation">Graduation</option>
            <option value="memorial">Memorial</option>
            <option value="baby-shower">Baby Shower</option>
            <option value="other">Other</option>
          </select>

          <label
            htmlFor="eventDate"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Event Date
          </label>
          <input
            id="eventDate"
            type="date"
            value={eventDetails.date}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, date: e.target.value })
            }
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />

          <label
            htmlFor="welcomeMessage"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Welcome Message
          </label>
          <textarea
            id="welcomeMessage"
            rows="4"
            placeholder="Example: Thank you for being part of our special day. Please share your favorite photos and videos here."
            value={eventDetails.message}
            onChange={(e) =>
              setEventDetails({ ...eventDetails, message: e.target.value })
            }
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1.5rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
              resize: 'vertical',
            }}
          />

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/create-page"
              style={{
                padding: '0.95rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid #8a6f5a',
                background: '#ffffff',
                color: '#8a6f5a',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Back
            </Link>

           <Link
              to="/invite-people"
              style={{
                padding: '0.95rem 1.4rem',
                border: 'none',
                borderRadius: '999px',
                background: '#8a6f5a',
                color: '#ffffff',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Continue to Invitations
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

function InvitePeoplePage({ eventDetails }) {
  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '680px',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          textAlign: 'left',
        }}
      >
        <h1 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
          Invite Your People
        </h1>

        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '0.75rem',
          }}
        >
          Event:{' '}
          <strong>
            {eventDetails.title || 'Your Event Title Will Appear Here'}
          </strong>
        </p>

        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
          }}
        >
          Add the email addresses of the friends and family you want to invite.
          Each invitee will receive an email with their sign-in address and a
          temporary password.
        </p>

        <form>
          <label
            htmlFor="inviteRole"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Invitation Type
          </label>
          <select
            id="inviteRole"
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
              background: '#ffffff',
            }}
          >
            <option value="viewer">Viewer only</option>
            <option value="uploader">Can upload photos and videos</option>
          </select>

          <label
            htmlFor="inviteEmails"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Email Addresses
          </label>
          <textarea
            id="inviteEmails"
            rows="8"
            placeholder={`Enter one email per line

example1@email.com
example2@email.com
example3@email.com`}
            style={{
              width: '100%',
              padding: '0.85rem 1rem',
              marginBottom: '0.75rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
              resize: 'vertical',
            }}
          />

          <p
            style={{
              fontSize: '0.92rem',
              color: '#7a7068',
              lineHeight: '1.6',
              marginTop: 0,
              marginBottom: '1.5rem',
            }}
          >
            Tip: Paste one email per line. You can send viewer invitations first,
            then return to send uploader invitations separately if needed.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/create-event"
              style={{
                padding: '0.95rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid #8a6f5a',
                background: '#ffffff',
                color: '#8a6f5a',
                fontSize: '1rem',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Back
            </Link>

            <button
              type="submit"
              style={{
                padding: '0.95rem 1.4rem',
                border: 'none',
                borderRadius: '999px',
                background: '#8a6f5a',
                color: '#ffffff',
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Send Invitations
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function ForgotPasswordPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '420px',
          background: '#ffffff',
          borderRadius: '20px',
          padding: '2rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          textAlign: 'left',
        }}
      >
        <h1 style={{ marginTop: 0 }}>Forgot Password</h1>
        <p style={{ color: '#5f554c', lineHeight: '1.7' }}>
          This page will help returning users reset their password.
        </p>
        <Link to="/signin" style={{ color: '#8a6f5a', textDecoration: 'none' }}>
          ← Back to Sign In
        </Link>
      </div>
    </main>
  );
}

function App() {
  const [eventDetails, setEventDetails] = useState({
    title: '',
    type: '',
    date: '',
    message: '',
  });

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/create-page" element={<SignUpPage />} />
      <Route
        path="/create-event"
        element={
          <CreateEventPage
            eventDetails={eventDetails}
            setEventDetails={setEventDetails}
          />
        }
      />
      <Route
        path="/invite-people"
        element={<InvitePeoplePage eventDetails={eventDetails} />}
      />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
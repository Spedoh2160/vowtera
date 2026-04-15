import { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { supabase } from './lib/supabase';

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
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function handleSubmit(e) {
  e.preventDefault();
  setErrorMessage('');

  if (!formData.email || !formData.password) {
    setErrorMessage('Please enter your email and password.');
    return;
  }

  try {
    setLoading(true);

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: formData.email,
      password: formData.password,
    });

    if (signInError) {
      throw signInError;
    }

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError) {
      throw userError;
    }

    if (!user) {
      throw new Error('Sign in succeeded, but no user was found.');
    }

    const { data: eventRow, error: eventError } = await supabase
      .from('events')
      .select('id')
      .eq('creator_profile_id', user.id)
      .order('created_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (eventError) {
      throw eventError;
    }

    if (eventRow) {
      navigate('/creator-dashboard');
    } else {
      navigate('/create-event');
    }
  } catch (error) {
    setErrorMessage(error.message || 'Unable to sign in.');
  } finally {
    setLoading(false);
  }
}

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
        <h2 style={{ marginTop: 0, marginBottom: '0.5rem' }}>
          Welcome back to Vowtera.
        </h2>

        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.7',
            marginBottom: '1.5rem',
          }}
        >
          Please sign in.
        </p>

        <form onSubmit={handleSubmit}>
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.password}
            onChange={handleChange}
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

          {errorMessage && (
            <p
              style={{
                color: '#b3261e',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}
            >
              {errorMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.95rem 1rem',
              border: 'none',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#ffffff',
              fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginBottom: '1rem',
            }}
          >
            {loading ? 'Signing In...' : 'Sign In'}
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
          If you have been invited to a private event, please sign in using the
          email address and temporary password found on your invitation.
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
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    const { firstName, lastName, email, password, confirmPassword } = formData;

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setErrorMessage('Please complete all fields.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      setLoading(true);

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      const user = data.user;

      if (!user) {
        throw new Error('Account was created, but no user was returned.');
      }

      const { error: profileError } = await supabase.from('profiles').insert({
        id: user.id,
        first_name: firstName,
        last_name: lastName,
        display_name: `${firstName} ${lastName}`,
        email,
      });

      if (profileError) {
        throw profileError;
      }

      setSuccessMessage('Creator account created successfully.');
      navigate('/create-event');
    } catch (error) {
      setErrorMessage(error.message || 'Something went wrong creating your account.');
    } finally {
      setLoading(false);
    }
  }

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
        >
          Create your Vowtera creator account to start a private page, invite
          guests, and gather memories in one secure place.
        </p>

        <form onSubmit={handleSubmit}>
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
                value={formData.firstName}
                onChange={handleChange}
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
                value={formData.lastName}
                onChange={handleChange}
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
            htmlFor="email"
            style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontWeight: 'bold',
            }}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
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
            }}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
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
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
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

          {errorMessage && (
            <p
              style={{
                color: '#b3261e',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}
            >
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p
              style={{
                color: '#2e7d32',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}
            >
              {successMessage}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '0.95rem 1rem',
              border: 'none',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#ffffff',
              fontSize: '1rem',
              cursor: loading ? 'not-allowed' : 'pointer',
              opacity: loading ? 0.7 : 1,
              marginBottom: '1rem',
            }}
          >
            {loading ? 'Creating Account...' : 'Continue'}
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
          Already have a creator account?
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
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');

    if (!eventDetails.title || !eventDetails.type) {
      setErrorMessage('Please enter an event title and select an event type.');
      return;
    }

    try {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        throw new Error('You must be signed in to create an event.');
      }

      const { data: eventRow, error: eventError } = await supabase
        .from('events')
        .insert({
          creator_profile_id: user.id,
          title: eventDetails.title,
          event_type: eventDetails.type,
          event_date: eventDetails.date || null,
          event_location: eventDetails.location || null,
          welcome_message: eventDetails.message || null,
          is_private: true,
        })
        .select()
        .single();

      const { error: memberError } = await supabase
        .from('event_members')
        .insert({
          event_id: eventRow.id,
          profile_id: user.id,
          role: 'creator',
          joined_at: new Date().toISOString(),
        });

      if (memberError) {
        throw memberError;
      }

      setEventDetails((prev) => ({
        ...prev,
        id: eventRow.id,
      }));

      navigate('/invite-people');
    } catch (error) {
      setErrorMessage(error.message || 'Unable to create your event page.');
    } finally {
      setLoading(false);
    }
  }

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

        <form onSubmit={handleSubmit}>
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
            <option value="baby_shower">Baby Shower</option>
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
              htmlFor="eventLocation"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Event Location
            </label>
            <input
              id="eventLocation"
              type="text"
              value={eventDetails.location}
              onChange={(e) =>
                setEventDetails({ ...eventDetails, location: e.target.value })
              }
              placeholder="Example: Denver Botanic Gardens"
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
              marginBottom: '1rem',
              borderRadius: '12px',
              border: '1px solid #d8d1ca',
              fontSize: '1rem',
              boxSizing: 'border-box',
              resize: 'vertical',
            }}
          />

          {errorMessage && (
            <p
              style={{
                color: '#b3261e',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}
            >
              {errorMessage}
            </p>
          )}

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

            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '0.95rem 1.4rem',
                border: 'none',
                borderRadius: '999px',
                background: '#8a6f5a',
                color: '#ffffff',
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Creating Event...' : 'Continue to Invitations'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
function InvitePeoplePage({ eventDetails, setInvitationSummary }) {
  const navigate = useNavigate();
  const [inviteRole, setInviteRole] = useState('viewer');
  const [inviteEmails, setInviteEmails] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(false);

  function generateTemporaryPassword(length = 10) {
    const chars =
      'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789!@#$%';
    let result = '';
    for (let i = 0; i < length; i += 1) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!eventDetails.id) {
      setErrorMessage('No event was found. Please create your event page first.');
      return;
    }

    const emails = inviteEmails
      .split('\n')
      .map((email) => email.trim().toLowerCase())
      .filter(Boolean);

    if (emails.length === 0) {
      setErrorMessage('Please enter at least one email address.');
      return;
    }

    try {
      setLoading(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        throw userError;
      }

      if (!user) {
        throw new Error('You must be signed in to send invitations.');
      }

      const invitationRows = emails.map((email) => ({
        event_id: eventDetails.id,
        invited_by_profile_id: user.id,
        email,
        role: inviteRole,
        temporary_password: generateTemporaryPassword(),
        invitation_status: 'pending',
      }));

      const { error: inviteError } = await supabase
        .from('invitations')
        .insert(invitationRows);

      if (inviteError) {
        throw inviteError;
      }

      setInvitationSummary({ count: emails.length });
      setInviteEmails('');
      navigate('/invitation-confirmation');
        } catch (error) {
          setErrorMessage(error.message || 'Unable to save invitations.');
        } finally {
          setLoading(false);
        }
      }

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

        <form onSubmit={handleSubmit}>
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
            value={inviteRole}
            onChange={(e) => setInviteRole(e.target.value)}
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
            value={inviteEmails}
            onChange={(e) => setInviteEmails(e.target.value)}
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
              marginBottom: '1rem',
            }}
          >
            Tip: Paste one email per line. You can send viewer invitations first,
            then return to send uploader invitations separately if needed.
          </p>

          {errorMessage && (
            <p
              style={{
                color: '#b3261e',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}
            >
              {errorMessage}
            </p>
          )}

          {successMessage && (
            <p
              style={{
                color: '#2e7d32',
                marginBottom: '1rem',
                lineHeight: '1.6',
              }}
            >
              {successMessage}
            </p>
          )}

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
              disabled={loading}
              style={{
                padding: '0.95rem 1.4rem',
                border: 'none',
                borderRadius: '999px',
                background: '#8a6f5a',
                color: '#ffffff',
                fontSize: '1rem',
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'Saving Invitations...' : 'Send Invitations'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function InvitationConfirmationPage({ eventDetails, invitationSummary }) {
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
          padding: '2.5rem',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          textAlign: 'center',
        }}
      >
        <h1
          style={{
            marginTop: 0,
            marginBottom: '1rem',
            fontSize: '2rem',
          }}
        >
          Invitations Saved
        </h1>

        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.8',
            marginBottom: '1rem',
          }}
        >
          Your invitations for{' '}
          <strong>{eventDetails.title || 'your event'}</strong> have been saved.
        </p>

        <p
          style={{
            color: '#5f554c',
            lineHeight: '1.8',
            marginBottom: '2rem',
          }}
        >
          {invitationSummary.count} invitation
          {invitationSummary.count === 1 ? '' : 's'} {invitationSummary.count === 1 ? 'was' : 'were'} created successfully.
        </p>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/invite-people"
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
            Add More Invitations
          </Link>

          <Link
            to="/creator-dashboard"
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
            Go to Dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
function CreatorDashboardPage() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [eventData, setEventData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [invitationCount, setInvitationCount] = useState(0);
  const [invitations, setInvitations] = useState([]);

  const infoCardStyle = {
    background: '#ffffff',
    borderRadius: '20px',
    padding: '1.5rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
    flex: '1 1 280px',
  };

  useEffect(() => {
    async function loadDashboard() {
      try {
        setLoading(true);
        setErrorMessage('');

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          throw userError;
        }

        if (!user) {
          throw new Error('You must be signed in to view your dashboard.');
        }

        const { data: profileRow, error: profileError } = await supabase
            .from('profiles')
            .select('*')
            .eq('id', user.id)
            .maybeSingle();

          if (profileError) {
            throw profileError;
          }

          setProfileData(profileRow);


        const { data: eventRow, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('creator_profile_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (eventError) {
          throw eventError;
        }

        setEventData(eventRow);

        if (eventRow) {
          const { data: mediaRows, error: mediaError } = await supabase
            .from('media')
            .select('*')
            .eq('event_id', eventRow.id)
            .eq('is_visible', true)
            .order('created_at', { ascending: false });

          if (mediaError) {
            throw mediaError;
          }

          //setMediaItems(mediaRows || []);
        }

        if (eventRow) {
          const { data: invitationRows, error: inviteError } = await supabase
            .from('invitations')
            .select('*')
            .eq('event_id', eventRow.id)
            .order('invited_at', { ascending: false });

          if (inviteError) {
            throw inviteError;
          }

          setInvitations(invitationRows || []);
          setInvitationCount((invitationRows || []).length);
        }
      } catch (error) {
        setErrorMessage(error.message || 'Unable to load dashboard data.');
      } finally {
        setLoading(false);
      }
    }

    loadDashboard();
  }, []);

  if (loading) {
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
        <p>Loading your dashboard...</p>
      </main>
    );
  }

  if (errorMessage) {
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
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            maxWidth: '520px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Dashboard Error</h2>
          <p style={{ color: '#b3261e', lineHeight: '1.7' }}>{errorMessage}</p>
          <Link
            to="/"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </main>
    );
  }

  if (!eventData) {
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
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            maxWidth: '520px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginTop: 0 }}>No Event Found</h2>
          <p style={{ color: '#5f554c', lineHeight: '1.7' }}>
            You do not have an event page yet. Start by creating your first private page.
          </p>
          <Link
            to="/create-event"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Create Your Private Page
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        padding: '2rem 1.5rem 3rem',
      }}
    >
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: '#8a6f5a',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
              }}
            >
              Creator Dashboard
            </p>

            <h1
              style={{
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                fontSize: '2.2rem',
              }}
            >
              {eventData.title}
            </h1>

            <p
              style={{
                margin: 0,
                color: '#5f554c',
                lineHeight: '1.7',
              }}
            >
              {profileData
                ? `Welcome, ${profileData.display_name || `${profileData.first_name} ${profileData.last_name}`}.`
                : 'Welcome.'}
            </p>

            <p
              style={{
                marginTop: '0.35rem',
                marginBottom: 0,
                color: '#5f554c',
                lineHeight: '1.7',
              }}
            >
              Manage your private page, invitations, and event details from one place.
            </p>
          </div>

          <Link
            to="/invite-people"
            style={{
              padding: '0.95rem 1.4rem',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '1rem',
            }}
          >
            Invite More People
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <div style={infoCardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Event Details</h3>
            <p style={{ margin: '0 0 0.75rem', lineHeight: '1.7', color: '#5f554c' }}>
              <strong>Type:</strong>{' '}
              {eventData.event_type ? eventData.event_type.replace('_', ' ') : 'Not set'}
            </p>
            <p style={{ margin: '0 0 0.75rem', lineHeight: '1.7', color: '#5f554c' }}>
              <strong>Date:</strong> {eventData.event_date || 'Not set'}
            </p>
            <p style={{ margin: '0 0 0.75rem', lineHeight: '1.7', color: '#5f554c' }}>
              <strong>Location:</strong> {eventData.event_location || 'Not set'}
            </p>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#5f554c' }}>
              <strong>Message:</strong>{' '}
              {eventData.welcome_message || 'No welcome message has been added yet.'}
            </p>
          </div>

          <div style={infoCardStyle}>
            <h3 style={{ marginTop: 0, marginBottom: '1rem' }}>Invitations</h3>
            <p style={{ margin: '0 0 0.75rem', lineHeight: '1.7', color: '#5f554c' }}>
              <strong>Total Invitations Created:</strong> {invitationCount}
            </p>
            <p style={{ margin: 0, lineHeight: '1.7', color: '#5f554c' }}>
              Use the invitation page to add more viewers and uploaders as your event grows.
            </p>
          </div>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '1.75rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            marginBottom: '2rem',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: '1rem',
              fontSize: '1.5rem',
            }}
          >
            Sent Invitations
          </h2>

          {invitations.length === 0 ? (
            <p
              style={{
                margin: 0,
                color: '#5f554c',
                lineHeight: '1.7',
              }}
            >
              No invitations have been sent yet.
            </p>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table
                style={{
                  width: '100%',
                  borderCollapse: 'collapse',
                }}
              >
                <thead>
                  <tr>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        borderBottom: '1px solid #e6dfd8',
                        color: '#5f554c',
                      }}
                    >
                      Email
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        borderBottom: '1px solid #e6dfd8',
                        color: '#5f554c',
                      }}
                    >
                      Role
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        borderBottom: '1px solid #e6dfd8',
                        color: '#5f554c',
                      }}
                    >
                      Status
                    </th>
                    <th
                      style={{
                        textAlign: 'left',
                        padding: '0.75rem',
                        borderBottom: '1px solid #e6dfd8',
                        color: '#5f554c',
                      }}
                    >
                      Invited
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {invitations.map((invite) => (
                    <tr key={invite.id}>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid #f0ebe6',
                          color: '#2f2a24',
                        }}
                      >
                        {invite.email}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid #f0ebe6',
                          color: '#5f554c',
                          textTransform: 'capitalize',
                        }}
                      >
                        {invite.role}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid #f0ebe6',
                          color: '#5f554c',
                          textTransform: 'capitalize',
                        }}
                      >
                        {invite.invitation_status}
                      </td>
                      <td
                        style={{
                          padding: '0.75rem',
                          borderBottom: '1px solid #f0ebe6',
                          color: '#5f554c',
                        }}
                      >
                        {invite.invited_at
                          ? new Date(invite.invited_at).toLocaleDateString()
                          : '—'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '1.75rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: '1rem',
              fontSize: '1.5rem',
            }}
          >
            Quick Actions
          </h2>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Link
              to="/invite-people"
              style={{
                padding: '0.9rem 1.2rem',
                borderRadius: '999px',
                background: '#8a6f5a',
                color: '#ffffff',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Invite More People
            </Link>

            <Link
              to="/event-page"
              style={{
                padding: '0.9rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid #8a6f5a',
                background: '#ffffff',
                color: '#8a6f5a',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              View Event Page
            </Link>

            <Link
              to="/create-event"
              style={{
                padding: '0.9rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid #8a6f5a',
                background: '#ffffff',
                color: '#8a6f5a',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Edit Event Details
            </Link>

            <Link
              to="/"
              style={{
                padding: '0.9rem 1.2rem',
                borderRadius: '999px',
                border: '1px solid #8a6f5a',
                background: '#ffffff',
                color: '#8a6f5a',
                textDecoration: 'none',
                display: 'inline-block',
              }}
            >
              Return Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function PrivateEventPage() {
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [eventData, setEventData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [mediaItems, setMediaItems] = useState([]);

  useEffect(() => {
    async function loadEventPage() {
      try {
        setLoading(true);
        setErrorMessage('');

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) {
          throw userError;
        }

        if (!user) {
          throw new Error('You must be signed in to view this event page.');
        }

        const { data: profileRow, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();

        if (profileError) {
          throw profileError;
        }

        setProfileData(profileRow);

        const { data: eventRow, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('creator_profile_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (eventError) {
          throw eventError;
        }

        setEventData(eventRow);

        if (eventRow) {
          const { data: mediaRows, error: mediaError } = await supabase
            .from('media')
            .select('*')
            .eq('event_id', eventRow.id)
            .eq('is_visible', true)
            .order('created_at', { ascending: false });

          if (mediaError) {
            throw mediaError;
          }

          const hydratedMedia = await Promise.all(
            (mediaRows || []).map(async (item) => {
              const path = item.storage_path || item.file_url;

              if (!path) {
                return { ...item, signedUrl: null };
              }

              const { data: signedData, error: signedError } = await supabase.storage
                .from('event-media')
                .createSignedUrl(path, 3600);

              if (signedError) {
                  console.error('SIGNED URL ERROR:', signedError, 'PATH:', path);
                  return { ...item, signedUrl: null };
                }

                console.log('SIGNED URL CREATED:', signedData?.signedUrl);
                return { ...item, signedUrl: signedData.signedUrl };
            })
          );

          setMediaItems(hydratedMedia);
        }
      } catch (error) {
        setErrorMessage(error.message || 'Unable to load the event page.');
      } finally {
        setLoading(false);
      }
    }

    loadEventPage();
  }, []);

  if (loading) {
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
        <p>Loading your event page...</p>
      </main>
    );
  }

  if (errorMessage) {
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
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            maxWidth: '540px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Event Page Error</h2>
          <p style={{ color: '#b3261e', lineHeight: '1.7' }}>{errorMessage}</p>
          <Link
            to="/creator-dashboard"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            ← Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  if (!eventData) {
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
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            maxWidth: '540px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginTop: 0 }}>No Event Found</h2>
          <p style={{ color: '#5f554c', lineHeight: '1.7' }}>
            Create your event page first, then return here to view and manage it.
          </p>
          <Link
            to="/create-event"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            Create Your Event Page
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        padding: '2rem 1.5rem 3rem',
      }}
    >
      <section
        style={{
          maxWidth: '1100px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '1rem',
            flexWrap: 'wrap',
            marginBottom: '2rem',
          }}
        >
          <div>
            <p
              style={{
                margin: 0,
                color: '#8a6f5a',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                fontSize: '0.85rem',
              }}
            >
              Private Event Page
            </p>

            <h1
              style={{
                marginTop: '0.5rem',
                marginBottom: '0.5rem',
                fontSize: '2.4rem',
              }}
            >
              {eventData.title}
            </h1>

            <p
              style={{
                margin: 0,
                color: '#5f554c',
                lineHeight: '1.7',
              }}
            >
              {profileData
                ? `Managed by ${profileData.display_name || `${profileData.first_name} ${profileData.last_name}`}`
                : 'Managed by event creator'}
            </p>
          </div>

          <Link
            to="/upload-media"
            style={{
              padding: '0.95rem 1.4rem',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '1rem',
            }}
          >
            Upload Photos or Videos
          </Link>
        </div>

        <div
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '1.75rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            marginBottom: '2rem',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: '1rem',
              fontSize: '1.5rem',
            }}
          >
            Event Details
          </h2>

          <p style={{ margin: '0 0 0.75rem', lineHeight: '1.7', color: '#5f554c' }}>
            <strong>Type:</strong>{' '}
            {eventData.event_type ? eventData.event_type.replace('_', ' ') : 'Not set'}
          </p>

          <p style={{ margin: '0 0 0.75rem', lineHeight: '1.7', color: '#5f554c' }}>
            <strong>Date:</strong> {eventData.event_date || 'Not set'}
          </p>

          <p style={{ margin: '0 0 0.75rem', lineHeight: '1.7', color: '#5f554c' }}>
            <strong>Location:</strong> {eventData.event_location || 'Not set'}
          </p>

          <p style={{ margin: 0, lineHeight: '1.7', color: '#5f554c' }}>
            <strong>Welcome Message:</strong>{' '}
            {eventData.welcome_message || 'No welcome message has been added yet.'}
          </p>
        </div>

        <div
          style={{
            marginBottom: '2rem',
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: '1rem',
              fontSize: '1.7rem',
            }}
          >
            Gallery
          </h2>

          {mediaItems.length === 0 ? (
            <div
              style={{
                background: '#ffffff',
                borderRadius: '18px',
                padding: '1.5rem',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
                color: '#7a7068',
                lineHeight: '1.7',
              }}
            >
              No photos or videos have been added yet.
            </div>
          ) : (
            <div
              style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              {mediaItems.map((item) => (
                <div
                  key={item.id}
                  style={{
                    background: '#ffffff',
                    borderRadius: '18px',
                    padding: '1rem',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
                    flex: '1 1 280px',
                  }}
                >
                  {item.media_type === 'photo' && item.signedUrl ? (
                    <img
  src={item.signedUrl}
  alt={item.caption || 'Uploaded event photo'}
  style={{
    width: '100%',
    height: 'auto',
    borderRadius: '12px',
    marginBottom: '0.75rem',
  }}
/>
                  ) : null}

                  {item.media_type === 'video' && item.signedUrl ? (
                    <video
                      controls
                      src={item.signedUrl}
                      style={{
                        width: '100%',
                        height: '220px',
                        objectFit: 'cover',
                        borderRadius: '12px',
                        marginBottom: '0.75rem',
                      }}
                    />
                  ) : null}

                  <p
                    style={{
                      marginTop: 0,
                      marginBottom: '0.5rem',
                      color: '#8a6f5a',
                      textTransform: 'capitalize',
                      fontWeight: 'bold',
                    }}
                  >
                    {item.media_type}
                  </p>

                  <p
                    style={{
                      margin: 0,
                      lineHeight: '1.6',
                      color: '#5f554c',
                    }}
                  >
                    {item.caption || 'No caption provided.'}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/creator-dashboard"
            style={{
              padding: '0.9rem 1.2rem',
              borderRadius: '999px',
              border: '1px solid #8a6f5a',
              background: '#ffffff',
              color: '#8a6f5a',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Back to Dashboard
          </Link>

          <Link
            to="/upload-media"
            style={{
              padding: '0.9rem 1.2rem',
              borderRadius: '999px',
              background: '#8a6f5a',
              color: '#ffffff',
              textDecoration: 'none',
              display: 'inline-block',
            }}
          >
            Upload Photos or Videos
          </Link>
        </div>
      </section>
    </main>
  );
}
function UploadMediaPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [eventData, setEventData] = useState(null);
  const [profileData, setProfileData] = useState(null);
  const [authUserId, setAuthUserId] = useState('');

  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    mediaType: 'photo',
    caption: '',
  });

  useEffect(() => {
    async function loadUploadPage() {
      try {
        setLoading(true);
        setErrorMessage('');

        const {
          data: { user },
          error: userError,
        } = await supabase.auth.getUser();

        if (userError) throw userError;
        if (!user) throw new Error('You must be signed in to upload media.');

        console.log('LOAD PAGE auth user id:', user.id);
        setAuthUserId(user.id);

        const { data: profileRow, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .maybeSingle();

        if (profileError) throw profileError;

        console.log('LOAD PAGE profile row:', profileRow);
        setProfileData(profileRow);

        const { data: eventRow, error: eventError } = await supabase
          .from('events')
          .select('*')
          .eq('creator_profile_id', user.id)
          .order('created_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (eventError) throw eventError;
        if (!eventRow) throw new Error('No event was found for this account.');

        console.log('LOAD PAGE event row:', eventRow);
        setEventData(eventRow);
      } catch (error) {
        console.error('LOAD PAGE ERROR:', error);
        setErrorMessage(error.message || 'Unable to load upload page.');
      } finally {
        setLoading(false);
      }
    }

    loadUploadPage();
  }, []);

  function handleChange(e) {
    const { id, value, files } = e.target;

    if (id === 'mediaFile') {
      setSelectedFile(files?.[0] || null);
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setErrorMessage('');
    setSuccessMessage('');

    if (!eventData) {
      setErrorMessage('No event found.');
      return;
    }

    if (!profileData) {
      setErrorMessage('No profile found.');
      return;
    }

    if (!selectedFile) {
      setErrorMessage('Please choose a file to upload.');
      return;
    }

    try {
      setSaving(true);

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error('AUTH LOOKUP ERROR:', userError);
        throw new Error(`Auth lookup failed: ${userError.message}`);
      }

      if (!user) {
        throw new Error('You must be signed in to upload media.');
      }

      const safeFileName = selectedFile.name.replace(/\s+/g, '-');
      const storagePath = `${eventData.id}/${profileData.id}/${Date.now()}-${safeFileName}`;

      console.log('SUBMIT auth user id:', user.id);
      console.log('SUBMIT profileData.id:', profileData.id);
      console.log('SUBMIT eventData.id:', eventData.id);
      console.log('SUBMIT storagePath:', storagePath);
      console.log('SUBMIT selectedFile:', {
        name: selectedFile.name,
        size: selectedFile.size,
        type: selectedFile.type,
      });

      const { error: uploadError } = await supabase.storage
        .from('event-media')
        .upload(storagePath, selectedFile, {
          cacheControl: '3600',
          upsert: false,
        });

      if (uploadError) {
        console.error('UPLOAD ERROR:', uploadError);
        throw new Error(`Upload failed: ${uploadError.message}`);
      }

      const { error: mediaError } = await supabase.from('media').insert({
        event_id: eventData.id,
        uploaded_by_profile_id: profileData.id,
        media_type: formData.mediaType,
        file_url: storagePath,
        storage_path: storagePath,
        caption: formData.caption.trim() || null,
        is_visible: true,
      });

      if (mediaError) {
        console.error('MEDIA INSERT ERROR:', mediaError);
        throw new Error(`Media insert failed: ${mediaError.message}`);
      }

      setSuccessMessage('Media uploaded successfully.');
      setSelectedFile(null);
      setFormData({
        mediaType: 'photo',
        caption: '',
      });
    } catch (error) {
      console.error('HANDLE SUBMIT ERROR:', error);
      setErrorMessage(error.message || 'Unable to upload media.');
    } finally {
      setSaving(false);
    }
  }

  if (loading) {
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
        <p>Loading upload page...</p>
      </main>
    );
  }

  if (errorMessage && !eventData) {
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
            background: '#ffffff',
            padding: '2rem',
            borderRadius: '20px',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
            maxWidth: '540px',
            textAlign: 'center',
          }}
        >
          <h2 style={{ marginTop: 0 }}>Upload Page Error</h2>
          <p style={{ color: '#b3261e', lineHeight: '1.7' }}>{errorMessage}</p>
          <Link
            to="/creator-dashboard"
            style={{
              color: '#8a6f5a',
              textDecoration: 'none',
              fontWeight: 'bold',
            }}
          >
            ← Back to Dashboard
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: '100vh',
        fontFamily: 'Arial, sans-serif',
        background: '#f8f6f2',
        color: '#2f2a24',
        padding: '2rem 1.5rem 3rem',
      }}
    >
      <section
        style={{
          maxWidth: '820px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            background: '#ffffff',
            borderRadius: '20px',
            padding: '2rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
          }}
        >
          <p
            style={{
              margin: 0,
              color: '#8a6f5a',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              fontSize: '0.85rem',
            }}
          >
            Upload Media
          </p>

          <h1
            style={{
              marginTop: '0.5rem',
              marginBottom: '0.5rem',
              fontSize: '2.2rem',
            }}
          >
            {eventData?.title || 'Your Event'}
          </h1>

          <p
            style={{
              marginTop: 0,
              marginBottom: '0.5rem',
              color: '#5f554c',
              lineHeight: '1.7',
            }}
          >
            Add a photo or video entry to your private event page.
          </p>

          <p
            style={{
              marginTop: 0,
              marginBottom: '1.5rem',
              color: '#7a7068',
              lineHeight: '1.6',
              fontSize: '0.95rem',
            }}
          >
            Debug info: auth user = {authUserId || 'unknown'} | profile = {profileData?.id || 'unknown'} | event = {eventData?.id || 'unknown'}
          </p>

          <form onSubmit={handleSubmit}>
            <label
              htmlFor="mediaType"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Media Type
            </label>
            <select
              id="mediaType"
              value={formData.mediaType}
              onChange={handleChange}
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
              <option value="photo">Photo</option>
              <option value="video">Video</option>
            </select>

            <label
              htmlFor="mediaFile"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Select File
            </label>

            <input
              id="mediaFile"
              type="file"
              accept={formData.mediaType === 'photo' ? 'image/*' : 'video/*'}
              onChange={handleChange}
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
            />

            {formData.mediaType === 'video' && (
              <p
                style={{
                  fontSize: '0.92rem',
                  color: '#7a7068',
                  lineHeight: '1.6',
                  marginTop: 0,
                  marginBottom: '1rem',
                }}
              >
                For best playback results, videos should be uploaded in MP4 format. Other
                video file types may not display correctly in all browsers.
              </p>
            )}

            <label
              htmlFor="caption"
              style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontWeight: 'bold',
              }}
            >
              Caption
            </label>
            <textarea
              id="caption"
              rows="4"
              value={formData.caption}
              onChange={handleChange}
              placeholder="Add a caption or description"
              style={{
                width: '100%',
                padding: '0.85rem 1rem',
                marginBottom: '1rem',
                borderRadius: '12px',
                border: '1px solid #d8d1ca',
                fontSize: '1rem',
                boxSizing: 'border-box',
                resize: 'vertical',
              }}
            />

            {errorMessage && (
              <p
                style={{
                  color: '#b3261e',
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                }}
              >
                {errorMessage}
              </p>
            )}

            {successMessage && (
              <p
                style={{
                  color: '#2e7d32',
                  marginBottom: '1rem',
                  lineHeight: '1.6',
                }}
              >
                {successMessage}
              </p>
            )}

            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Link
                to="/event-page"
                style={{
                  padding: '0.9rem 1.2rem',
                  borderRadius: '999px',
                  border: '1px solid #8a6f5a',
                  background: '#ffffff',
                  color: '#8a6f5a',
                  textDecoration: 'none',
                  display: 'inline-block',
                }}
              >
                Back to Event Page
              </Link>

              <button
                type="submit"
                disabled={saving}
                style={{
                  padding: '0.9rem 1.2rem',
                  borderRadius: '999px',
                  background: '#8a6f5a',
                  color: '#ffffff',
                  border: 'none',
                  cursor: saving ? 'not-allowed' : 'pointer',
                  opacity: saving ? 0.7 : 1,
                }}
              >
                {saving ? 'Saving...' : 'Save Media'}
              </button>
            </div>
          </form>
        </div>
      </section>
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
  id: '',
  title: '',
  type: '',
  date: '',
  location: '',
  message: '',
});

  const [invitationSummary, setInvitationSummary] = useState({
    count: 0,
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
        element={
          <InvitePeoplePage
            eventDetails={eventDetails}
            setInvitationSummary={setInvitationSummary}
          />
        }
      />
      <Route
        path="/invitation-confirmation"
        element={
          <InvitationConfirmationPage
            eventDetails={eventDetails}
            invitationSummary={invitationSummary}
          />
        }
      />
      <Route path="/creator-dashboard" element={<CreatorDashboardPage />} />
      <Route path="/event-page" element={<PrivateEventPage />} />
      <Route path="/upload-media" element={<UploadMediaPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />
    </Routes>
  );
}

export default App;
import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    topic: 'Job seeker support',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    // TODO: wire this up to your backend POST /api/contact
    console.log('Form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: 800, margin: '0 auto' }}>

      {/* Header */}
      <p style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#0F6E56', marginBottom: 12 }}>
        Get in touch
      </p>
      <h1 style={{ fontSize: 28, fontWeight: 500, marginBottom: 8 }}>
        We'd love to hear from you
      </h1>
      <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.6, marginBottom: 32, maxWidth: 480 }}>
        Have a question about finding work or posting a job in your barangay?
        Send us a message and we'll get back to you within one business day.
      </p>

      {submitted ? (
        <div style={{ padding: '1.5rem', background: '#E1F5EE', borderRadius: 12, color: '#085041', fontSize: 15 }}>
          ✓ Message sent! We'll get back to you soon.
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '2rem' }}>

          {/* Left — form */}
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              <div>
                <label style={labelStyle}>First name</label>
                <input style={inputStyle} name="firstName" placeholder="Juan" value={formData.firstName} onChange={handleChange} />
              </div>
              <div>
                <label style={labelStyle}>Last name</label>
                <input style={inputStyle} name="lastName" placeholder="dela Cruz" value={formData.lastName} onChange={handleChange} />
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Email address</label>
              <input style={inputStyle} name="email" type="email" placeholder="juan@email.com" value={formData.email} onChange={handleChange} />
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Topic</label>
              <select style={inputStyle} name="topic" value={formData.topic} onChange={handleChange}>
                <option>Job seeker support</option>
                <option>Employer / job posting</option>
                <option>Barangay partnership</option>
                <option>Technical issue</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ marginBottom: 16 }}>
              <label style={labelStyle}>Message</label>
              <textarea
                style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }}
                name="message"
                placeholder="Tell us how we can help…"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button onClick={handleSubmit} style={btnStyle}>
              Send message →
            </button>
          </div>

          {/* Right — contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <InfoCard icon="📧" title="Email us" value="hello@bridge360.ph" />
            <InfoCard icon="📍" title="Location" value="Metro Manila, Philippines" />
            <div style={cardStyle}>
              <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 10 }}>Office hours</p>
              {[
                { day: 'Mon – Fri', hours: '9am – 5pm' },
                { day: 'Saturday', hours: 'Closed' },
                { day: 'Sunday', hours: 'Closed' },
              ].map(({ day, hours }) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, padding: '5px 0', borderBottom: '0.5px solid #e5e7eb' }}>
                  <span style={{ color: '#6b7280' }}>{day}</span>
                  <span style={{ fontWeight: 500 }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      )}
    </div>
  )
}

function InfoCard({ icon, title, value }: { icon: string; title: string; value: string }) {
  return (
    <div style={cardStyle}>
      <div style={{ fontSize: 20, marginBottom: 8 }}>{icon}</div>
      <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 2 }}>{title}</p>
      <p style={{ fontSize: 13, color: '#6b7280' }}>{value}</p>
    </div>
  )
}

const labelStyle: React.CSSProperties = {
  display: 'block', fontSize: 13, fontWeight: 500, color: '#374151', marginBottom: 5,
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '9px 12px', fontSize: 14,
  border: '1px solid #d1d5db', borderRadius: 8,
  background: 'white', color: '#111827', outline: 'none',
}

const btnStyle: React.CSSProperties = {
  width: '100%', padding: '10px', fontSize: 14, fontWeight: 500,
  borderRadius: 8, background: '#0F6E56', color: '#E1F5EE',
  border: 'none', cursor: 'pointer',
}

const cardStyle: React.CSSProperties = {
  background: 'white', border: '1px solid #e5e7eb',
  borderRadius: 12, padding: '1rem',
}
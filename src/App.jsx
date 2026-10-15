import React from 'react';
import './GymAd.css'; // Assuming you have a CSS file for styles

const GymAd = () => {
  // Data for the ad content
  const benefits = [
    { icon: '💪', text: 'Build Muscle' },
    { icon: '🔥', text: 'Burn Fat' },
    { icon: '⚡', text: 'Boost Energy' },
    { icon: '🧘', text: 'Reduce Stress' },
  ];

  const plans = [
    { name: 'Basic', price: '$29', period: '/month', features: ['Gym access', 'Locker room', '1 free class'] },
    { name: 'Pro', price: '$59', period: '/month', features: ['Everything in Basic', 'All classes', 'Sauna & Pool', '1 PT session'] },
    { name: 'Elite', price: '$99', period: '/month', features: ['Everything in Pro', 'Unlimited PT', 'Nutrition plan', 'Guest passes'] },
  ];

  return (
    <div className="gym-ad-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            TRANSFORM YOUR BODY <br />
            <span className="highlight">TRANSFORM YOUR LIFE</span>
          </h1>
          <p className="hero-subtitle">
            Join FitLife Gym today and get <strong>50% OFF</strong> your first month.
            No hidden fees. Cancel anytime.
          </p>
          <button className="cta-button primary-cta">Claim Your Offer</button>
          <p className="urgency-text">⏳ Limited time offer – ends in 3 days!</p>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
            alt="Gym interior with modern equipment" 
          />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <h2>Why Choose FitLife?</h2>
        <div className="benefits-grid">
          {benefits.map((benefit, index) => (
            <div key={index} className="benefit-card">
              <span className="benefit-icon">{benefit.icon}</span>
              <p>{benefit.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Membership Plans Section */}
      <section className="plans-section">
        <h2>Choose Your Plan</h2>
        <div className="plans-grid">
          {plans.map((plan, index) => (
            <div key={index} className={`plan-card ${plan.name === 'Pro' ? 'popular' : ''}`}>
              {plan.name === 'Pro' && <div className="popular-badge">Most Popular</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>
              <button className="cta-button plan-cta">Get Started</button>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial / Social Proof */}
      <section className="testimonial-section">
        <blockquote>
          "I've never felt stronger. The trainers at FitLife pushed me beyond what I thought possible."
        </blockquote>
        <p className="author">— Alex Johnson, Member since 2023</p>
      </section>

      {/* Final Call to Action */}
      <section className="final-cta-section">
        <h2>Ready to Start Your Journey?</h2>
        <p>Join today and get a <strong>free fitness assessment</strong> + <strong>personal training session</strong>.</p>
        <button className="cta-button primary-cta large">Sign Up Now</button>
        <p className="fine-print">No commitment. Cancel anytime.</p>
      </section>
    </div>
  );
};

export default GymAd;

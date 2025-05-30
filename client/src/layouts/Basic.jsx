import React from 'react';

const Basic = () => {

    // const handleGetStarted = () => {
    //     alert('Get Started clicked!');
    // };

    return (
        <>
            <header className="bg-pink-300 text-white py-15 shadow-md flex flex-col sm:flex-row items-center justify-between px-6" style={{ position: 'relative', backgroundColor: '#f9a8d4' }}>
                <div className="text-2xl font-semibold flex items-center gap-2">
                    <span style={{ color: '#8e24aa' }}>PeN AnD PeNciL 🖋️</span>
                </div>
                <div style={{ position: 'absolute', right: 24, top: '50%', transform: 'translateY(-50%)', display: 'flex', gap: '16px' }}>
                    <button
                        style={{
                            padding: '12px 32px',
                            fontSize: '18px',
                            backgroundColor: '#8e24aa',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        SignUp
                    </button>
                    <button
                        style={{
                            padding: '12px 32px',
                            fontSize: '18px',
                            backgroundColor: '#9c27b0',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        SignIn
                    </button>
                </div>
            </header>
            <div style={{
                height: '100vh',
                position: 'relative'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                }}>
                    <div style={{ color: '#8e24aa', textAlign: 'center', marginBottom: '24px' }}>
                        <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '12px' }}>WeLcOmE To PeN AnD PeNciL</h1>
                        <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                            Discover a creative space to write, draw, and express your ideas.<br />
                            Our platform is designed for artists, writers, and thinkers alike.<br />
                            Join us and start your journey with PeN AnD PeNciL today!
                        </p>
                    </div>
                    <button
                        // onClick={handleGetStarted}
                        style={{
                            padding: '12px 32px',
                            fontSize: '18px',
                            backgroundColor: '#f9a8d4',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        Get Started
                    </button>
                    <br />
                    <button style={{
                            padding: '12px 32px',
                            fontSize: '18px',
                            backgroundColor: '#ce93d8',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '10px',
                            cursor: 'pointer'
                        }}
                    >
                        Give a Try
                    </button>
                </div>
            </div>
        </>
    );
};

export default Basic;
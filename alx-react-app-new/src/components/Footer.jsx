function Footer() {
  return (
      <footer style={{
        backgroundColor: '#2c3e50',     // Dark gray-blue
        color: 'white',                 // White text
        textAlign: 'center',            // Center text
        padding: '20px',                // Space inside
        position: 'fixed',              // Stick to bottom
        bottom: '0',                    // At the very bottom
        width: '100%',                  // Full width
        boxShadow: '0 -2px 5px rgba(0,0,0,0.1)'  // Shadow on top
    }}>
          <p style={{ 
                margin: '0',                // Remove default margins
                fontSize: '14px'            // Smaller text
            }}>© 2023 City Lovers</p>
      </footer>
  );
}

export default Footer;
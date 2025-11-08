function MainContent() {
  return (
      <main style={{
        padding: '40px',               // Space inside
        backgroundColor: '#f5f5f5',    // Light gray background
        minHeight: '300px',            // Minimum height
        textAlign: 'center'            // Center text
    }}>
          <p style={{
                fontSize: '18px',           // Bigger text
                color: '#2c3e50',          // Dark gray-blue
                maxWidth: '600px',         // Don't stretch too wide
                margin: '0 auto',          // Center the paragraph
                lineHeight: '1.8'          // Comfortable reading space
            }}>I love to visit New York, Paris, and Tokyo.</p>
      </main>
  );
}

export default MainContent;
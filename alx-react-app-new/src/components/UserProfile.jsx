const UserProfile = (props) => {
  return (
      <div style={{ 
        border: '1px solid gray',     
        padding: '20px',              
        margin: '20px',                
        borderRadius: '10px',         
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)', 
        backgroundColor: 'white'       
    }}>
          <h2  style={{ 
                color: 'blue',              
                fontSize: '24px',          
                marginBottom: '10px'
            }}>{props.name}</h2>
          <p style={{ fontSize: '16px', color: '#333' }}>Age: {props.age}</p>
          <p style={{ 
                fontSize: '14px', 
                color: '#555',
                lineHeight: '1.6'           
            }}>Bio: {props.bio}</p>
      </div>
  );
};

export default UserProfile;
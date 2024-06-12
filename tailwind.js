
    tailwind.config = {
      theme: {  
        extend: {
          colors: {
            clifford: '#da373d',
            'nbk-brown': '#3c251f',
            'nbk-yellow': '#FFBA00',
          },
          fontFamily: {
            'poppins': ["Poppins", 'sans-serif'],
            'montserrat': ['Montserrat', 'sans-serif'],
          },
          gridTemplateColumns: {
            // Simple 16 column grid
            'four-columns': 'repeat(auto-fit, minmax(180px, 1fr))',
            'five-columns': 'repeat(auto-fit, minmax(180px, 1fr))',
    
            // Complex site-specific column configuration
            'footer': '200px minmax(900px, 1fr) 100px',
          }
        }
      }
    }
 
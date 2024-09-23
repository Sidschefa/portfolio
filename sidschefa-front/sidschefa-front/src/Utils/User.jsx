export const getIdUser = () => {
  const token = getToken();
  if(token){
    try {
      const decoded = jwtDecode(token);
     return decoded.userId;
    } catch (error) {
      console.error('Token decoding failed:', error);
      return null;
    }
  }
}
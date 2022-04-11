import img from './error.gif'

const ErrorMessage = () => {
   return (
      <div style={{ width: "100%", display: "flex", justifyContent: "center", overflow: "hidden", backgroundColor: "#000", borderRadius: "10px" }}>
         <img src={img} alt="error-message" style={{ 'height': '280px' }} />
      </div>
   )
}

export default ErrorMessage;
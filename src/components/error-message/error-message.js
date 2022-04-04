import img from './error.gif'

const ErrorMessage = () => {
   return (
      <div style={{ width: "200px", display: "flex", justifyContent: "center", overflow: "hidden", backgroundColor: "#000", borderRadius: "10px" }}>
         <img src={img} alt="error-message" style={{ margin: "50px 0" }} />
      </div>
   )
}

export default ErrorMessage;
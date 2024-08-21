exports.handler = async (event, context) => {
  // Aquí va tu lógica de registro
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Registro exitoso!" })
  };
};
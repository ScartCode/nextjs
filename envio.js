const sendData = async () => {
  const tipo_documento_cliente = document.querySelector('select[name="typeDocument"]').value;
  const fileStatus = document.querySelector('.file_status');
  const file = document.querySelector('input[type="file"]').files[0];
  const data = {
    tipo_documento_cliente,
    metodo_pago: document.querySelector('input[name="metodo_pago"]:checked').value,
    nroDocument: document.querySelector('input[name="nroDocument"]').value,
    name: document.querySelector('input[name="name"]').value,
    lastName: document.querySelector('input[name="lastName"]').value,
    email: document.querySelector('input[name="email"]').value,
    phone: document.querySelector('input[name="phone"]').value,
    country: document.querySelector('input[name="country"]').value,
    direction: document.querySelector('input[name="direction"]').value,
    references: document.querySelector('input[name="references"]').value,
    file : file
  };
    console.log(data);
    //funcion enviar con ayax
    const response = await sendAjaxRequest(data);
    console.log(response);
    // Puedes realizar acciones adicionales después de recibir la respuesta
 
};


// envio de formulario par registrar cliente promesas

const sendAjaxRequest = (data) => {
  return new Promise((resolve, reject) => {
    $.ajax({
      type: "POST",
      url: "https://tronsmartperu.pe/api.php",
      data: { formdata: data },
      success: function (response) {
        resolve(response);
      },
      error: function (error) {
        reject(error);
      }
    });
  });
};

/* */
btn_chkt.addEventListener("click", function(){
  if(
        !nroDocumento.value ||
      !nombre.value ||
      !apellido.value ||
      !email.value ||
      !phone.value ||
      !country.value ||
      !direction.value ||
      !references.value
  ){
      sendData
  }else{
      alert("error en la compra porfavor contactese con nuestros asesores para completar su compra")
  }
  
});
/frontend   # Código de React/Next  (interfaz d usuario)
/backend    # API en Node.js/Express
/docs       # Diseños o documentación 

// Ejemplo de componente Producto.js  
function Producto({ nombre, precio, stock }) {  
  const [cantidad, setCantidad] = useState(0);  

  return (  
    <div className="producto">  
      <h3>{nombre}</h3>  
      <p>Precio: ${precio}</p>  
      {stock > 0 ? (  
        <button onClick={() => añadirAlCarrito(nombre, precio)}>  
          Comprar  
        </button>  
      ) : (  
        <p>AGOTADO</p>  
      )}  
    </div>  
  );  
}  

app.post('/api/pedidos', (req, res) => {  
  const pedido = req.body;  
  // Guardar en Firebase/PostgreSQL  
  res.json({ success: true, pedido });  
});  

{  
  id: "1",  
  nombre: "Nueces",  
  precio: 10.99,  
  stock: 50,  
  imagen: "url.jpg"  
}  

import { db } from './firebase';  

function actualizarStock(productoId, cantidadComprada) {  
  const docRef = db.collection("productos").doc(productoId);  
  docRef.update({ stock: firebase.firestore.FieldValue.increment(-cantidadComprada) });  
}  

mercadopago.preferences.create({  
  items: [  
    {  
      title: "Bolsa de Almendras",  
      unit_price: 10.99,  
      quantity: 2,  
    }  
  ]  
}).then(response => {  
  window.location.href = response.body.init_point; // Redirige a MercadoPago  
});  

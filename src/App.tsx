import './App.css'
import AlertBox from './components/AlertBox/AlertBox'
import ProductDisplay from './components/ProductDisplay/ProductDisplay';
import UserProfileCard from './components/UserProfileCard/UserProfileCard';
import { useState } from 'react'

// function App() {
    


//   return (
//     <>
//       <AlertBox
//         type="success"
//         message="Your profile has been updated successfully!"
//         onClose={() => alert('Alert closed')}
//       >
//         <p className="text-sm">You can now continue using the application.</p>
//       </AlertBox>

//       <UserProfileCard
//         user={user}
//         showEmail={true}
//         showRole={true}
//         onEdit={(userId: string) => alert(`Editing user ${userId}`)}
//         >
//         <div className="text-sm text-gray-500">
//             Last login: 2 hours ago
//         </div>
//       </UserProfileCard>

//       <ProductDisplay
//         product={product}
//         showDescription={true}
//         showStockStatus={true}
//         onAddToCart={(productId: any) => alert(`Added product ${productId} to cart`)}
//         >
//         <div className="text-sm text-gray-500">
//           Free shipping available
//         </div>
//         </ProductDisplay>
// </>

//   )
// }

// export default App



const App = () => {

  const [showAlert, setShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>([]);

    const product = {
        id: '1',
        name: 'Wireless Headphones',
        price: 199.99,
        description: 'High-quality wireless headphones with noise cancellation.',
        imageUrl: 'https://images.pexels.com/photos/28920288/pexels-photo-28920288/free-photo-of-modern-white-wireless-headphones-on-gray-surface.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        inStock: true
        };

  const user = {
        id: '1',
        name: 'Sam Dracula',
        email: 'down4thecount1367@aol.com',
        role: 'Part-Time Count / Full-Time Grandfather',
        avatarUrl: 'https://yt3.ggpht.com/a/AATXAJx7BlM55D5RQul1ItW9JFFlcxF4GzrbdasnpA=s900-c-k-c0xffffffff-no-rj-mo'
      };
 
  const handleAddToCart = (productId: string) => {
    setCartItems([...cartItems, productId]);
    setShowAlert(true);
    console.log(cartItems);
  };
 
  return (
    <div className="flex flex-col">
      {showAlert && (
        <AlertBox
          type="success"
          message="Product added to cart!"
          onClose={() => setShowAlert(false)}
        />
      )}
 
      <div className="flex flex-col gap-10">
        <UserProfileCard
          user={user}
          showEmail={true}
          showRole={true}
          onEdit={(userId) => alert(`Editing user ${userId}`)}
        />
 
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={handleAddToCart}
        >
        <div className="text-sm text-gray-500">
            Free shipping available
        </div>
        </ProductDisplay>
        </div>
        <div className="mt-5 text-gray-300">Cart Items: {cartItems}</div>
    </div>
  );
};

export default App
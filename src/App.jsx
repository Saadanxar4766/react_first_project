
import products from './components/Itemobject'; // Adjust the path as needed
import Card from './components/card';
import Footer from './components/footer';
// import Card from './components/card'; // Adjust the path as needed
import Navbar from './components/header';

function App() {
  // console.log(products);

  return (
    <>
            <Navbar/>
          <div class="flex flex-wrap -m-4">

      {products.map((data) => {
       return <Card
       key={data.id}
          category={data.category}
          description={data.description}
          image={data.image}
          price={data.price}
          title={data.title}
       />

})}
</div>
<Footer/>
    </>
  );
}

export default App;


// import Card from "./components/card";
// import eCommerceData from "./components/products";
// console.log(eCommerceData);

// function App() {
//   return (
//     <>
//       {eCommerceData.map((data) => (
//         <Card
          // key={data.id}
          // category={data.category}
          // description={data.description}
          // image={data.image}
          // price={data.price}
          // title={data.title}
//         />
//       ))}
//     </>
//   );
// }
// export default App;
